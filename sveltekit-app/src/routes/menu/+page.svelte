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
	// console.log('Menu data:', menu);

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
	<title>Takumen - Menu</title>
</svelte:head>

<section class="menu-container" style="background-color: {backgroundColors[activeMenu]}">
	<nav class="toggle-group">
		<span
			class="toggle {activeMenu === 'dinner' ? 'active' : ''}"
			on:click={() => (activeMenu = 'dinner')}
		>
			Dinner
		</span>
		<span
			class="toggle {activeMenu === 'lunch' ? 'active' : ''}"
			on:click={() => (activeMenu = 'lunch')}
		>
			Lunch
		</span>
		<span
			class="toggle {activeMenu === 'drink' ? 'active' : ''}"
			on:click={() => (activeMenu = 'drink')}
		>
			Drink
		</span>
		<span
			class="toggle {activeMenu === 'order' ? 'active' : ''}"
			on:click={() => (activeMenu = 'order')}
			style="flex-grow: 1;">Order Online</span
		>
	</nav>

	{#if activeMenu === 'order'}
		<OrderOnline {menuImage} />
	{:else}
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
		min-height: 100vh;
		height: 100%;
		padding: 2rem 1rem;
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
		max-width: 90vw;
	}

	.toggle {
		color: white;
		transition: color 0.2s ease;
		font-size: 1.375rem;
		font-weight: lighter;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}

	.toggle.active {
		color: #ffe356;
	}

	.menu-image-wrapper {
		overflow-y: auto;
		width: 100%;
		max-width: 90vw;

		/* padding-left: 2rem;
		padding-right: 2rem; */
		max-height: 70vh; /* Adjust as needed */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer 10+ */
	}

	.menu-image-wrapper::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}
	.menu-image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
		/* margin: 0 2rem 0 2rem; */
	}

	
</style>
