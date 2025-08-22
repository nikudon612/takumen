<script lang="ts">
	import Seamless from '../lib/assets/seamless.svg';
	import Caviar from '../lib/assets/caviar.svg';
	import DoorDash from '../lib/assets/doordash.svg';
	import UberEats from '../lib/assets/ubereats.svg';
	import GrubHub from '../lib/assets/grubhub.svg';
	import Takeout from '../lib/assets/Takeout_print_legal-1.pdf';

	export let menuImage;
	export let takeoutMenu;
</script>

<div class="order-online-content">
	<div class="order-left">
		<h2>DELIVERY AND TAKE OUT AVAILABLE</h2>
		<a href={Takeout} class="takeout-link" target="_blank">TAKE OUT MENU HERE</a>
		<p>ORDER DIRECT FROM TAKUMEN</p>
		<a
			href="https://order.toasttab.com/online/takumen"
			class="order-button"
			target="_blank"
			rel="noopener noreferrer">ORDER HERE</a
		>
		<p>ORDER BY PHONE <a href="tel:7183617973" class="number">718.361.7973</a></p>
		<p>DELIVERY OPTIONS AVAILABLE ON ONLINE PLATFORMS</p>
		<div class="platform-logos">
			<div class="platform-row">
				<a
					class="logo-item"
					href="https://www.grubhub.com/restaurant/takumen-550-50th-ave-long-island-city/745232"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={GrubHub} alt="GrubHub" class="platform-icon" />
				</a>
				<a
					class="logo-item"
					href="https://www.seamless.com/menu/takumen-550-50th-ave-long-island-city/745232"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Seamless} alt="Seamless" class="platform-icon" />
				</a>
				<a
					class="logo-item ubereats"
					href="https://www.ubereats.com/store/takumen/CoFqHZr6Q-CDVz4BP98ltQ?srsltid=AfmBOoqXTsYyXYZiUywYnayq62Lfql664NaZiS73CIHCL-kNjkUqOXNF"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={UberEats} alt="Uber Eats" class="platform-icon" />
				</a>

				<a
					class="logo-item caviar"
					href="https://www.trycaviar.com/store/takumen-long-island-city-133781/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Caviar} alt="Caviar" class="platform-icon" />
				</a>
				<a
					class="logo-item"
					href="https://www.doordash.com/store/takumen-long-island-city-133781/?srsltid=AfmBOooKyt_bdQRKhGpE0osk-j6A3YbW6A-n8kyhsO65QqUnypAAGTEN"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={DoorDash} alt="DoorDash" class="platform-icon" />
				</a>
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
				<a
					class="logo-item"
					href="https://www.grubhub.com/restaurant/takumen-550-50th-ave-long-island-city/745232"
					target="_blank"
					rel="noopener noreferrer"><img src={GrubHub} alt="Grubhub" /></a
				>
				<a
					class="logo-item"
					href="https://www.seamless.com/menu/takumen-550-50th-ave-long-island-city/745232"
					target="_blank"
					rel="noopener noreferrer"><img src={Seamless} alt="Seamless" /></a
				>
				<a
					class="logo-item"
					href="https://www.ubereats.com/store/takumen/CoFqHZr6Q-CDVz4BP98ltQ?srsltid=AfmBOoqXTsYyXYZiUywYnayq62Lfql664NaZiS73CIHCL-kNjkUqOXNF"
					target="_blank"
					rel="noopener noreferrer"><img src={UberEats} class="ubereats" alt="Uber Eats" /></a
				>
				<a
					class="logo-item caviar"
					href="https://www.trycaviar.com/store/takumen-long-island-city-133781/"
					target="_blank"
					rel="noopener noreferrer"><img src={Caviar} alt="Caviar" /></a
				>
				<a
					class="logo-item"
					href="https://www.doordash.com/store/takumen-long-island-city-133781/?srsltid=AfmBOooKyt_bdQRKhGpE0osk-j6A3YbW6A-n8kyhsO65QqUnypAAGTEN"
					target="_blank"
					rel="noopener noreferrer"><img src={DoorDash} alt="Doordash" /></a
				>
			</div>
		</div>
	</div>
</div>

