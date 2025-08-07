<script lang="ts">
	import OrderOnline from '../../components/orderOnline.svelte';
	let activeMenu: 'dinner' | 'lunch' | 'drink' = 'dinner';

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
	let menuImageMap: Record<'dinner' | 'lunch' | 'drink' | 'order', string> = {
		dinner: '',
		lunch: '',
		drinks: '',
		order: ''
	};

	if (menu?.images?.length) {
		for (const img of menu.images) {
			const key = img.name?.toLowerCase();
			if (key && ['dinner', 'lunch', 'drink', 'order'].includes(key)) {
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
						class="toggle {activeMenu === 'dinner' ? 'active' : ''}"
						on:click={() => (activeMenu = 'dinner')}>Dinner</span
					>
					<span
						class="toggle {activeMenu === 'lunch' ? 'active' : ''}"
						on:click={() => (activeMenu = 'lunch')}>Lunch</span
					>
					<span
						class="toggle {activeMenu === 'drink' ? 'active' : ''}"
						on:click={() => (activeMenu = 'drink')}>Drink</span
					>
					<span
						class="toggle {activeMenu === 'order' ? 'active' : ''}"
						on:click={() => (activeMenu = 'order')}>Order Online</span
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
				class="toggle {activeMenu === 'dinner' ? 'active' : ''}"
				on:click={() => (activeMenu = 'dinner')}>Dinner</span
			>
			<span
				class="toggle {activeMenu === 'lunch' ? 'active' : ''}"
				on:click={() => (activeMenu = 'lunch')}>Lunch</span
			>
			<span
				class="toggle {activeMenu === 'drink' ? 'active' : ''}"
				on:click={() => (activeMenu = 'drink')}>Drink</span
			>
			<span
				class="toggle {activeMenu === 'order' ? 'active' : ''}"
				on:click={() => (activeMenu = 'order')}>Order Online</span
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
		color: white;
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

	.menu-image-wrapper {
		overflow-y: auto;
		width: 100%;
		max-width: 90vw;
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
		background-color: transparent;
		padding: 0;
	}

	.order-layout-wrapper {
		display: flex;
		width: 100%;
		min-height: 100vh;
	}

	.order-left-column {
		width: 50%;
		background-color: #789faf;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 3rem;
		box-sizing: border-box;
	}

	.order-right {
		width: 50%;
		height: 100vh;
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
