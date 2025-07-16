<script lang="ts">
	import Seamless from '../../lib/assets/seamless.png';
	import Caviar from '../../lib/assets/caviar.png';
	import DoorDash from '../../lib/assets/doordash.png';
	import UberEats from '../../lib/assets/ubereats.png';
	import GrubHub from '../../lib/assets/grubhub.png';
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
		<div class="order-online-content">
			<div class="order-left">
				<h2>DELIVERY AND TAKE OUT AVAILABLE</h2>
				<a href="/path-to-takeout-menu.pdf" class="takeout-link" target="_blank"
					>TAKE OUT MENU HERE</a
				>
				<p>ORDER DIRECT FROM TAKUMEN</p>
				<a href="https://your-direct-order-link.com" class="order-button" target="_blank"
					>ORDER HERE</a
				>
				<p>ORDER BY PHONE 718.361.7973</p>
				<p>DELIVERY OPTIONS AVAILABLE ON ONLINE PLATFORMS</p>
				<div class="platform-logos">
					<img src={GrubHub} alt="Grubhub" />
					<img src={Seamless} alt="Seamless" />
					<img src={UberEats} alt="Uber Eats" />
					<img src={Caviar} alt="Caviar" />
					<img src={DoorDash} alt="Doordash" />
				</div>
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

	.order-online-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 90vw;
		gap: 2rem;
	}

	.order-left {
		flex: 1;
		color: white;
		font-family: avenir-next-lt-pro-condensed, sans-serif;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.order-left h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}

	.takeout-link {
		display: block;
		font-size: 1.25rem;
		color: white;
		text-decoration: underline;
		margin-bottom: 1rem;
	}

	.order-button {
		display: inline-block;
		margin: 1rem 0;
		padding: 0.75rem 1.5rem;
		background-color: #87b28b;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-weight: bold;
	}

	.platform-logos {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.5rem;
		align-items: center;
		justify-content: space-around;
	}

	.platform-logos img {
		height: 44px;
		object-fit: contain;
	}

	.order-right {
		flex: 1;
	}

	.order-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
