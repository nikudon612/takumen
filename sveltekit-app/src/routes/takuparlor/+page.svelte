<script lang="ts">
	import TakuParlor from '../../components/takuParlor.svelte';
	import Icecream from '../../lib/assets/icecream.jpg';
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
			padding: 1rem;
			box-sizing: border-box;
		}

		.img-fallback {
			display: grid;
			place-items: center;
		}
	}
</style>
