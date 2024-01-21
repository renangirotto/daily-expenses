<script>
	import Box from '$lib/Box.svelte';

	import BankAccounts from './BankAccounts.svelte';
	import CreditCards from './CreditCards.svelte';

	const listBanks = [
		{
			automaticIncome: true,
			currentAmount: -1234567,
			id: 'teste',
			info: 'Conta do apartamento',
			institution: 'caixa',
			name: 'Caixa'
		},
		{
			automaticIncome: false,
			currentAmount: 1234567,
			id: 'teste',
			info: 'Conta do apartamento',
			institution: 'caixa',
			name: 'Caixa'
		},
		{
			automaticIncome: false,
			currentAmount: 1234567,
			id: 'teste',
			info: 'Conta do apartamento',
			institution: 'caixa',
			name: 'Caixa'
		}
	];

	const listCards = [
		{
			currentBill: 1234.56,
			currentLimit: 2345.67,
			id: 'teste',
			info: 'Cartão do apartamento',
			institution: 'caixa',
			name: 'Caixa',
			paymentDeadLine: '07/01/2024',
			paymentLimit: 100
		},
		{
			currentBill: 1234.56,
			currentLimit: 2345.67,
			id: 'teste',
			info: 'Cartão do apartamento',
			institution: 'caixa',
			name: 'Caixa',
			paymentDeadLine: '07/01/2024',
			paymentLimit: null
		},
		{
			currentBill: 1234.56,
			currentLimit: 2345.67,
			id: 'teste',
			info: 'Cartão do apartamento',
			institution: 'caixa',
			name: 'Caixa',
			paymentDeadLine: '07/01/2024',
			paymentLimit: null
		}
	];
</script>

<div class="grid">
	<div>
		<Box title="Minhas contas">
			<BankAccounts list={listBanks} />
		</Box>
	</div>
	<div>
		<Box title="Meus cartões">
			<CreditCards list={listCards} />
		</Box>
	</div>
</div>

<style>
	.grid {
		box-sizing: border-box;
		width: 100%;
		max-width: 1592px;
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(320px, 520px));
		justify-content: center;
	}
</style>
