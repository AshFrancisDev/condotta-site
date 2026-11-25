<script>
	import '@fontsource/young-serif';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import '../app.css';

	// `children` is whatever page is currently being shown (Svelte 5 "snippet").
	let { children } = $props();

	// Mobile menu state. On wide screens the toggle is hidden and the links are always shown.
	let open = $state(false);

	// Close the menu whenever you navigate to another page.
	$effect(() => {
		page.url.pathname;
		open = false;
	});

	const links = [
		{ path: '', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/features', label: 'Features' },
		{ path: '/pricing', label: 'Pricing' }
	];

	// True when the current URL is this link's page (ignoring any trailing slash).
	const isActive = (path) => page.url.pathname.replace(/\/$/, '') === base + path;
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header>
	<nav>
		<a class="brand" href="{base}/">Condotta</a>

		<button
			class="toggle"
			class:open
			type="button"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			aria-controls="site-menu"
			onclick={() => (open = !open)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div class="menu" class:open id="site-menu">
		<ul>
			{#each links as link}
				<li>
					<!-- aria-current + the class highlight the page you're on -->
					<a
						href="{base}{link.path || '/'}"
						class:active={isActive(link.path)}
						aria-current={isActive(link.path) ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
		</div>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>&copy; {new Date().getFullYear()} Condotta. All rights reserved.</p>
</footer>

<style>
	/* Styles in a <style> block are scoped: they only affect this component. */
	header {
		position: relative; /* the mobile menu is positioned against the header */
		border-bottom: 1px solid var(--border);
		background: var(--surface);
		background-color: var(--ink-2);
		color: var(--desk);
	}
	nav {
		max-width: var(--width);
		margin: 0 auto;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Young Serif', serif;
	}
	.brand {
		font-weight: 400;
		font-size: 1.25rem;
		color: var(--desk);
		text-decoration: none;
	}
	ul {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul a {
		color: var(--desk);
		text-decoration: none;
		padding-bottom: 0.25rem;
	}
	ul a:hover,
	ul a.active {
		color: var(--marker);
	}
	ul a.active {
		border-bottom: 2px solid var(--marker);
	}

	/* Hamburger button: hidden on wide screens. */
	.toggle {
		display: none;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		position: relative;
		color: var(--text);
	}
	.toggle span {
		position: absolute;
		left: 0.5rem;
		right: 0.5rem;
		height: 2px;
		background: currentColor;
		border-radius: 1px;
		transition:
			transform 0.3s ease,
			opacity 0.2s ease,
			top 0.3s ease;
	}
	.toggle span:nth-child(1) {
		top: 0.8rem;
	}
	.toggle span:nth-child(2) {
		top: 1.2rem;
	}
	.toggle span:nth-child(3) {
		top: 1.6rem;
	}
	/* Open state: outer bars meet in the middle and rotate into an X; the middle bar fades. */
	.toggle.open span:nth-child(1) {
		top: 1.2rem;
		transform: rotate(45deg);
	}
	.toggle.open span:nth-child(2) {
		opacity: 0;
	}
	.toggle.open span:nth-child(3) {
		top: 1.2rem;
		transform: rotate(-45deg);
	}
	.toggle:focus-visible {
		outline: 2px solid var(--accent);
		border-radius: 0.25rem;
	}

	@media (max-width: 40rem) {
		.toggle {
			display: block;
		}
		/* Dropdown panel under the header. Animating grid rows 0fr -> 1fr gives a smooth slide down
		   without needing to know the menu's height. */
		.menu {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 10;
			display: grid;
			grid-template-rows: 0fr;
			background: var(--surface);
			border-bottom: 1px solid transparent;
			visibility: hidden; /* keeps closed links out of the tab order */
			transition:
				grid-template-rows 0.3s ease,
				visibility 0s linear 0.3s,
				border-color 0.3s ease;
		}
		.menu.open {
			grid-template-rows: 1fr;
			visibility: visible;
			border-bottom-color: var(--border);
			transition:
				grid-template-rows 0.3s ease,
				visibility 0s,
				border-color 0.3s ease;
		}
		.menu ul {
			flex-direction: column;
			gap: 0;
			overflow: hidden;
			min-height: 0;
		}
		.menu li a {
			display: block;
			padding: 0.9rem 1.5rem;
		}
		.menu ul a.active {
			border-bottom: none;
			border-left: 3px solid var(--accent);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.toggle span,
		.menu,
		.menu.open {
			transition: none;
		}
	}

	main {
		max-width: var(--width);
		margin: 0 auto;
		padding: 3rem 1.5rem;
		min-height: 60vh;
	}
	footer {
		border-top: 1px solid var(--border);
		text-align: center;
		color: var(--muted);
		font-size: 0.9rem;
	}
</style>
