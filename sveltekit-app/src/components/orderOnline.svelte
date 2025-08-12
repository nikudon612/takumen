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

<div class="mobile-order-wrapper">
	<!-- Nav Row -->
	<div class="mobile-nav">
		<a class="active">Order Online</a>
		<a>Lunch</a>
		<a>Dinner</a>
		<a>Drink</a>
	</div>

	<!-- Full-width image -->
	<!-- <img src={FamilyImage} alt="Family eating" class="mobile-hero" /> -->

	<!-- Ordering Content -->
	<div class="mobile-order-content">
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
			<div class="platform-row">
				<a class="logo-item"><img src={GrubHub} alt="Grubhub" /></a>
				<a class="logo-item"><img src={Seamless} alt="Seamless" /></a>
				<a class="logo-item"><img src={UberEats} alt="Uber Eats" /></a>
			</div>
			<div class="platform-row">
				<a class="logo-item"><img src={Caviar} alt="Caviar" /></a>
				<a class="logo-item"><img src={DoorDash} alt="Doordash" /></a>
			</div>
		</div>
	</div>
</div>

<style>
	.mobile-order-wrapper,
	.mobile-order-content,
	.mobile-nav {
		display: none !important;
	}

	.order-online-content {
		display: flex;
		flex-direction: column; /* its content stack */
		justify-content: center; /* vertical center */
		align-items: center; /* horizontal center */
		width: 100%;
		max-width: 90vw;
		gap: 1rem;
		height: 100%;
		min-height: 0;
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
		flex-wrap: wrap; 
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

	@media screen and (max-width: 768px) {
		.desktop-only {
			display: none;
		}

		.mobile-only {
			display: block;
		}
	}
	.desktop-only {
		display: none;
	}

	/* Mobile layout */
	.mobile-order-wrapper {
		display: flex;
		flex-direction: column;
		background-color: #78a1b4;
		color: white;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}

	/* Top nav bar */
	.mobile-nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		background-color: #d6a743;
		color: black;
		font-weight: 500;
	}

	.mobile-nav a {
		color: black;
		text-decoration: none;
		font-size: 1rem;
	}

	.mobile-nav a.active {
		color: #f0b400;
		font-weight: bold;
	}

	/* Hero image */
	.mobile-hero {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	/* Text content */
	.mobile-order-content {
		text-align: center;
		padding: 2rem 1rem;
		background-color: #78a1b4;
		color: white;
	}

	.mobile-order-content h2 {
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
	}

	.takeout-link {
		display: block;
		color: white;
		text-decoration: underline;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.order-button {
		display: inline-block;
		background-color: #87b28b;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-weight: bold;
		text-decoration: none;
		margin: 1rem 0;
	}

	/* Logos */
	.platform-logos {
		margin-top: 1.5rem;
	}

	.platform-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.logo-item img {
		height: 30px;
		max-width: 100px;
		object-fit: contain;
	}
</style>
