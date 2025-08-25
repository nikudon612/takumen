<script lang="ts">
	import TakuParlor from '../../components/takuParlor.svelte';
	import MascotImage from '../../lib/assets/lilguy.png';
	import Insta from '../../lib/assets/insta.png';
	import GoogleMaps from '../../lib/assets/maps.svg';
	import { onMount, onDestroy } from 'svelte';

	export let data;
	const { takuParlor } = data;

	// 1) Normalize Sanity data to plain URLs
	const urls: string[] = (takuParlor?.heroImages ?? [])
		.map((i: any) => i?.asset?.url ?? i?.url ?? '')
		.filter(Boolean);

	// 2) Timings
	const DISPLAY_MS = 3000; // time fully on screen
	const FADE_MS = 320; // crossfade duration

	// 3) State for two-image crossfade
	let aSrc = '';
	let bSrc = '';
	let showA = true; // which layer is visible
	let idx = 0; // index of the currently visible image
	let timer: number | null = null;

	// Helper: decode before use (prevents flashes)
	function decodeSrc(src: string): Promise<void> {
		return new Promise((resolve) => {
			if (!src) return resolve();
			const img = new Image();
			img.decoding = 'async';
			img.src = src;
			const done = () => resolve();
			if ('decode' in img) {
				(img as any)
					.decode()
					.then(done)
					.catch(() => {
						img.onload = done;
						img.onerror = done;
					});
			} else {
				if (img.complete) return done();
				img.onload = done;
				img.onerror = done;
			}
		});
	}

	async function start() {
		if (!urls.length) return;

		// Seed first
		aSrc = urls[0];
		await decodeSrc(aSrc);
		showA = true;
		idx = 0;

		if (urls.length === 1) return; // single image? we're done.

		// Preload the second into the hidden layer
		const nextIdx = (idx + 1) % urls.length;
		bSrc = urls[nextIdx];
		await decodeSrc(bSrc);

		// Kick off the loop using a single, self-scheduling timeout
		scheduleNext();
	}

	function scheduleNext() {
		if (timer) clearTimeout(timer);
		timer = window.setTimeout(async () => {
			// Determine the incoming image (the one after current idx)
			const incomingIdx = (idx + 1) % urls.length;
			const incomingSrc = urls[incomingIdx];

			// Ensure the incoming image is decoded before flipping
			await decodeSrc(incomingSrc);

			// Put decoded incoming on the hidden layer
			if (showA) {
				bSrc = incomingSrc;
			} else {
				aSrc = incomingSrc;
			}

			// Flip visibility (true crossfade)
			showA = !showA;

			// After the fade finishes, advance the pointer and schedule again
			window.setTimeout(() => {
				idx = incomingIdx;
				scheduleNext(); // chain next cycle
			}, FADE_MS);
		}, DISPLAY_MS);
	}

	onMount(() => {
		start();
	});
	onDestroy(() => {
		if (timer) clearTimeout(timer);
	});
</script>

<section class="split-menu">
	<div class="menu-left">
		<TakuParlor />
	</div>

	<div class="menu-right">
		<!-- Two stacked slides; only one visible at a time -->
		<img
			class="slide"
			class:visible={showA}
			src={aSrc}
			alt="Taku Parlor slideshow image"
			decoding="async"
			draggable="false"
		/>
		<img
			class="slide"
			class:visible={!showA}
			src={bSrc}
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
	/* SINGLE visible image */
	/* SINGLE visible image */
	.hero {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0; /* made visible in script */
		transition: opacity 320ms ease;
		will-change: opacity;
		pointer-events: none;
	}
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
