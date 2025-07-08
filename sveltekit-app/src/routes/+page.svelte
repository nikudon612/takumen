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
	<!-- <nav class="blend-nav">
		<a href="/" class="hazy-text">Home</a>
		<a href="/menu" class="hazy-text">Menu</a>
		<a href="/about" class="hazy-text">About</a>
	</nav> -->
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
	.blend-nav {
		position: absolute;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 2rem;
		padding: 1rem;
		z-index: 10;
		mix-blend-mode: difference;
		overflow-x: hidden;
	}

	.blend-nav a {
		font-weight: 600;
		text-transform: uppercase;
		text-decoration: none;
		mix-blend-mode: difference;
		color: white;
		font-size: 1.25rem;
	}

	.blend-nav a:hover {
		letter-spacing: 0.05em;
		transition: letter-spacing 0.2s ease;
	}

	/* .hazy-text {
		font-weight: 800;
		font-size: 2rem;
		text-transform: uppercase;
		text-decoration: none;
		color: transparent;

		background: inherit; 
		background-clip: text;
		-webkit-background-clip: text;
		filter: brightness(120%) blur(2px); 
		mix-blend-mode: difference;
	} */

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
