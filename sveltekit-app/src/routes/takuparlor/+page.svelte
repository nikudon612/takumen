<script lang="ts">
	import TakuParlor from '../../components/takuParlor.svelte';
	import Image from '../../lib/assets/lilguy.png';
	import Insta from '../../lib/assets/insta.png';
	import GoogleMaps from '../../lib/assets/maps.svg';
	import { onMount } from 'svelte';

	export let data;
	const { takuParlor } = data;
	// Clean list of URLs (your data shows several nulls)
	const slideshowImages: string[] = (takuParlor?.heroImages ?? [])
		.map((i) => i?.url)
		.filter(Boolean) as string[];

	// Slideshow state
	let i = 0;
	const INTERVAL_MS = 3500;
	let timer: number | null = null;

	function start() {
		stop();
		if (slideshowImages.length > 1) {
			timer = window.setInterval(() => {
				i = (i + 1) % slideshowImages.length;
			}, INTERVAL_MS);
		}
	}
	function stop() {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;
		}
	}

	onMount(() => {
		start();
		return stop;
	});

	// Current image URL (empty string if none)
	$: current = slideshowImages[i] ?? '';
</script>

<section class="split-menu">
	<!-- LEFT: White menu card -->
	<div class="menu-left">
		<TakuParlor />
	</div>

	<!-- RIGHT: Image -->
	<div class="menu-right">
		{#if current}
			{#key current}
				<img src={current} alt="Taku Parlor slideshow image" />
			{/key}
		{:else}
			<div class="img-fallback">No images yet</div>
		{/if}

		<!-- Overlay icons -->

		<div class="overlay-icons" aria-label="Quick links">
			<img src={Image} alt="Taku Parlor icecream logo" class="icecream-logo" />
			<div class="overlay-container">
				<p class="overlay-title">FIND US AT:</p>
				<div class="overlay-social-container">
					<div class="overlay-socials">
						<a
							href="https://www.instagram.com/takuparlor"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							class="icon-btn"
						>
							<img src={Insta} alt="Instagram icon" width="22" height="22" />
						</a>
						<p class="overlay-socials-title">INSTAGRAM</p>
					</div>
					<div class="overlay-socials">
						<a
							href="https://maps.app.goo.gl/wES851PUtokrZQJz6"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Google Maps"
							class="icon-btn"
						>
							<!-- Map pin (single-color white) -->
							<img src={GoogleMaps} alt="Google Maps icon" />
						</a>
						<p class="overlay-socials-title">GOOGLE MAPS</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.split-menu {
		display: flex;
		width: 100vw;
		height: 85dvh;
		overflow: hidden;
	}

	/* LEFT PANE: exactly half the viewport */
	.menu-left {
		flex: 0 0 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #789faf;
		overflow: hidden;
	}

	.menu-right {
		flex: 0 0 50%;
		overflow: hidden;
	}
	.menu-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 768px) {
		.split-menu {
			flex-direction: column-reverse;
			height: auto;
		}

		.menu-right {
			position: relative;
			height: 40dvh !important; /* locked to half the visible viewport */
			overflow: hidden;
			flex: none; /* prevent flex from re-sizing it */
		}

		/* Make whatever is inside (img or fallback) fill the fixed box */
		.menu-right > * {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
		}

		.menu-right img {
			object-fit: cover; /* fills without letterboxing */
			object-position: center;
			display: block;
		}

		.menu-left {
			flex: none; /* prevent flex from re-sizing it */
			width: 100%;
			height: auto;
			padding: 0.5rem;
			box-sizing: border-box;
		}

		.img-fallback {
			display: grid;
			place-items: center;
		}
	}

	/* ADD: let the overlay position against the image box on desktop too */
	.menu-right {
		position: relative;
	}

	/* ADD: overlay container + buttons */
	.overlay-icons {
		position: absolute;
		display: flex;
		flex-direction: row;
		right: 12px;
		bottom: 12px; /* desktop: bottom-right */
		display: flex;
		gap: 10px;
		z-index: 2;
		color: #fff;
		height: 15%;
	}

	.icecream-logo {
		width: 6rem !important;
		height: 6rem !important;

		margin-bottom: 8px;
	}

	.overlay-social-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.overlay-socials {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #fff; /* text color */
		font-size: 0.8rem; /* smaller text */
	}

	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		width: 24px;
		height: 24px;
		color: #fff; /* SVG uses currentColor */
		text-decoration: none;
	}

	.overlay-title {
		font-family: 'futura-pt-condensed';
		font-size: 1.5rem;
	}

	.overlay-socials-title {
		font-family: 'avenir-next-lt-pro-condensed', sans-serif;
	}

	/* 1) Make the left image fill the overlay's height */
	/* Make the row align to the tallest child (text/socials) */
	.overlay-icons {
		align-items: center; /* centers vertically */
	}

	.overlay-container {
		display: flex;
		flex-direction: column;
		justify-content: center; /* keeps text/socials centered if mascot taller */
	}

	/* Make mascot fit within the height of the right content */
	.icecream-logo {
		height: auto !important; /* no forced full height */
		max-height: 100%; /* respect parent height */
		width: auto !important;
		display: block;
	}

	.icon-btn img {
		width: 22px;
		height: 22px;
		display: block;
		object-fit: contain; /* prevents cropping of the Maps SVG */
	}

	/* 3) Tighten spacing under the "FIND US AT:" title */
	.overlay-title {
		margin: 0 0 4px 0; /* less space below the title */
		line-height: 1.1;
	}

	.overlay-socials-title {
		margin: 0; /* kill default <p> margins */
	}

	/* MOBILE-ONLY FIXES — append at end */
	@media (max-width: 768px) {
		/* Your current rule makes *every* child fill the box.
     Undo that *just* for the overlay. */
		.menu-right > .overlay-icons {
			position: absolute; /* stay layered over the image */
			inset: auto; /* cancel the generic inset:0 */
			top: 10px;
			right: 10px;
			width: auto; /* cancel width:100% from the generic rule */
			height: auto; /* cancel height:100% from the generic rule */
			z-index: 3; /* above the image */
			gap: 8px;
			height: 15%;
		}

		/* Keep it compact so nothing gets clipped inside the image bounds */
		.overlay-container {
			gap: 6px;
		}
		.overlay-title {
			margin: 0 0 2px 0;
			line-height: 1.1;
			font-size: 1.1rem; /* slightly smaller on mobile */
		}
		.overlay-socials {
			gap: 6px;
		}
		.overlay-socials-title {
			margin: 0;
			font-size: 0.9rem;
		}

		.icon-btn img {
			width: 20px;
			height: 20px;
			object-fit: contain; /* Maps pin never crops */
			display: block;
		}

		/* Mascot: scale down and lock to content height */
		.icecream-logo {
			height: 44px; /* tweak if you want it larger/smaller */
			width: auto;
			flex: 0 0 auto;
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		/* Hide mascot + "FIND US AT" on mobile */
		.icecream-logo {
			display: none !important;
		}
		.overlay-title {
			display: none !important;
		}

		/* Tighten the block now that it's just the two socials */
		.overlay-container {
			gap: 4px;
		}
		.overlay-social-container {
			gap: 6px;
		}
		.overlay-socials {
			gap: 6px;
		}

		/* Keep it snug in the top-right */
		.menu-right > .overlay-icons {
			right: 10px;
			bottom: 10px;
			top: auto;
			width: auto;
			height: auto;
		}
	}
</style>
