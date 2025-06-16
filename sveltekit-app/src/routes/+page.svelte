<script lang="ts">
	export let data;
	const { home } = data;

	let currentIndex = 0;

	const total = home?.slideshowImages?.length ?? 0;

	// Rotate every 3 seconds
	const interval = setInterval(() => {
		if (total > 0) {
			currentIndex = (currentIndex + 1) % total;
		}
	}, 5000);

	// Cleanup
	import { onDestroy } from 'svelte';
	onDestroy(() => clearInterval(interval));
</script>

{#if home}
	<div class="slideshow">
		{#each home.slideshowImages as img, i}
			<div
				class="slideshow_image"
				style="opacity: {i === currentIndex ? 1 : 0}; z-index: {i === currentIndex ? 1 : 0};"
			>
				<img src={img.asset.url} alt={img.alt || 'Takumen LIC'} />
			</div>
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}

<style>
	.slideshow {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	.slideshow_image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: opacity 1s ease;
	}

	.slideshow_image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
