// Runs at BUILD time only (the site is prerendered), so visitors' browsers never call GitHub.
// To pick up a new release, the site just needs rebuilding: see .github/workflows/deploy.yml.
const REPO = 'AshFrancisDev/condotta-releases';

export const prerender = true;

/** Turn a release's markdown notes into a plain list of bullet lines. */
function toChanges(body) {
	const lines = (body ?? '')
		.split(/\r?\n/)
		.map((line) => line.replace(/^\s*([-*+]|\d+\.)\s+/, '').replace(/^#+\s*/, '').trim())
		.filter(Boolean);
	return lines.length ? lines : ['No release notes provided.'];
}

function formatSize(bytes) {
	return bytes ? `${(bytes / 1024 / 1024).toFixed(0)} MB` : '';
}

export async function load({ fetch }) {
	const url = `https://api.github.com/repos/${REPO}/releases?per_page=30`;
	const headers = { Accept: 'application/vnd.github+json' };

	// The deploy workflow passes a token to avoid GitHub's low anonymous rate limit.
	let res = await fetch(url, {
		headers: process.env.GITHUB_TOKEN
			? { ...headers, Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
			: headers
	});
	// The repo is public, so if a token is set but rejected (e.g. a stale one in your shell),
	// just retry without it.
	if (res.status === 401) res = await fetch(url, { headers });

	// Failing the build here is deliberate: the previous good version of the site stays live.
	if (!res.ok) throw new Error(`Could not load releases from ${REPO}: ${res.status}`);

	const releases = (await res.json()).filter((r) => !r.draft && !r.prerelease);
	if (!releases.length) throw new Error(`No published releases found in ${REPO}`);

	// Newest first, in case the API order ever changes.
	releases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
	const newest = releases[0];
	const installer = newest.assets.find((a) => a.name.toLowerCase().endsWith('.exe'));
	if (!installer) throw new Error(`Release ${newest.tag_name} has no .exe installer`);

	return {
		latest: {
			version: newest.tag_name.replace(/^v/, ''),
			date: newest.published_at.slice(0, 10),
			url: installer.browser_download_url,
			platform: 'Windows 10 or later',
			size: formatSize(installer.size)
		},
		changelog: releases.map((r) => ({
			version: r.tag_name.replace(/^v/, ''),
			date: r.published_at.slice(0, 10),
			changes: toChanges(r.body)
		}))
	};
}
