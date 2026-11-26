<script>
	import { page } from '$app/state';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Condotta – {page.status === 404 ? 'Page not found' : 'Error'}</title>
</svelte:head>

<section class="error">
	<p class="code">{page.status}</p>
	{#if page.status === 404}
		<h1>Page not found</h1>
		<p class="lead">Sorry, we couldn't find the page you were looking for. It may have moved or never existed.</p>
	{:else}
		<h1>Something went wrong</h1>
		<p class="lead">{page.error?.message ?? 'An unexpected error occurred.'}</p>
	{/if}
	<a class="button" href="{base}/">Back to home</a>
</section>

<style>
	.error {
		text-align: center;
		padding: 3rem 0;
	}
	.code {
		margin: 0;
		font-family: 'Young Serif', serif;
		font-size: clamp(4rem, 15vw, 8rem);
		line-height: 1;
		color: var(--ink-2);
	}
	.lead {
		max-width: 32rem;
		margin: 0 auto 2rem;
		color: var(--muted);
		font-size: 1.2rem;
	}
</style>
