<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let data;
	const { home } = data;

	const images: string[] = (home?.slideshowImages ?? [])
		.map(
			(it: any) =>
				(it?.asset?.url && String(it.asset.url)) || (typeof it?.url === 'string' ? it.url : null)
		)
		.filter(Boolean) as string[];

	let leftIndex = 0;
	let rightIndex = images.length > 1 ? 1 : 0;
	let toggle = true;

	// --- Preload/Decode helpers ---
	const cache = new Map<string, HTMLImageElement>();

	function getOrCreate(url: string) {
		let img = cache.get(url);
		if (!img) {
			img = new Image();
			img.decoding = 'async';
			img.loading = 'eager'; // we control when to fetch via setting src
			img.src = url;
			cache.set(url, img);
		}
		return img;
	}

	function preloadAndDecode(url: string, timeoutMs = 800) {
		if (!url) return Promise.resolve();
		const img = getOrCreate(url);

		// If already complete & decoded, bail fast
		if (img.complete && img.naturalWidth > 0) return Promise.resolve();

		// decode() is supported on all modern browsers; still guard with timeout
		const decodePromise =
			typeof img.decode === 'function'
				? img.decode().catch(() => {}) // error -> continue
				: new Promise<void>((res) => {
						const done = () => res();
						img.addEventListener('load', done, { once: true });
						img.addEventListener('error', done, { once: true });
					});

		const timeout = new Promise<void>((res) => setTimeout(res, timeoutMs));
		return Promise.race([decodePromise, timeout]);
	}

	// Replace setInterval with a self-timed loop so we can wait for decode
	let cancelled = false;
	async function loop() {
		if (cancelled || images.length <= 1) return;

		// Figure out which half will advance next and pre-decode that image
		const nextLeft = toggle ? (leftIndex + 2) % images.length : leftIndex;
		const nextRight = !toggle ? (rightIndex + 2) % images.length : rightIndex;

		// Preload both potential next frames (only one actually changes each tick)
		await Promise.all([preloadAndDecode(images[nextLeft]), preloadAndDecode(images[nextRight])]);

		// Swap the one that's due this tick
		if (toggle) {
			leftIndex = nextLeft;
		} else {
			rightIndex = nextRight;
		}
		toggle = !toggle;

		// Keep your 3s rhythm between *reveals*
		setTimeout(() => {
			if (!cancelled) loop();
		}, 3000);
	}

	onMount(() => {
		// Optional: preconnect to Sanity’s CDN to speed up first fetch
		try {
			const link = document.createElement('link');
			link.rel = 'preconnect';
			link.href = 'https://cdn.sanity.io';
			link.crossOrigin = '';
			document.head.appendChild(link);
		} catch {}

		// Prime the first two (visible) images synchronously
		if (images[0]) getOrCreate(images[0]);
		if (images[1]) getOrCreate(images[1]);

		// Start the decode-aware loop
		loop();
	});

	onDestroy(() => {
		cancelled = true;
	});
</script>

{#if images.length}
	<div class="slideshow">
		<div class="slideshow_half">
			<img src={images[leftIndex]} alt="Takumen LIC" decoding="async" fetchpriority="high" />
		</div>
		<div class="slideshow_half">
			<img src={images[rightIndex]} alt="Takumen LIC" decoding="async" fetchpriority="high" />
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}

<style>
	.slideshow {
		display: flex;
		width: 100vw;
		height: 85vh;
		overflow: hidden;
		position: relative;
		padding-top: 15vh;
	}
	.slideshow_half {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		width: 50vw;
		height: 100vh;
	}
	.slideshow_half img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (max-width: 768px) {
		.slideshow {
			flex-direction: column;
			height: calc(100dvh - 15dvh);
			width: 100vw;
			padding-top: 0;
		}
		.slideshow_half {
			width: 100%;
			height: 50%;
			flex-shrink: 0;
		}
		.slideshow_half img {
			object-fit: cover;
		}
	}
</style>
