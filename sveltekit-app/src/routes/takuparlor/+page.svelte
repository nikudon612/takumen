<script lang="ts">
	// LEFT SIDE CONTENT (unchanged)
	import TakuParlor from '../../components/takuParlor.svelte';

	// Overlay assets (unchanged)
	import MascotImage from '../../lib/assets/lilguy.png';
	import Insta from '../../lib/assets/insta.png';
	import GoogleMaps from '../../lib/assets/maps.svg';

	import { onMount, onDestroy } from 'svelte';

	export let data;
	const { takuParlor } = data;

	// Normalize your Sanity data to plain URLs
	const images: string[] = (takuParlor?.heroImages ?? [])
		.map((i) => i?.asset?.url ?? i?.url ?? '')
		.filter(Boolean) as string[];

	// Timings
	const DISPLAY_MS = 3000; // full on-screen time (no fade happening yet)
	const FADE_MS = 320; // crossfade duration (adds on top of DISPLAY_MS)

	// Two-image crossfade state
	let topSrc = ''; // currently visible (on top)
	let bottomSrc = ''; // hidden underneath, holds the "next" image
	let showTop = true; // which layer is visible
	let running = false;

	const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

	function preload(src: string) {
		return new Promise<void>((resolve) => {
			if (!src) return resolve();
			const img = new Image();
			img.decoding = 'async';
			img.src = src;
			if (img.complete) return resolve();
			img.onload = () => resolve();
			img.onerror = () => resolve();
		});
	}

	async function startLoop() {
		const N = images.length;
		if (N === 0) return;

		// Seed first (top) and second (bottom) frames
		topSrc = images[0];
		await preload(topSrc);

		if (N === 1) return; // single image: just show it, no loop

		let idx = 1;
		bottomSrc = images[idx];
		await preload(bottomSrc);

		// Ensure we start with a painted frame
		await new Promise<void>((r) => requestAnimationFrame(() => r()));
		showTop = true;

		running = true;

		while (running) {
			// Preload the one after "idx" while current frame is fully visible
			const nextIdx = (idx + 1) % N;
			const nextSrc = images[nextIdx];
			const preloadPromise = preload(nextSrc);

			// Keep the current visible frame on-screen for full DISPLAY_MS
			await sleep(DISPLAY_MS);

			// Crossfade (image → image). This takes FADE_MS, separate from DISPLAY_MS.
			showTop = !showTop;

			// Wait for the next to finish preloading if it hasn't already
			await preloadPromise;

			// The just-hidden layer becomes our staging area: put the nextSrc there
			if (showTop) {
				// Top is visible now; bottom is hidden → prep bottom for the *following* flip
				bottomSrc = nextSrc;
			} else {
				// Bottom is visible now; top is hidden → prep top for the *following* flip
				topSrc = nextSrc;
			}

			// Advance the pointer (the one that just appeared)
			idx = nextIdx;

			// Optional: small guard to roughly align cycles; not strictly required
			await sleep(FADE_MS);
		}
	}

	onMount(() => {
		running = true;
		startLoop();
		return () => {
			running = false;
		};
	});

	onDestroy(() => {
		running = false;
	});
</script>

<section class="split-menu">
	<!-- LEFT -->
	<div class="menu-left">
		<TakuParlor />
	</div>

	<!-- RIGHT: TWO STACKED IMAGES FOR TRUE CROSSFADES -->
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

		<!-- Overlay (unchanged) -->
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
		background: #000; /* safety: avoids any white seam during crossfade */
	}

	/* Two stacked slides */
	.slide {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 320ms ease; /* FADE_MS */
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

	/* Responsive tweaks */
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

	@media (orientation: landscape) and (max-height: 500px) {
		.menu-right {
			height: 85dvh !important;
		}
	}
</style>
