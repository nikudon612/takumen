<script lang="ts">
	import MobileMenu from '../../components/mobileMenu.svelte';
	import OrderOnline from '../../components/orderOnline.svelte';
	import { onMount } from 'svelte';

	let activeMenu: 'lunch' | 'dinner' | 'drink' | 'order' = 'order';

	let isMobile = false;
	function checkMobile() {
		isMobile = window.innerWidth <= 768;
	}
	onMount(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	const backgroundColors = {
		dinner: '#789FAF',
		lunch: '#F26C5A',
		drink: '#87B28B',
		order: '#789FAF'
	};

	export let data;
	const { menu } = data;
	console.log('Menu data:', menu);

	// ---- Build clean arrays of URLs for each section ----
	const orderImages: string[] = (menu.orderImages ?? []).map((i) => i?.url).filter(Boolean);
	const lunchImages: string[] = (menu.lunchImages ?? []).map((i) => i?.url).filter(Boolean);
	const dinnerImages: string[] = (menu.dinnerImages ?? []).map((i) => i?.url).filter(Boolean);
	const drinkImages: string[] = (menu.drinkImages ?? []).map((i) => i?.url).filter(Boolean);

	// If you still have that legacy block that loops menu.images and overwrites values, REMOVE it.
	// (It would conflict with the arrays above.)

	// ---- Slideshow state (Order only) ----
	let orderIndex = 0;
	let orderTimer: number | null = null;
	const ORDER_INTERVAL_MS = 3500; // adjust to taste

	function startOrderSlideshow() {
		stopOrderSlideshow();
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

	// Restart/stop slideshow when tab changes
	$: if (activeMenu === 'order') startOrderSlideshow();
	$: if (activeMenu !== 'order') stopOrderSlideshow();

	// Also restart if the images themselves change length (rare but safe)
	$: if (activeMenu === 'order') {
		// keep index in range if content changes
		if (orderIndex >= orderImages.length) orderIndex = 0;
	}

	// ---- Single string for the <img src> everywhere ----
	let menuImage: string = '';

	$: {
		if (activeMenu === 'order') {
			menuImage = orderImages[orderIndex] ?? '';
		} else if (activeMenu === 'lunch') {
			menuImage = lunchImages[0] ?? '';
		} else if (activeMenu === 'dinner') {
			menuImage = dinnerImages[0] ?? '';
		} else if (activeMenu === 'drink') {
			menuImage = drinkImages[0] ?? '';
		}
	}

	// Optional: clean up on component destroy
	onMount(() => {
		return () => stopOrderSlideshow();
	});

	// If you still reference this anywhere, keep it. Otherwise remove.
	const takeoutMenu = menu?.takeoutMenu?.asset?.url || '';
</script>

<svelte:head>
	<title>Menu - Takumen</title>
</svelte:head>

{#if isMobile}
	<MobileMenu {data} />
{:else}
	<section
		class="menu-container {activeMenu === 'order' ? 'order-layout' : ''}"
		style="background-color: {backgroundColors[activeMenu]}"
	>
		{#if activeMenu === 'order'}
			<!-- Toggle group is inside the left column -->
			<div class="order-layout-wrapper">
				<div class="order-left-column">
					<nav class="toggle-group">
						<span
							class="toggle {activeMenu === 'order' ? 'active' : ''}"
							on:click={() => (activeMenu = 'order')}>Order Online</span
						>
						<span
							class="toggle {activeMenu === 'lunch' ? 'active' : ''}"
							on:click={() => (activeMenu = 'lunch')}>Lunch</span
						>
						<span
							class="toggle {activeMenu === 'dinner' ? 'active' : ''}"
							on:click={() => (activeMenu = 'dinner')}>Dinner</span
						>

						<span
							class="toggle {activeMenu === 'drink' ? 'active' : ''}"
							on:click={() => (activeMenu = 'drink')}>Drink</span
						>
					</nav>
					<OrderOnline {menuImage} {takeoutMenu} />
				</div>
				<div class="order-right">
					{#if menuImage}
						<img src={menuImage} alt="Takumen delivery preview" />
					{:else}
						<p>Loading image...</p>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Toggle group outside in default state -->
			<nav class="toggle-group">
				<span
					class="toggle {activeMenu === 'order' ? 'active' : ''}"
					on:click={() => (activeMenu = 'order')}>Order Online</span
				>
				<span
					class="toggle {activeMenu === 'lunch' ? 'active' : ''}"
					on:click={() => (activeMenu = 'lunch')}>Lunch</span
				>
				<span
					class="toggle {activeMenu === 'dinner' ? 'active' : ''}"
					on:click={() => (activeMenu = 'dinner')}>Dinner</span
				>

				<span
					class="toggle {activeMenu === 'drink' ? 'active' : ''}"
					on:click={() => (activeMenu = 'drink')}>Drink</span
				>
			</nav>

			<div class="menu-image-wrapper">
				{#if menuImage}
					<img src={menuImage} alt="{activeMenu} menu" />
				{:else}
					<p>Loading image...</p>
				{/if}
			</div>
		{/if}
	</section>
{/if}

<style>
	.menu-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		min-height: 78vh;
		height: 100%;
		padding: 0rem 3rem;
		padding-top: 2rem;
		transition: background-color 0.3s ease;
	}

	.toggle-group {
		display: flex;
		gap: 1.5rem;
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
		cursor: pointer;
		width: 100%;
		text-align: left;
	}

	.toggle {
		color: #333;
		transition: color 0.2s ease;
		font-size: 1.375rem;
		font-weight: lighter;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}
	.toggle:hover {
		color: #ffe356;
	}

	.toggle.active {
		color: #ffe356;
	}

	:root {
		--header-h: 15vh;
	} /* or exact px height if you know it */

	.order-layout-wrapper {
		display: flex;
		width: 100%;
		/* use the space that’s actually left under the header */
		height: calc(100vh - var(--header-h));
		min-height: calc(100vh - var(--header-h));
	}

	.menu-image-wrapper {
		overflow-y: auto;
		width: 100%;
		/* max-width: 90vw; */
		max-height: 75vh;
		scrollbar-width: none;
		-ms-overflow-style: none;
		background-color: #fff;
	}

	.menu-image-wrapper::-webkit-scrollbar {
		display: none;
	}

	.menu-image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* keep the grid height fixed as you already do */
	.menu-container.order-layout {
		padding: 0;
		min-height: 0;
		height: calc(100dvh - var(--header-h));
		overflow: hidden;
	}

	/* make sure grid children don't enforce their own min-content height */
	.order-left-column,
	.order-right {
		min-height: 0;
	}

	/* RIGHT: pin the image, so intrinsic ratio never affects layout */
	.order-right {
		position: relative; /* create containing block */
		height: 100%;
		overflow: hidden; /* hide any bleed during transitions */
	}

	.order-right img {
		position: absolute; /* take it out of normal flow */
		inset: 0; /* fill the column */
		width: 100%;
		height: 100%;
		object-fit: cover; /* keep your visual crop */
		display: block; /* avoid inline gap baseline quirks */
	}

	.order-layout-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		height: 100%; /* fill the container */
	}

	.order-left-column {
		background: #789faf;
		padding: 2rem 3rem;
		box-sizing: border-box;

		display: grid;
		grid-template-rows: auto 1fr; /* toggles on top, content fills remaining */
		align-items: stretch; /* let second row fill */
		overflow: hidden; /* prevent left col scroll unless needed */
	}

	/* Keep toggles fixed at top of left column */
	.toggle-group {
		position: sticky;
		top: 0;
		z-index: 2;
		width: 100%;
		margin-bottom: 1rem;
		padding: 0.5rem 0;
	}

	/* Center the content inside its cell */
	.order-online-content {
		display: flex;
		flex-direction: column;
		justify-content: center; /* vertical center */
		align-items: center; /* horizontal center */
		height: 100%;
	}

	.order-right {
		height: 100%;
	}
	.order-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.menu-container {
			padding: 0rem 1rem;
			height: 85vh;
		}
		.menu-image-wrapper {
			max-width: 100%;
			max-height: 100%;
		}
		.order-layout-wrapper {
			display: flex;
			flex-direction: column;
		}

		.order-left-column {
		}
		.order-left-column,
		.order-right {
			width: 100%;
			height: auto;
			padding: 0rem 1rem;
		}

		.toggle-group {
			flex-direction: row;
			gap: 1rem;
			margin: 1rem 0;
		}
		.toggle {
			font-size: 1.125rem;
		}
	}
</style>
