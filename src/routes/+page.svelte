<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { gsap } from 'gsap';
	import ComparisonTable from '$lib/ComparisonTable.svelte';

	// Condotta goes last: the final column is highlighted. Each row's `values` lines up with this list.
	const columns = [
		'Bookkeeping apps',
		'Email apps',
		'Calendar apps',
		'Project management apps',
		'Condotta'
	];
	const rows = [
		{ feature: 'Invoicing', values: [true, false, false, false, true] },
		{ feature: 'Finance tracking', values: [true, false, false, false, true] },
		{ feature: 'Client management', values: ['Partial', false, false, 'Partial', true] },
		{ feature: 'Emails', values: [false, true, false, false, true] },
		{ feature: 'Projects and tasks', values: [false, false, false, true, true] },
		{ feature: 'Calendar and scheduling', values: [false, 'Partial', true, 'Partial', true] },
		{ feature: 'Time tracking', values: ['Partial', false, false, 'Partial', true] },
		{ feature: 'Contracts', values: [false, false, false, false, true] },
		{ feature: 'Everything in one app', values: [false, false, false, false, true] }
	];

	let hero;
	let ready = $state(false);

	onMount(() => {
		// The background image stays on .hero; its position is offset by the --enter-x variable.
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			// Slide in from the right edge of the screen to the resting position.
			gsap.fromTo(
				hero,
				{ '--enter-x': () => `${window.innerWidth}px` },
				{ '--enter-x': '0px', duration: 1.2, ease: 'power3.out' }
			);

			// Fade the image in at the same time: --cover is how much of the page colour sits on top
			// of it, going from 1 (image hidden) to 0 (image fully visible).
			gsap.fromTo(hero, { '--cover': 1 }, { '--cover': 0, duration: 1.2, ease: 'power1.inOut' });
		});

		ready = true; // reveal the image only once the start position has been applied
		return () => mm.revert();
	});
</script>

<svelte:head>
	<title>Condotta – Home</title>
	<meta name="description" content="Welcome to Condotta." />
	<!-- Without JavaScript nothing would reveal the hero image, so show it straight away. -->
	<noscript>{@html '<style>.hero{background-image:var(--hero-bg)}</style>'}</noscript>
</svelte:head>

<section class="full-width hero" class:ready bind:this={hero}>
	<div>
		<h1>Say Hello to Condotta</h1>
		<p>The all-in-one solution for the modern freelancer.</p>
		<a class="button" href="{base}/pricing">Download it Free</a>
	</div>
</section>

<section class="full-width statement bg-green">
	<div>
		<p>The all-in-one freelancer app that works for you</p>
	</div>
	
</section>
<section class="full-width">
	<div class="split">
		<div class="text">
			<p>See everything, do everything.</p>
			<p>Condotta is the freelancer app that makes your life easier. Everything links, everything works together, everything helps.</p>
			<p>There's zero stress friction between managing your clients, handling your workload and getting paid. Condotta is designed from the ground up to make all your business processes quicker, easier and cleaner, so you can focus on doing what you're good at.</p>
		</div>
		<img src="/images/condotta-dashboard.png" alt="condotta freelancer app dashboard">
	</div>
	
</section>
<section class="full-width statement bg-green">
	<div>
		<p>Why use 4 apps when you can use one?</p>
	</div>
	
</section>

<section class="compare">
	<h2>How Condotta compares</h2>
	<p class="compare-intro">Most apps do one job. Condotta does the lot.</p>
	<ComparisonTable {columns} {rows} />
</section>

<section class="full-width statement bg-green">
	<div>
		<p>Everything is on your device. <br/> We don't access, hold or sell your data.</p>
	</div>
</section>

<section>
	<p>Condotta is build with peace-of-mind at its forefront, and privacy is a big part of that. You can use Condotta safe in the knowledge that the information on there is in-app and never fed back to Condotta or its developers.</p>
	<p>Condotta users should be comfortable in the knowledge that the information stored in the app or on their device is only shared when they choose to and no other time.</p>
	<p>All we know is the version of the app (so we can send updates) and the usage plan. The rest is all yours and private, as it should be.</p>
</section>

<section class="full-width statement bg-green">
	<div>
		<p>Download it for free and get started today</p>
		<a class="button" href="{base}/pricing">Download</a>
	</div>
</section>


<style>
	.hero {
		text-align: center;
		padding: 3rem 0 4rem;
		min-height: 100vh;

		--hero-image: url('/images/condotta-dashboard.png');
		/* The background is two layers: a cover in the page colour (top) over the image. The image
		   is only on .hero itself, so fading it means fading the cover out. GSAP animates --cover. */
		--cover: 0;
		--hero-bg:
			linear-gradient(
				color-mix(in srgb, var(--bg) calc(var(--cover) * 100%), transparent),
				color-mix(in srgb, var(--bg) calc(var(--cover) * 100%), transparent)
			),
			var(--hero-image);
		background-size: 100% 100%, auto;
		background-repeat: no-repeat;
		/* --enter-x is animated by GSAP (see the script above): it starts at the viewport width,
		   pushing the image off the right edge, and ends at 0 so the image rests at its position. */
		--enter-x: 0px;
		background-position: 0 0, calc(0% + var(--enter-x)) 0%; /* cover, then image: top left */
	}
	/* The image is only applied once the script has set its start position, to avoid a flash. */
	.hero.ready {
		background-image: var(--hero-bg);
	}
	/* Small screens */
	@media (max-width: 40rem) {
		.hero {
			background-position: 0 0, calc(18% + var(--enter-x)) -15%;
		}
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
	.compare {
		margin-bottom: 3rem;
	}
	.compare-intro {
		color: var(--muted);
		font-size: 1.1rem;
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


	.statement .button {
		border: 2px solid var(--desk);
	}
	

	
</style>
