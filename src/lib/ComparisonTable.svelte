<script>
	// A responsive comparison table. By default the LAST column is highlighted (e.g. your own
	// product). Pass `highlight={1}` to highlight a different column by index, or `highlight={null}`
	// for no highlight.
	//   columns: ['Bookkeeping apps', 'Email apps', ..., 'Condotta']
	//   rows:    [{ feature: 'Invoicing', values: [true, false, ..., true] }]
	// Each `values` list lines up with `columns`. Use true / false for a tick / dash,
	// or a string such as 'Partial'.
	let { columns, rows, highlight = undefined } = $props();
	const highlighted = $derived(highlight === undefined ? columns.length - 1 : highlight);
</script>

<table>
	<thead>
		<tr>
			<th scope="col">Feature</th>
			{#each columns as column, i}
				<th scope="col" class:highlight={i === highlighted}>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				<th scope="row">{row.feature}</th>
				{#each row.values as value, i}
					<td data-label={columns[i]} class:highlight={i === highlighted}>
						{#if value === true}
							<span aria-label="Included">✓</span>
						{:else if value === false}
							<span class="no" aria-label="Not included">–</span>
						{:else}
							<span class="partial">{value}</span>
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		overflow: hidden;
	}
	th,
	td {
		padding: 0.85rem 1rem;
		border-bottom: 1px solid var(--border);
		text-align: center;
	}
	thead th {
		background: var(--bg);
	}
	th:first-child {
		text-align: left;
	}
	tbody tr:last-child > * {
		border-bottom: none;
	}
	tbody th {
		font-weight: 500;
	}
	.no,
	.partial {
		color: var(--muted);
	}
	.partial {
		font-size: 0.9rem;
	}

	/* The highlighted (last) column */
	td.highlight {
		background: color-mix(in srgb, var(--ink) 8%, var(--surface));
		font-weight: 600;
		color: var(--ink-2);
	}
	thead th.highlight {
		background: var(--ink-2);
		color: var(--desk);
	}

	/* Small screens: each feature becomes its own card, with the column name beside each value. */
	@media (max-width: 40rem) {
		thead {
			position: absolute;
			left: -9999px; /* hidden visually, still read by screen readers */
		}
		table,
		tbody,
		tr,
		th,
		td {
			display: block;
		}
		table {
			background: none;
			border: none;
		}
		tr {
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 0.75rem;
			margin-bottom: 1rem;
			overflow: hidden;
		}
		tbody th {
			background: var(--bg);
			font-weight: 600;
		}
		td {
			display: flex;
			justify-content: space-between;
			text-align: right;
		}
		td::before {
			content: attr(data-label);
			color: var(--muted);
			font-weight: 400;
			text-align: left;
		}
		td.highlight::before {
			color: var(--accent);
			font-weight: 600;
		}
	}
</style>
