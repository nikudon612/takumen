<script lang="ts">
	export let data;
	const { home } = data;

	let leftIndex = 0;
	let rightIndex = 1;
	let toggle = true;

	const total = home?.slideshowImages?.length ?? 0;

	const interval = setInterval(() => {
		if (total > 1) {
			if (toggle) {
				leftIndex = (leftIndex + 2) % total;
			} else {
				rightIndex = (rightIndex + 2) % total;
			}
			toggle = !toggle;
		}
	}, 3000);

	import { onDestroy } from 'svelte';
	onDestroy(() => clearInterval(interval));
</script>

{#if home}
	<div class="slideshow">
		<div class="slideshow_half">
			<img
				src={home.slideshowImages[leftIndex]?.asset.url}
				alt={home.slideshowImages[leftIndex]?.alt || 'Takumen LIC'}
			/>
		</div>
		<div class="slideshow_half">
			<img
				src={home.slideshowImages[rightIndex]?.asset.url}
				alt={home.slideshowImages[rightIndex]?.alt || 'Takumen LIC'}
			/>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}

<style>
	.slideshow {
		display: flex;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.slideshow_half {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000; /* Fallback background color */
	}
	.slideshow_half {
		width: 50vw;
		height: 100vh;
	}

	.slideshow_half img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}
</style>
