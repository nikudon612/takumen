<script lang="ts">
	export let data;
	import TakuParlor from '../../components/takuParlor.svelte';
	import Icecream from '../../lib/assets/icecream.jpg';
</script>

<section class="split-menu">
	<!-- LEFT: White menu card -->
	<div class="menu-left">
		<TakuParlor />
	</div>

	<!-- RIGHT: Image -->
	<div class="menu-right">
		<img src={Icecream} alt="Taku Parlor Soft Serve" />
	</div>
</section>

<style>
	.split-menu {
		display: flex;
		width: 100vw;
		height: 85dvh;
		overflow: hidden;
	}

	/* LEFT PANE: exactly half the viewport */
	.menu-left {
		flex: 0 0 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #789faf;
		overflow: hidden;
	}

	.menu-right {
		flex: 0 0 50%;
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
			height: 85dvh;
		}
		.menu-left,
		.menu-right {
			flex: none;
			width: 100%;
			height: 50%;
		}
		.menu-right img {
			object-fit: cover;
		}
	}
</style>
