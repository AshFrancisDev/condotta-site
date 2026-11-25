<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Condotta – About</title>
	<meta name="description" content="About Condotta." />
</svelte:head>

<h1>About Condotta</h1>

<p class="lead">Condotta is the all-in-one Freelancer App designed to keep everything simple, organised and efficient. Just the way you like it.</p>

<h2>Why I built Condotta</h2>
<p>As a freelancer, we often have half a dozens apps open before we've finished breakfast. One for finances, another one for time management, a different app for planning the week ahead, something else for project management.</p>
<p>And god forbid those apps actually share data cleanly between one another.</p>
<p>It's too much, and there's no need for it to be this way. Why open 6 apps when you can work from one?</p>
<p>That's where Condotta comes in.</p>

<h2>The mission</h2>
<div class="split">
	<div class="text">

		<p>Condotta is the all-in-one freelancer app, combining the core needs of a freelancer all into one place. No more jumping between tools just to pilot your day.</p>
		<p>From file management to financials, task management to timers, it's all in one place; working together and working for you.</p>
		<p>All the functionality is designed to work seamlessly within your flow, allowing you to access your resources quicker, easier and in more places than ever before.</p>
		<p>With Condotta, freelancers can consolidate their workflow into one simple workspace, spending less time on admin and more time doing what you're good at.</p>
	</div>
	<img src="{base}/images/condotta-dashboard-3.png" alt="condotta dashboard view">
</div>

<style>
	.lead {
		font-size: 1.2rem;
		color: var(--muted);
	}
</style>
