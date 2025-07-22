<script lang="ts">
	export let data;
	import Icecream from '../../lib/assets/icecream.jpg';
	import MascotTop from '../../lib/assets/mascot1.png';
	import MascotBottom from '../../lib/assets/mascot2.png';
	// const { image } = data; // image.asset.url should point to the soft-serve CMS image
</script>

<section class="split-menu">
	<div class="menu-left">
		<img src={MascotTop} alt="Mascot" class="mascot-top" />

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
			<h2>TEST SECTION</h2>
			<p>line 1<br />line 2<br />line 3<br />line 4<br />line 5</p>
			<h2>TEST SECTION</h2>
			<p>line 1<br />line 2<br />line 3<br />line 4<br />line 5</p>
			<h2>TEST SECTION</h2>
			<p>line 1<br />line 2<br />line 3<br />line 4<br />line 5</p>
			<h2>TEST SECTION</h2>
			<p>line 1<br />line 2<br />line 3<br />line 4<br />line 5</p>
		</div>

		<img src={MascotBottom} alt="Mascot cheering" class="mascot-bottom" />
	</div>

	<div class="menu-right">
		<img src={Icecream} alt="Taku Parlor Soft Serve" />
	</div>
</section>

<style>
	.split-menu {
		display: flex;
		width: 100vw;
		height: 100vh; /* full viewport height */
	}

	.menu-left {
		position: relative;
		flex: 1;
		background-color: #789faf;
		color: white;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.menu-scroll-wrapper {
		flex: 1;
		overflow-y: auto;
		padding: 2rem 3rem;

		/* Hide scrollbar for WebKit (Chrome, Safari) */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}

	.menu-scroll-wrapper::-webkit-scrollbar {
		display: none; /* WebKit */
	}

	.menu-items {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.menu-items h2 {
		font-size: 1.5rem;
		margin: 1.5rem 0 0.5rem;
		font-weight: bold;
	}

	.menu-items p {
		font-size: 1.125rem;
		line-height: 1.5;
		font-family: Futura, sans-serif;
	}

	.mascot-top,
	.mascot-bottom {
		position: absolute;
		z-index: 10;
		pointer-events: none;
	}

	.mascot-top {
		top: 2rem;
		right: 6rem;
		width: 120px;
	}

	.mascot-bottom {
		bottom: 16rem;
		left: 5rem;
		width: 150px;
	}

	.menu-right {
		flex: 1;
		height: 100vh;
		overflow: hidden;
	}

	.menu-right img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
