<script lang="ts">
	export let data;
	import Icecream from '../../lib/assets/icecream.jpg';
	import Menu from '../../lib/assets/tpmenu.jpg';
	// const { image } = data; // image.asset.url should point to the soft-serve CMS image
</script>

<section class="split-menu">
	<div class="menu-left">
		<img src={Menu} alt="Taku Parlor dessert menu" />

		<!-- <img src={MascotTop} alt="Mascot" class="mascot-top" />

		<div class="menu-scroll-wrapper">
			<div class="menu-items">
				<h2>SOFTSERVE</h2>
				<p>matcha<br />vanilla<br />swirl</p>

				<h2>CREAM ANMITSU</h2>
				<p>
					<strong>hojicha</strong><br />hojicha kanten, original jello, shiratama mochi, redbean
					paste, matcha soft serve, kinako, homemade maple sauce
				</p>
				<p>
					<strong>mango</strong><br />mango kanten, original jello, shiratama mochi, redbean paste,
					mango pulp, vanilla soft serve, homemade mango sauce
				</p>

				<h2>ICE CREAM FLOAT</h2>
				<p>melon soda & vanilla<br />matcha & matcha<br />coffee & vanilla</p>

				<h2>MOCHIDOKI</h2>
				<p>mochi ice cream<br />assorted flavors</p>
			</div>
		</div>

		<img src={MascotBottom} alt="Mascot cheering" class="mascot-bottom" /> -->
	</div>

	<div class="menu-right">
		<img src={Icecream} alt="Taku Parlor Soft Serve" />
	</div>
</section>

<style>
	.split-menu {
		display: flex;
		width: 100vw;
		height: 85vh; /* full viewport height */
		overflow: hidden;
	}

	.menu-left {
		position: relative;
		flex: 0 0 auto; /* don’t grow or shrink */
		aspect-ratio: 1 / 1;
		background-color: #789faf;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.menu-left img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.menu-right {
		flex: 1;
		height: 85vh;
		overflow: hidden;
	}

	.menu-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.split-menu {
			flex-direction: column-reverse;
			height: 85vh; /* two halves = full screen */
			overflow: hidden; /* no scrollbars */
		}

		.menu-left,
		.menu-right {
			width: 100%;
			flex: none; /* don’t flex-grow or -shrink */
			height: 50%; /* each takes exactly half the viewport */
			overflow: hidden; /* clip anything outside */
		}

		/* your existing object-fit rules still apply: */
		.menu-left img {
			width: 100%;
			height: 100%;
			object-fit: contain; /* or cover, as you prefer */
		}
		.menu-right img {
			width: 100%;
			height: 100%;
			object-fit: cover; /* or cover, as you prefer */
		}
	}
</style>
