<script>
	import { ChevronsUp as IconChevronsUp } from 'lucide-svelte';

	import { toCurrency } from '$utils/formatters/currency';

	/**
	 * @typedef {Object} ListItem
	 * @property {boolean} automaticIncome
	 * @property {number} currentAmount
	 * @property {string} id
	 * @property {string} info
	 * @property {string} institution
	 * @property {string} name
	 */

	/**
	 * @type {ListItem[]}
	 */
	export let list;
</script>

<ul class="list">
	{#each list as item}
		<li class="list-item">
			<a class="bank" class:negative={item.currentAmount < 0} href="/teste">
				<div class="icon">
					{#if item.automaticIncome}
						<div class="icon-svg" aria-hidden="true">
							<IconChevronsUp size={18} />
						</div>
					{/if}
					<figure class="figure">
						<img src={`/src/lib/assets/icons/banks/${item.institution}.png`} alt="" />
					</figure>
				</div>
				<h2 class="name">{item.name}</h2>
				<span class="info">{item.info}</span>
				<span class="amount">{toCurrency(item.currentAmount)}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.amount {
		grid-area: amount;
		align-self: center;
		font-size: 1.125rem;
		font-weight: 500;
		color: #0090ed;
	}

	.bank {
		display: grid;
		grid-template-columns: 48px 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas:
			'icon title'
			'icon info'
			'icon amount';
		gap: 2px 24px;
		align-items: center;
		padding-block: 24px;
		text-decoration: none;
		transition: filter 0.25s ease;

		&:hover {
			filter: opacity(0.75);
		}

		&.negative {
			& .amount {
				color: #ff4f5e;
			}
		}
	}

	.figure {
		width: 100%;
		max-width: 48px;
		height: 48px;
		border-radius: 50%;
		overflow: hidden;

		& img {
			width: 100%;
		}
	}

	.icon {
		width: 100%;
		max-width: 48px;
		height: 48px;
		grid-area: icon;
		position: relative;
	}

	.icon-svg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		position: absolute;
		bottom: -4px;
		right: -4px;
		color: #fff;
		background: #2ac3a2;
	}

	.info {
		grid-area: info;
		font-size: 0.875rem;
		color: #7a7a8b;
	}

	.list {
		list-style: none;
		padding: 0;
	}

	.list-item {
		&:first-child {
			& .bank {
				padding-block-start: 8px;
			}
		}

		&:not(:first-child) {
			border-block-start: 1px solid #f9f9fb;
		}

		&:last-child {
			& .bank {
				padding-block-end: 8px;
			}
		}
	}

	.name {
		grid-area: title;
		font-size: 1rem;
		font-weight: 500;
		color: #32313c;
	}

	@container (width >= 400px) {
		.amount {
			justify-self: end;
		}

		.bank {
			grid-template-columns: 48px 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 0px 16px;
			grid-template-areas:
				'icon title amount'
				'icon info amount';
		}
	}
</style>
