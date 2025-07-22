<script>
	import image from '../../lib/assets/mascot2.png';
</script>

<section class="store-section">
	<div class="content">
		<h1 class="title">Coming Soon!</h1>
		<img src={image} alt="Store Coming Soon" />
	</div>
</section>

<style>
	.store-section {
		padding: 3rem;
		background-color: #87b28b;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: white;
		gap: 1rem;
	}

	.title {
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		color: white;
		text-align: center;
		font-size: 2.5rem;
		margin: 0;
	}
</style>
