<script>
	import image from '../../lib/assets/mascot2.png';
</script>

<section class="store-section">
	<div class="content">
		<h1 class="title">Coming Soon!</h1>
		<img src={image} alt="Store Coming Soon" class="store-image" />
	</div>
</section>

<style>
	.store-section {
		background-color: #87b28b;
		height: 85dvh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 15vh;
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

	.store-image {
		max-width: 300px;
		height: auto;
	}

	@media (orientation: landscape) and (max-height: 500px) {
		.store-image {
			max-width: 200px;
		}
	}
</style>
