<script lang="ts">
	let activeMenu: 'dinner' | 'lunch' | 'drink' = 'dinner';

	const backgroundColors = {
		dinner: '#789FAF',
		lunch: '#F26C5A',
		drink: '#87B28B'
	};

	export let data;
	const { menu } = data;
	// console.log('Menu data:', menu);

	let menuImage = '';

	// Normalize and map image names to lowercase keys
	let menuImageMap: Record<'dinner' | 'lunch' | 'drink', string> = {
		dinner: '',
		lunch: '',
		drinks: ''
	};

	if (menu?.images?.length) {
		for (const img of menu.images) {
			const key = img.name?.toLowerCase();
			if (key && ['dinner', 'lunch', 'drink'].includes(key)) {
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
	</nav>

	<div class="menu-image-wrapper">
		{#if menuImage}
			<img src={menuImage} alt="{activeMenu} menu" />
		{:else}
			<p>Loading image...</p>
		{/if}
	</div>
</section>

<style>
	.menu-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		min-height: 100vh;
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
	}

	.toggle {
		color: white;
		transition: color 0.2s ease;
		font-size: 1.375rem;
		font-weight: lighter;
	}

	.toggle.active {
		color: #ffe356;
	}

	.menu-image-wrapper {
		overflow-y: auto;
		width: 100%;
		max-height: 70vh; /* Adjust as needed */
	}
	.menu-image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
