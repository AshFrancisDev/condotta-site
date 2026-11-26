<script>
	import ComparisonTable from '$lib/ComparisonTable.svelte';
	import { base } from '$app/paths';
	// Plain data. Edit this array and the page updates; no HTML copy-pasting.
	const plans = [
		{
			name: 'Free',
			price: '£0',
			period: 'per month',
			features: ['All Core Features', '5 Clients', '5 Projects per client'],
			link: '/download',
			featured: false
		},
		{
			name: 'Pro',
			price: '£7.99',
			period: 'per month',
			features: ['All Core features', 'Unlimited Clients', 'Unlimited Projects'],
			link: 'https://polar.sh/checkout/polar_c_Fa0b9jKztLIfmBkjv7sNgxLAtuvMSvFDHTz1i0OthuT',
			featured: true
		},
		{
			name: 'Lifetime',
			price: '£149',
			period: 'one time',
			features: ['All Pro features', 'Pay once - own it forever'],
			link: 'https://polar.sh/checkout/polar_c_Fa0b9jKztLIfmBkjv7sNgxLAtuvMSvFDHTz1i0OthuT',
			featured: false
		}
	];

	// One row per feature; `values` lines up with the plans above (Free, Pro, Lifetime).
	// Use true / false for tick / dash, or a string for text like "5".
	const comparison = [
		{ feature: 'Core features', values: [true, true, true] },
		{ feature: 'Clients', values: ['5', 'Unlimited', 'Unlimited'] },
		{ feature: 'Email', values: ['1 Account', 'Unlimited', 'Unlimited'] },
		{ feature: 'Projects per client', values: ['5', 'Unlimited', 'Unlimited'] },
		{ feature: 'Kanban Board', values: [false, true, true] },
		{ feature: 'Freelancer Stopwatch', values: [true, true, true] },
		{ feature: 'Freelancer Countdown', values: [false, true, true] },
		{ feature: 'Freelancer Countdown', values: [false, true, true] },
		{ feature: 'Link Timers to Invoices', values: [false, true, true] },
		{ feature: 'Customise Invoice Templates', values: [false, true, true] },
		{ feature: 'Documents from Templates', values: ['5', 'Unlimited', 'Unlimited'] },
		{ feature: 'Custom Document Templates', values: [false, true, true] },
		{ feature: 'Online calendar subscriptions (Google, Outlook, iCloud)', values: [false, true, true] },
		{ feature: 'One-off payment, own it forever', values: [false, false, true] }
	];
</script>

<svelte:head>
	<title>Condotta – Pricing</title>
	<meta name="description" content="Condotta pricing plans." />
</svelte:head>

<h1>Pricing</h1>
<p class="lead">Start free - upgrade when you're ready for more.</p>

<div class="plans">
	<!-- {#each} repeats this block once per plan -->
	{#each plans as plan}
		<section class="plan" class:featured={plan.featured}>
			<h2>{plan.name}</h2>
			<p class="price">{plan.price} <span>{plan.period}</span></p>
			<ul>
				{#each plan.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>
			<a class="button" href="{plan.link}">Choose {plan.name}</a>
		</section>
	{/each}
</div>

<h2 class="compare-title">Compare features</h2>
<ComparisonTable columns={plans.map((plan) => plan.name)} rows={comparison} highlight={null} />

<style>
	.lead {
		color: var(--muted);
		font-size: 1.2rem;
	}
	.plans {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}
	.plan {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		padding: 2rem;
		text-align: center;
	}
	.plan.featured {
		border: 2px solid var(--accent);
	}
	.plan h2 {
		margin-top: 0;
	}
	.price {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0.5rem 0 1rem;
	}
	.price span {
		font-size: 1rem;
		font-weight: 400;
		color: var(--muted);
	}
	.plan ul {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		color: var(--muted);
	}
	.plan li {
		padding: 0.25rem 0;
	}

	.compare-title {
		margin-top: 3rem;
	}
</style>
