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
	const takeoutMenu = menu?.takeoutMenu?.asset?.url || '';

	let menuImage = '';

	// Normalize and map image names to lowercase keys
	let menuImageMap: Record<'order' | 'lunch' | 'dinner' | 'drinks', string> = {
		order: '',
		dinner: '',
		lunch: '',
		drinks: ''
	};

	if (menu?.images?.length) {
		for (const img of menu.images) {
			const key = img.name?.toLowerCase();
			if (key && ['lunch', 'dinner', 'drink', 'order'].includes(key)) {
				menuImageMap[key] = img.asset?.url || '';
			}
		}
	}

	// Reactive assignment of current image
	$: menuImage = menuImageMap[activeMenu];
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

	.menu-container.order-layout {
		padding: 0;
		min-height: 0; /* kill the 78vh from .menu-container */
		height: calc(100dvh - var(--header-h));
		overflow: hidden; /* page itself won’t scroll */
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
