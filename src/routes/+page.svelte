<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Condotta – Home</title>
	<meta name="description" content="Welcome to Condotta." />
</svelte:head>

<section class="hero">
	<h1>Say Hello to Condotta</h1>
	<p>The all-in-one solution for the modern freelancer.</p>
	<a class="button" href="{base}/pricing">Download it Free</a>
</section>

<section class="features">
	<article>
		<h2>Feature one</h2>
		<p>Describe the first benefit here.</p>
	</article>
	<article>
		<h2>Feature two</h2>
		<p>Describe the second benefit here.</p>
	</article>
	<article>
		<h2>Feature three</h2>
		<p>Describe the third benefit here.</p>
	</article>
</section>

<style>
	.hero {
		text-align: center;
		padding: 3rem 0 4rem;
	}
	.hero h1 {
		font-size: clamp(2rem, 5vw, 3.25rem);
		margin: 0 0 1rem;
	}
	.hero p {
		color: var(--muted);
		font-size: 1.2rem;
		max-width: 36rem;
		margin: 0 auto 2rem;
	}
	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 1.5rem;
	}
	article {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		padding: 1.5rem;
	}
	article h2 {
		margin-top: 0;
		font-size: 1.2rem;
	}
</style>
