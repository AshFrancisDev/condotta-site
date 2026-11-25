<script>
	import { base } from '$app/paths';
	// Plain data. Edit this array and the page updates; no HTML copy-pasting.
	const plans = [
		{
			name: 'Free',
			price: '£0',
			period: 'per month',
			features: ['All Core Features', '5 Clients', '5 Projects per client'],
			featured: false
		},
		{
			name: 'Pro',
			price: '£7.99',
			period: 'per month',
			features: ['All Core features', 'Unlimited Clients', 'Unlimited Projects'],
			featured: true
		},
		{
			name: 'Lifetime',
			price: '£149',
			period: 'one time',
			features: ['All Pro features', 'Pay once - own it forever'],
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
			<a class="button" href="{base}/about">Choose {plan.name}</a>
		</section>
	{/each}
</div>

<h2 class="compare-title">Compare features</h2>
<table class="compare">
	<thead>
		<tr>
			<th scope="col">Feature</th>
			{#each plans as plan}
				<th scope="col">{plan.name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each comparison as row}
			<tr>
				<th scope="row">{row.feature}</th>
				{#each row.values as value, i}
					<td data-label={plans[i].name}>
						{#if value === true}
							<span aria-label="Included">✓</span>
						{:else if value === false}
							<span class="no" aria-label="Not included">–</span>
						{:else}
							{value}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

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
	.compare {
		width: 100%;
		border-collapse: collapse;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		overflow: hidden;
	}
	.compare th,
	.compare td {
		padding: 0.85rem 1rem;
		border-bottom: 1px solid var(--border);
		text-align: center;
	}
	.compare thead th {
		background: var(--bg);
	}
	.compare th:first-child {
		text-align: left;
	}
	.compare tbody tr:last-child > * {
		border-bottom: none;
	}
	.compare tbody th {
		font-weight: 500;
	}
	.no {
		color: var(--muted);
	}

	/* Small screens: each feature becomes its own card, with the plan name beside each value. */
	@media (max-width: 40rem) {
		.compare thead {
			position: absolute;
			left: -9999px; /* hidden visually, still read by screen readers */
		}
		.compare,
		.compare tbody,
		.compare tr,
		.compare th,
		.compare td {
			display: block;
		}
		.compare {
			background: none;
			border: none;
		}
		.compare tr {
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 0.75rem;
			margin-bottom: 1rem;
			overflow: hidden;
		}
		.compare tbody th {
			background: var(--bg);
			font-weight: 600;
		}
		.compare td {
			display: flex;
			justify-content: space-between;
			text-align: right;
		}
		.compare td::before {
			content: attr(data-label);
			color: var(--muted);
		}
	}
</style>
