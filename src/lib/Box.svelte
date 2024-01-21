<script>
	/** @type {string} */
	export let title;
</script>

<article class="box">
	<header class="header">{title}</header>
	<div class="content">
		<slot />
	</div>
</article>

<style>
	.box {
		container-type: inline-size;
		padding-inline: 16px;
		border: 1px solid #ededf0;
		border-radius: 8px;
		background: #ffffff;
	}

	.content {
		padding-block: 16px;
	}

	.header {
		padding-block: 16px;
		border-block-end: 1px solid #ededf0;
		font-weight: 600;
		font-size: 1.125rem;
		color: #4a4a55;
	}
</style>
