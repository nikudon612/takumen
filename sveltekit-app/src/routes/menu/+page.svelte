<script lang="ts">
	import Dinner from '../../lib/assets/Dinner.png';
	import Lunch from '../../lib/assets/Lunch.png';
	import Drink from '../../lib/assets/Drink.png';

	let activeMenu: 'dinner' | 'lunch' | 'drinks' = 'dinner';

	const backgroundColors = {
		dinner: '#789FAF',
		lunch: '#F26C5A',
		drinks: '#87B28B'
	};

	const yellow = '#FFE356';

	let menuImage = Dinner;

	$: menuImage = activeMenu === 'lunch' ? Lunch : activeMenu === 'drinks' ? Drink : Dinner;
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
			class="toggle {activeMenu === 'drinks' ? 'active' : ''}"
			on:click={() => (activeMenu = 'drinks')}
		>
			Drinks
		</span>
	</nav>

	<div class="menu-image-wrapper">
		<img src={menuImage} alt="{activeMenu} menu" />
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
		gap: 2rem;
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
		cursor: pointer;
	}

	.toggle {
		color: white;
		transition: color 0.2s ease;
	}

	.toggle.active {
		color: #ffe356;
	}

	.menu-image-wrapper img {
		width: 100%;
		/* max-width: 700px; */
		height: auto;
		display: block;
		/* border-radius: 8px; */
		/* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); */
	}
</style>
