<script>
	// Plain data. To publish a new version, add an entry to the TOP of `changelog`
	// and update `latest` to match; the page does the rest.
	const latest = {
		version: '0.7.5',
		date: '2026-11-26',
		// Where the installer lives. A GitHub Releases asset URL works well, e.g.
		// 'https://github.com/<username>/condotta/releases/latest/download/Condotta-Setup.exe'
		url: '#',
		platform: 'Windows 10 or later',
		size: ''
	};

	const changelog = [
		{
			version: '0.7.5',
			date: '2026-11-26',
			changes: ['Initial release.']
		}
	];
</script>

<svelte:head>
	<title>Condotta – Download</title>
	<meta name="description" content="Download the latest version of Condotta." />
</svelte:head>

<h1>Download</h1>
<p class="lead">Get the latest version of Condotta - free to start.</p>

<section class="download">
	<div>
		<h2>Condotta {latest.version}</h2>
		<p class="meta">
			{latest.platform} · Released {latest.date}{latest.size ? ` · ${latest.size}` : ''}
		</p>
	</div>
	<a class="button" href={latest.url} download>Download v{latest.version}</a>
</section>

<h2 class="changelog-title">Changelog</h2>
<div class="changelog">
	{#each changelog as release}
		<article>
			<h3>
				v{release.version}
				<time datetime={release.date}>{release.date}</time>
			</h3>
			<ul>
				{#each release.changes as change}
					<li>{change}</li>
				{/each}
			</ul>
		</article>
	{/each}
</div>

<style>
	.lead {
		font-size: 1.2rem;
		color: var(--muted);
	}
	.download {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		margin-top: 2rem;
		padding: 2rem;
		background: var(--surface);
		border: 2px solid var(--accent);
		border-radius: 0.75rem;
	}
	.download h2 {
		margin: 0;
	}
	.meta {
		margin: 0.25rem 0 0;
		color: var(--muted);
	}
	.changelog-title {
		margin-top: 3rem;
	}
	article {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		margin-bottom: 1rem;
	}
	article h3 {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.75rem;
		margin: 0 0 0.5rem;
	}
	time {
		font-size: 0.9rem;
		font-weight: 400;
		color: var(--muted);
	}
	article ul {
		margin: 0;
		padding-left: 1.25rem;
	}
</style>