<style>

	.number:hover {
		color: #333 !important;
	}
	a {
		text-decoration: underline;
		color: inherit;
	}
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
		/* max-width: 90vw; */
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
		gap: 1rem;
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
		/* margin: 2rem auto 0; */
	}

	.platform-row {
		display: flex;
		width: 100%;
		gap: 0rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.logo-item {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.platform-logos img {
		height: 35px;
		max-width: 100%;
		object-fit: contain;
	}

	/* make the svg follow CSS color */
	.platform-icon {
		color: white; /* default color */
		transition: color 0.3s ease;
	}

	/* OVERRIDE per-path fills inside the SVG */
	.platform-icon * {
		fill: currentColor !important; /* key line */
		stroke: currentColor !important; /* in case any shapes use stroke */
		transition:
			fill 0.3s ease,
			stroke 0.3s ease;
	}

	/* on hover, just change color */
	.logo-item:hover .platform-icon {
		color: #ffe356; /* hover color */
	}

	@media screen and (max-width: 768px) {
		.ubereats {
			width: 124px !important;
		}
		.platform-icon {
			height: 20px !important;
		} /* Fixed-height image stage on mobile */

		.platform-logos {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 1rem !important;
		}

		.platform-row {
			display: contents; /* ignore the row wrapper */
			margin-bottom: 0rem !important;
		}

		.logo-item {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		/* Equal height for all logos */
		.platform-logos .logo-item svg,
		.platform-logos .logo-item img {
			height: 24px; /* pick your target */
			width: auto;
			display: block;
		}
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

	.logo-item:hover {
		cursor: pointer;
	}

	.platform-logos .logo-item {
		display: inline-flex;
		align-items: center;
	}

	/* make the actual art consistent */
	.platform-logos .logo-item svg,
	.platform-logos .logo-item img {
		height: 24px;
		width: auto; /* keep aspect ratio */
		max-width: 100%;
		display: block;
		overflow: visible; /* ignore any internal padding */
	}

	/* kill any baseline effects just in case */
	.logo-item {
		line-height: 0;
	}

	/* tiny optical nudge for UE */
	.logo-item.ubereats .platform-icon {
		transform: translateY(-2px);
	}

	/* Default: white */
	.platform-logos .platform-icon {
		color: #ffffff;
		transition: color 0.2s ease;
	}

	/* Hover: Takumen yellow */
	.platform-logos .logo-item:hover .platform-icon {
		color: #ffe356;
	}

	/* Desktop: keep logos on ONE line, but ALWAYS fit inside the left panel */
	@media screen and (min-width: 769px) {
		.platform-logos {
			/* center the whole strip and keep it inside the column */
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			width: 100%;
			max-width: 100%;
			padding-inline: 1.25rem; /* small gutters so nothing kisses the edge */
			box-sizing: border-box;
			overflow: hidden; /* hard stop: nothing can spill under the image */
		}

		.platform-row {
			/* one row, but sized by the column—not the viewport */
			display: flex;
			flex-wrap: nowrap; /* one line */
			justify-content: center;
			align-items: center;
			gap: clamp(12px, 1.6vw, 24px); /* spacing scales with panel width */
			width: 100%; /* fit the column width, not auto */
			max-width: 100%;
			min-width: 0; /* allow shrinking instead of overflow */
		}

		/* All logos scale down if space is tight so the row never overflows */
		.platform-logos .logo-item img,
		.platform-logos .logo-item svg,
		.platform-logos .platform-icon {
			height: clamp(20px, 2.2vw, 28px); /* responsive height tied to column size */
			width: auto;
			max-width: 100%;
			object-fit: contain;
			display: block;
			max-width: 85px; /* prevent wide logos (Uber Eats) from dominating */
			min-width: 50px; /* allow shrinking instead of overflow */
		}

		/* Uber Eats is wide—cap it so the strip fits */
		.platform-logos a[href*='ubereats'] img,
		.platform-logos a[href*='ubereats'] .platform-icon {
			max-width: clamp(80px, 7.5vw, 110px);
			transform: translateY(-2px); /* keep your optical baseline nudge */
		}
		/* Hover effect: turn delivery logos yellow */
	}
</style>
