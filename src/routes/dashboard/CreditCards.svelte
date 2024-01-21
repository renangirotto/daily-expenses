<script>
	import { toCurrency } from '$utils/formatters/currency';

	/**
	 * @typedef {Object} ListItem
	 * @property {number} currentBill
	 * @property {number} currentLimit
	 * @property {string} id
	 * @property {string} info
	 * @property {string} institution
	 * @property {string} name
	 * @property {string} paymentDeadLine
	 * @property {number | null} paymentLimit
	 */

	/**
	 * @type {ListItem[]}
	 */
	export let list;

	/**
	 *
	 * @param {number} currentBill
	 * @param {number | null} paymentLimit
	 * @return {boolean}
	 */
	const isBillOverLimit = (currentBill, paymentLimit) => {
		if (!paymentLimit) return false;

		if (currentBill <= paymentLimit) return false;

		return true;
	};
</script>

<ul class="list">
	{#each list as item}
		<li class="list-item">
			<a
				class="card"
				class:is-over-limit={isBillOverLimit(item.currentBill, item.paymentLimit)}
				href="/teste"
			>
				<div class="icon">
					<figure class="figure">
						<img src={`/src/lib/assets/icons/banks/${item.institution}.png`} alt="" />
					</figure>
				</div>
				<h2 class="name">{item.name}</h2>
				<span class="info">{item.info}</span>
				<div class="bill">
					<span>Fatura atual:</span>
					<strong>{toCurrency(item.currentBill * -1)}</strong>
				</div>
				<div class="aditional-data">
					<div>
						<small>Vencimento:</small>
						<span>{item.paymentDeadLine}</span>
					</div>
					<div>
						<small>Limite disponível:</small>
						<span>{toCurrency(item.currentLimit)}</span>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.aditional-data {
		grid-area: add;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 0px 20px;

		& small {
			display: block;
			font-size: 0.75rem;
			color: #7a7a8b;
		}

		& span {
			font-size: 0.875rem;
			font-weight: 500;
			color: #7a7a8b;
			line-height: 1.5;
		}
	}

	.bill {
		--_color: #4a4a55;

		grid-area: bill;
		align-self: center;
		padding-block: 16px;

		& span {
			display: block;
			font-size: 0.875rem;
			color: #7a7a8b;
		}

		& strong {
			font-size: 1.125rem;
			font-weight: 600;
			color: var(--_color);
			line-height: 1.5;
		}
	}

	.card {
		display: grid;
		grid-template-columns: 64px 1fr;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			'icon title'
			'icon info'
			'bill bill'
			'add add';
		gap: 2px 24px;
		align-items: center;
		padding-block: 24px;
		text-decoration: none;
		transition: filter 0.25s ease;

		&:hover {
			filter: opacity(0.75);
		}

		&.is-over-limit {
			& .bill {
				--_color: #ff4f5e;
			}
		}
	}

	.figure {
		width: 100%;
		max-width: 64px;
		height: 48px;
		border-radius: 8px;
		overflow: hidden;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.icon {
		width: 100%;
		max-width: 64px;
		height: 48px;
		grid-area: icon;
		position: relative;
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
			& .card {
				padding-block-start: 8px;
			}
		}

		&:not(:first-child) {
			border-block-start: 1px solid #f9f9fb;
		}

		&:last-child {
			& .card {
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

	@container (width >= 450px) {
		.aditional-data {
			padding-block-start: 8px;
			border-block-start: 1px solid #f9f9fb;
			margin-block-start: 8px;
		}

		.bill {
			padding-block: 0px;
		}

		.card {
			grid-template-columns: 64px repeat(2, 1fr);
			grid-template-rows: repeat(3, auto);
			gap: 0px 16px;
			grid-template-areas:
				'icon title bill'
				'icon info bill'
				'space add add';
		}
	}
</style>
