<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let data;
	const { home } = data;

	// Normalize to plain URL strings and filter out nulls
	const images: string[] = (home?.slideshowImages ?? [])
		.map(
			(it: any) =>
				(it?.asset?.url && String(it.asset.url)) || (typeof it?.url === 'string' ? it.url : null)
		)
		.filter(Boolean) as string[];

	let leftIndex = 0;
	let rightIndex = images.length > 1 ? 1 : 0;
	let toggle = true;
	let interval: number | undefined;

	onMount(() => {
		if (images.length > 1) {
			interval = window.setInterval(() => {
				if (images.length > 1) {
					if (toggle) {
						leftIndex = (leftIndex + 2) % images.length;
					} else {
						rightIndex = (rightIndex + 2) % images.length;
					}
					toggle = !toggle;
				}
			}, 3000);
		}
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

{#if images.length}
	<div class="slideshow">
		<div class="slideshow_half">
			<img src={images[leftIndex]} alt="Takumen LIC" />
		</div>
		<div class="slideshow_half">
			<img src={images[rightIndex]} alt="Takumen LIC" />
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
	}
	.slideshow_half {
		width: 50vw;
		height: 100vh;
	}

	.slideshow_half img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Changed from contain to cover */
		display: block;
	}

	@media (max-width: 768px) {
		.slideshow {
			display: flex;
			flex-direction: column;
			height: calc(100dvh - 15dvh); /* fill rest of viewport under the header */
			width: 100vw;
			padding-top: 0;
		}

		.slideshow_half {
			width: 100%;
			height: 50%; /* exactly half of the remaining space */
			flex-shrink: 0; /* prevent collapsing */
		}

		.slideshow_half img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}
</style>
