<script lang="ts">
	import TakuParlor from '../../components/takuParlor.svelte';
	import MascotImage from '../../lib/assets/lilguy.png';
	import Insta from '../../lib/assets/insta.png';
	import GoogleMaps from '../../lib/assets/maps.svg';
	import { onMount, onDestroy } from 'svelte';

	export let data;
	const { takuParlor } = data;

	// Normalize to URLs
	const images: string[] = (takuParlor?.heroImages ?? [])
		.map((i) => i?.asset?.url ?? i?.url ?? '')
		.filter(Boolean) as string[];

	// ---- Config ----
	const TICK_MS = 3000; // start-to-start cadence (each frame shows every 3s)
	const FADE_MS = 320; // crossfade duration

	// ---- State ----
	let showTop = true; // which layer is currently visible
	let topSrc = '';
	let bottomSrc = '';
	let visibleIndex = 0; // index currently visible
	let running = false;
	let timer: number | null = null;

	// ---- Helpers ----
	const raf = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
	function preload(url: string) {
		return new Promise<void>((resolve) => {
			if (!url) return resolve();
			const img = new Image();
			img.decoding = 'async';
			img.src = url;
			if (img.complete && img.naturalWidth > 0) return resolve();
			img.onload = () => resolve();
			img.onerror = () => resolve();
		});
	}
	function clearTimer() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	// schedule next flip (self-timed, keeps steady cadence)
	function scheduleNextFlip() {
		clearTimer();
		timer = window.setTimeout(async () => {
			if (!running || images.length <= 1) return;

			// The image that will become visible on this flip:
			const nextIndex = (visibleIndex + 1) % images.length;

			// Crossfade (image→image). We do NOT touch the one that's about to be shown.
			showTop = !showTop;
			visibleIndex = nextIndex;

			// After the fade completes, update the now-hidden layer to the NEXT image
			// and preload it so it's ready for the following flip.
			const afterIdx = (visibleIndex + 1) % images.length;
			const afterSrc = images[afterIdx];

			// wait for fade to finish
			await new Promise<void>((res) => setTimeout(res, FADE_MS));

			// put upcoming image into the hidden buffer
			if (showTop) {
				// top is visible, bottom is hidden
				bottomSrc = afterSrc;
				await preload(bottomSrc);
			} else {
				// bottom is visible, top is hidden
				topSrc = afterSrc;
				await preload(topSrc);
			}

			// schedule next tick
			scheduleNextFlip();
		}, TICK_MS);
	}

	onMount(async () => {
		if (images.length === 0) return;

		running = true;

		// Seed first and second frames
		topSrc = images[0];
		await preload(topSrc);

		if (images.length > 1) {
			bottomSrc = images[1];
			await preload(bottomSrc);
		}

		// Paint the first frame before starting cadence
		await raf();
		showTop = true; // show first image immediately
		visibleIndex = 0;

		if (images.length > 1) {
			// Prepare the following (3rd) into the hidden layer ahead of time (optional)
			const afterIdx = (1 + 1) % images.length;
			const afterSrc = images[afterIdx];
			// Put it into the hidden buffer AFTER the first flip, handled in scheduleNextFlip
		}

		scheduleNextFlip();
	});

	onDestroy(() => {
		running = false;
		clearTimer();
	});
</script>

<section class="split-menu">
	<!-- LEFT -->
	<div class="menu-left">
		<TakuParlor />
	</div>

	<!-- RIGHT: two stacked images for crossfade -->
	<div class="menu-right">
		<img
			class="slide top {showTop ? 'visible' : ''}"
			src={topSrc}
			alt="Taku Parlor slideshow image"
			decoding="async"
			draggable="false"
		/>
		<img
			class="slide bottom {!showTop ? 'visible' : ''}"
			src={bottomSrc}
			alt="Taku Parlor slideshow image"
			decoding="async"
			draggable="false"
		/>

		<!-- Overlay -->
		<div class="overlay-icons" aria-label="Quick links">
			<img src={MascotImage} alt="Taku Parlor icecream logo" class="icecream-logo" />
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
							<p class="overlay-socials-title">INSTAGRAM</p>
						</a>
					</div>
					<div class="overlay-socials">
						<a
							href="https://maps.app.goo.gl/wES851PUtokrZQJz6"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Google Maps"
							class="icon-btn"
						>
							<img src={GoogleMaps} alt="Google Maps icon" />
							<p class="overlay-socials-title">GOOGLE MAPS</p>
						</a>
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
		position: relative;
		overflow: hidden;
		/* No background color here to avoid white/black flashes —
		   two images are always stacked so you never see through. */
	}

	/* Slides stacked and crossfading */
	.slide {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 320ms ease; /* matches FADE_MS */
		will-change: opacity;
		pointer-events: none;
	}
	.slide.visible {
		opacity: 1;
	}

	/* Overlay (unchanged) */
	.overlay-icons {
		position: absolute;
		display: flex;
		flex-direction: row;
		right: 12px;
		bottom: 12px;
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
		color: #fff;
		font-size: 0.8rem;
	}
	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		height: 24px;
		color: #fff;
		text-decoration: none;
	}
	.overlay-title {
		font-family: 'futura-pt-condensed';
		font-size: 1.5rem;
		margin: 0 0 4px 0;
		line-height: 1.1;
	}
	.overlay-socials-title {
		font-family: 'avenir-next-lt-pro-condensed', sans-serif;
		margin: 0;
	}
	a:hover {
		color: #fed314 !important;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.split-menu {
			flex-direction: column-reverse;
			height: auto;
		}
		.menu-right {
			height: 40dvh !important;
			flex: none;
		}
		.menu-left {
			width: 100%;
			height: auto;
			padding: 0.5rem;
			box-sizing: border-box;
		}

		.menu-right > .overlay-icons {
			top: 10px;
			right: 10px;
			width: auto;
			height: auto;
			z-index: 3;
			gap: 8px;
		}
		.overlay-container {
			gap: 6px;
		}
		.overlay-title {
			font-size: 1.1rem;
			margin: 0 0 2px 0;
		}
		.overlay-socials {
			gap: 6px;
		}
		.overlay-socials-title {
			font-size: 0.9rem;
		}
		.icon-btn img {
			width: 20px;
			height: 20px;
		}
		.icecream-logo {
			height: 44px;
			width: auto;
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		.icecream-logo {
			display: none !important;
		}
		.overlay-title {
			display: none !important;
		}
		.overlay-container {
			gap: 4px;
		}
		.overlay-social-container {
			gap: 6px;
		}
		.overlay-socials {
			gap: 6px;
		}
		.menu-right > .overlay-icons {
			right: 10px;
			bottom: 10px;
			top: auto;
		}
	}
</style>
