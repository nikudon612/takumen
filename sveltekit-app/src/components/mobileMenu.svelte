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

		updateIsMobile();
		window.addEventListener('resize', updateIsMobile);
	});
	onDestroy(() => {
		stopOrderSlideshow();
		window.removeEventListener('resize', updateIsMobile);
		if (typeof document !== 'undefined') document.body.style.overflow = '';
	});

	function startOrderSlideshow() {
		if (!isClient) return;
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

	// --- NEW: mobile detection + body scroll lock for non-Order tabs ---
	let isMobile = false;
	function updateIsMobile() {
		isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
	}
	$: isStaticMenu = activeMenu !== 'order';

	$: {
		if (isClient && typeof document !== 'undefined') {
			if (isMobile && activeMenu !== 'order') {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}
</script>

<section
	class="mobile-menu {isStaticMenu ? 'no-scroll' : ''}"
	style="--bg:{backgroundColors[activeMenu]}"
>
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

	<div
		class="hero {activeMenu === 'order' ? 'is-order' : 'is-menu'} {activeMenu !== 'order'
			? 'padded'
			: ''}"
	>
		{#if menuImage}
			<img src={menuImage} alt="{activeMenu} menu image" />
		{/if}
	</div>

	{#if activeMenu === 'order'}
		<div class="order-panel">
			<OrderOnline {menuImage} {takeoutMenu} />
		</div>
	{/if}
</section>

<style>
	/* container */
	.mobile-menu {
		background: var(--bg);
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100%;
		margin-top: 10vh;
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

	/* blue panel */
	.order-panel {
		background: #789faf;
		color: #fff;
		padding: 1rem 1.25rem 2.25rem;
		text-align: center;
	}

	/* tighten OrderOnline’s spacing on mobile */
	:global(.order-online-content) {
		max-width: 26rem;
		margin: 0 auto;
	}

	/* Base hero */
	.mobile-menu .hero {
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}

	/* Order tab hero */
	.mobile-menu .hero.is-order {
		height: 40vh;
		height: 40dvh;
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
		object-fit: cover;
		display: block;
	}

	/* Lunch/Dinner/Drink hero */
	.mobile-menu .hero.is-menu {
		padding-inline: 1rem; /* ✅ 1rem padding left/right on mobile */
	}
	.mobile-menu .hero.is-menu img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* keep horizontal padding utility */
	.mobile-menu .hero.padded {
		padding: 0 1rem !important;
	}

	/* DESKTOP: hide this component */
	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}
	}

	/* ---- MOBILE-ONLY NO-SCROLL BEHAVIOR ---- */
	@media (max-width: 768px) {
		.mobile-menu.no-scroll {
			min-height: calc(100dvh - 10vh);
			overflow: hidden;
		}
		.mobile-menu.no-scroll .hero.is-menu {
			flex: 1 1 auto;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.mobile-menu.no-scroll .hero.is-menu img {
			max-height: 100%;
			width: 100%;
			height: auto;
			object-fit: contain;
		}
		.mobile-menu.no-scroll .tabs {
			flex: 0 0 auto;
		}
	}

	/* Order tab: adjust .toggle-group spacing */
	.mobile-menu .order-panel :global(.toggle-group) {
		padding-top: 0.5rem; /* ✅ only affects Order tab */
	}

	/* landscape helper */
	@media (orientation: landscape) and (max-height: 500px) {
		.mobile-menu {
			height: 100vh;
			padding-top: 5vh;
		}
	}
</style>
