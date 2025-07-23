<script lang="ts">
	import Seamless from '../lib/assets/seamless.png';
	import Caviar from '../lib/assets/caviar.png';
	import DoorDash from '../lib/assets/doordash.png';
	import UberEats from '../lib/assets/ubereats.png';
	import GrubHub from '../lib/assets/grubhub.png';

	export let menuImage;
	export let takeoutMenu;
</script>

<div class="order-online-content">
	<div class="order-left">
		<h2>DELIVERY AND TAKE OUT AVAILABLE</h2>
		<a href={takeoutMenu} class="takeout-link" target="_blank">TAKE OUT MENU HERE</a>
		<p>ORDER DIRECT FROM TAKUMEN</p>
		<a
			href="https://order.toasttab.com/online/takumen"
			class="order-button"
			target="_blank"
			rel="noopener noreferrer">ORDER HERE</a
		>
		<p>ORDER BY PHONE 718.361.7973</p>
		<p>DELIVERY OPTIONS AVAILABLE ON ONLINE PLATFORMS</p>
		<div class="platform-logos">
			<div class="platform-row top-row">
				<a class="logo-item"><img src={GrubHub} alt="Grubhub" /></a>
				<a class="logo-item"><img src={Seamless} alt="Seamless" /></a>
				<a class="logo-item"><img src={UberEats} alt="Uber Eats" /></a>
			</div>

			<div class="platform-row bottom-row">
				<a class="logo-item"><img src={DoorDash} alt="Doordash" /></a>
				<a class="logo-item"><img src={Caviar} alt="Caviar" /></a>
			</div>
		</div>
	</div>
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

	.takeout-link:hover {
		color: #333;
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

	.order-button:hover {
		color: #fed314;
	}

	.platform-logos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		/* width: 100%;
		max-width: 800px; */
		margin: 2rem auto 0;
	}

	.platform-row {
		display: flex;
		width: 100%;
		gap: 0rem;
		justify-content: space-between;
	}

	.bottom-row {
		justify-content: center; /* center the 2 items */
	}

	.bottom-row .logo-item {
		flex: 1;
	}

	.logo-item {
		display: flex;
		justify-content: center;
		align-items: center;
		/* flex: 1; */
	}

	.platform-logos img {
		height: 35px;
		max-width: 100%;
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
