<script lang="ts">
	// import OrderOnline from '../../components/orderOnline.svelte';
	import Seamless from '../lib/assets/seamless.png';
	import Caviar from '../lib/assets/caviar.png';
	import DoorDash from '../lib/assets/doordash.png';
	import UberEats from '../lib/assets/ubereats.png';
	import GrubHub from '../lib/assets/grubhub.png';
	import OrderOnline from './orderOnline.svelte';

	// props from the route
	export let data;
	const { menu } = data;

	// state
	let activeMenu: 'order' | 'dinner' | 'lunch' | 'drink' = 'order';

	const backgroundColors = {
		dinner: '#789FAF',
		lunch: '#F26C5A',
		drink: '#87B28B',
		order: '#789FAF'
	};

	const takeoutMenu: string = menu?.takeoutMenu?.asset?.url || '';

	// map images by name
	let menuImageMap: Record<'order' | 'dinner' | 'lunch' | 'drink', string> = {
		order: '',
		dinner: '',
		lunch: '',
		drink: ''
	};

	if (menu?.images?.length) {
		for (const img of menu.images) {
			const key = (img.name || '').toLowerCase();
			if (key === 'order' || key === 'dinner' || key === 'lunch' || key === 'drink') {
				menuImageMap[key] = img.asset?.url || '';
			}
			// tolerate 'drinks' coming from CMS
			if (key === 'drinks') menuImageMap.drink = img.asset?.url || '';
		}
	}

	$: menuImage = menuImageMap[activeMenu];
	let menuImage = '';
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

	<!-- hero image -->
	<div class="hero {activeMenu !== 'order' ? 'padded' : ''}">
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
		color: #ffffff;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		font-weight: 600;
	}
	.tabs button.active {
		color: #ffe356;
	}

	.hero {
		/* background-color: white; */
	}

	/* hero image (full-bleed) */
	.hero img {
		display: block;
		width: 100%;
		height: auto;
        background-color: white;
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
		padding: 1.75rem 1.25rem 2.25rem;
		text-align: center;
	}

	/* optional: tighten OrderOnline’s spacing on mobile without touching desktop component */
	:global(.order-online-content) {
		max-width: 26rem;
		margin: 0 auto;
	}

	/* .platforms {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: center;
		justify-items: center;
		gap: 0.75rem;
		margin-top: 1rem;
	}
	.platforms img {
		max-width: 72px;
		width: 100%;
		height: auto;
		display: block;
	} */

	/* this component is only for mobile; hide above tablet if you mount both */
	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}
	}
</style>
