<script lang="ts">
	import OrderOnline from './orderOnline.svelte';
	import { onMount, onDestroy } from 'svelte';

	// props from parent
	export let activeMenu: 'order' | 'lunch' | 'dinner' | 'drink' = 'order';
	export let takeoutMenu: string = '';

	export let orderImages: string[] = [];
	export let lunchImages: string[] = [];
	export let dinnerImages: string[] = [];
	export let drinkImages: string[] = [];

	const backgroundColors = {
		dinner: '#789FAF',
		lunch: '#F26C5A',
		drink: '#87B28B',
		order: '#789FAF'
	};

	// slideshow for Order
	let orderIndex = 0;
	let orderTimer: number | null = null;
	const ORDER_INTERVAL_MS = 3500;

	let isClient = false;
	onMount(() => {
		isClient = true;
		if (activeMenu === 'order') startOrderSlideshow();
	});
	onDestroy(() => stopOrderSlideshow());

	function startOrderSlideshow() {
		if (!isClient) return; // SSR guard
		if (orderTimer !== null) return;
		if (orderImages.length > 1) {
			orderTimer = window.setInterval(() => {
				orderIndex = (orderIndex + 1) % orderImages.length;
			}, ORDER_INTERVAL_MS);
		}
	}

	function stopOrderSlideshow() {
		if (orderTimer !== null) {
			clearInterval(orderTimer);
			orderTimer = null;
		}
	}

	$: if (isClient && activeMenu === 'order') startOrderSlideshow();
	$: if (isClient && activeMenu !== 'order') stopOrderSlideshow();
	$: if (activeMenu === 'order' && orderIndex >= orderImages.length) orderIndex = 0;

	// single src for hero
	let menuImage = '';
	$: menuImage =
		activeMenu === 'order'
			? (orderImages[orderIndex] ?? '')
			: activeMenu === 'lunch'
				? (lunchImages[0] ?? '')
				: activeMenu === 'dinner'
					? (dinnerImages[0] ?? '')
					: activeMenu === 'drink'
						? (drinkImages[0] ?? '')
						: '';
</script>

<section class="mobile-menu" style="--bg:{backgroundColors[activeMenu]}">
	<!-- tabs -->
	<nav class="tabs">
		<button class:active={activeMenu === 'order'} on:click={() => (activeMenu = 'order')}
			>Order Online</button
		>
		<button class:active={activeMenu === 'lunch'} on:click={() => (activeMenu = 'lunch')}
			>Lunch</button
		>
		<button class:active={activeMenu === 'dinner'} on:click={() => (activeMenu = 'dinner')}
			>Dinner</button
		>
		<button class:active={activeMenu === 'drink'} on:click={() => (activeMenu = 'drink')}
			>Drink</button
		>
	</nav>

	<!-- was: <div class="hero {activeMenu !== 'order' ? 'padded' : ''}"> -->
	<div
		class="hero {activeMenu === 'order' ? 'is-order' : 'is-menu'} {activeMenu !== 'order'
			? 'padded'
			: ''}"
	>
		{#if menuImage}
			<img src={menuImage} alt="{activeMenu} menu image" />
		{/if}
	</div>

	<!-- blue order panel (only for Order tab) -->
	{#if activeMenu === 'order'}
		<div class="order-panel">
			<OrderOnline {menuImage} {takeoutMenu} />
		</div>
	{/if}
</section>

<style>
	.mobile-menu {
		background: var(--bg);
		display: block;
		width: 100%;
		min-height: 100%;
		/* allow scrolling naturally */
	}

	/* tabs */
	.tabs {
		display: flex;
		gap: 1rem;
		padding: 2rem 1rem;
		align-items: center;
	}
	.tabs button {
		background: transparent;
		border: 0;
		padding: 0;
		font-size: 1.0625rem;
		line-height: 1;
		color: #333;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		font-weight: 600;
	}
	.tabs button.active {
		color: #ffe356;
	}

	.tabs button:hover {
		cursor: pointer;
	}

	/* add padding for non-order menus */
	.hero.padded {
		padding-left: 1rem;
		padding-right: 1rem;
		/* background-color: white; */
	}

	/* blue panel */
	.order-panel {
		background: #789faf; /* keep same blue */
		color: #fff;
		padding: 1rem 1.25rem 2.25rem;
		text-align: center;
	}

	/* optional: tighten OrderOnline’s spacing on mobile without touching desktop component */
	:global(.order-online-content) {
		max-width: 26rem;
		margin: 0 auto;
	}

	/* this component is only for mobile; hide above tablet if you mount both */
	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}

		/* Fixed-height image stage on mobile */
		.hero {
			height: 42.5dvh; /* uniform height for all tabs */
			display: flex; /* center the image nicely */
			align-items: center;
			justify-content: center;
			background: #fff;
			/* keep your optional horizontal padding for non-order tabs */
		}

		/* Make the image scale to fit the 42.5vh stage without cropping */
		.hero img {
			width: 100%;
			height: 100%;
			object-fit: contain; /* shows the whole PNG/JPG, no cropping */
			display: block;
		}
	}

	/* Base */
	.mobile-menu .hero {
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}

	/* Order tab: lock to 42.5 view-height units */
	.mobile-menu .hero.is-order {
		height: 40vh; /* fallback */
		height: 40dvh; /* dynamic VH for mobile browsers */
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	@supports (height: 1svh) {
		.mobile-menu .hero.is-order {
			height: 42.5svh;
		}
	}

	.mobile-menu .hero.is-order img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* or 'cover' if you want crop */
		display: block;
	}

	/* Lunch/Dinner/Drink: natural height, full width */

	.mobile-menu .hero.is-menu {
		padding-inline: 1rem;
	} /* <- the missing padding */

	.mobile-menu .hero.is-menu img {
		width: 100%;
		height: auto; /* let the image define the height */
		display: block;
	}

	/* keep your horizontal padding for non-order tabs */
	.mobile-menu .hero.padded {
		padding: 0 1rem !important;
	}

	/* keep this component mobile-only */
	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}
	}
</style>
