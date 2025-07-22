<script lang="ts">
	import Seamless from '../lib/assets/seamless.png';
	import Caviar from '../lib/assets/caviar.png';
	import DoorDash from '../lib/assets/doordash.png';
	import UberEats from '../lib/assets/ubereats.png';
	import GrubHub from '../lib/assets/grubhub.png';

	export let menuImage;
</script>

<div class="order-online-content">
	<div class="order-left">
		<h2>DELIVERY AND TAKE OUT AVAILABLE</h2>
		<a href="/path-to-takeout-menu.pdf" class="takeout-link" target="_blank">TAKE OUT MENU HERE</a>
		<p>ORDER DIRECT FROM TAKUMEN</p>
		<a href="https://your-direct-order-link.com" class="order-button" target="_blank">ORDER HERE</a>
		<p>ORDER BY PHONE 718.361.7973</p>
		<p>DELIVERY OPTIONS AVAILABLE ON ONLINE PLATFORMS</p>
		<div class="platform-logos">
			<img src={GrubHub} alt="Grubhub" />
			<img src={Seamless} alt="Seamless" />
			<img src={UberEats} alt="Uber Eats" />
			<img src={Caviar} alt="Caviar" />
			<img src={DoorDash} alt="Doordash" />
		</div>
	</div>
	<!-- <div class="order-right">
		{#if menuImage}
			<img src={menuImage} alt="Takumen delivery preview" />
		{:else}
			<p>Loading image...</p>
		{/if}
	</div> -->
</div>

<style>
	.order-online-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 90vw;
		gap: 2rem;
        height: 70%;
	}

	.order-left {
		flex: 1;
		color: white;
		font-family: avenir-next-lt-pro-condensed, sans-serif;

		display: flex;
		flex-direction: column;
		align-items: center;
        height: 100%;
        justify-content: center;
        text-align: center;
	}

	.order-left h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}

	.takeout-link {
		display: block;
		font-size: 1.25rem;
		color: white;
		text-decoration: underline;
		margin-bottom: 1rem;
	}

	.order-button {
		display: inline-block;
		margin: 1rem 0;
		padding: 0.75rem 1.5rem;
		background-color: #87b28b;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-weight: bold;
	}

	.platform-logos {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.5rem;
		align-items: center;
		justify-content: space-around;
	}

	.platform-logos img {
		height: 44px;
		object-fit: contain;
	}

	.order-right {
		flex: 1;
	}

	.order-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
