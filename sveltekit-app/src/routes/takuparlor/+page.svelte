<script lang="ts">
	export let data;
	import Icecream from '../../lib/assets/icecream.jpg';
</script>

<section class="split-menu">
	<!-- LEFT: White menu card -->
	<div class="menu-left">
		<div class="menu-box">
			<div class="menu-columns">
				<!-- LEFT COLUMN -->
				<div class="column">
					<!-- Soft Serve -->
					<div class="menu-section">
						<div class="japanese">ソフトクリーム</div>
						<h2 class="section-title">Soft Serve</h2>
						<div class="price">7.5</div>
						<div class="subtitle">Cone or Cup</div>
						<ul class="options">
							<li>Vanilla</li>
							<li>Matcha</li>
							<li>Swirl</li>
						</ul>
					</div>

					<!-- Purin -->
					<div class="menu-section">
						<div class="japanese">プリン</div>
						<h2 class="section-title">Purin</h2>
						<div class="subtitle">Japanese Custard Pudding</div>
						<div class="description">Housemade salted caramel sauce</div>
						<ul class="options">
							<li><span class="option-label">Single</span><span class="option-price">7.5</span></li>
							<li>
								<span class="option-label">Gift Box</span><span class="option-price">29</span>
							</li>
							<li class="note">(4 piece)</li>
						</ul>
					</div>

					<!-- Ice Cream Float -->
					<div class="menu-section">
						<h2 class="section-title">Ice Cream Float</h2>
						<div class="price">10</div>
						<div class="subtitle">Made with soft serve</div>
						<ul class="options">
							<li>Melon Soda × Vanilla</li>
							<li>Matcha × Matcha</li>
							<li>Coffee × Vanilla</li>
						</ul>
					</div>
				</div>

				<!-- RIGHT COLUMN -->
				<div class="column">
					<!-- Sundae -->
					<div class="menu-section">
						<h2 class="section-title">Sundae</h2>
						<div class="subtitle">- Japanese Parfait -</div>
						<h3 class="subsection-title">Purin à la Mode</h3>
						<div class="price">16</div>
						<div class="description">
							Housemade custard pudding, salted caramel sauce, vanilla soft serve,<br />
							strawberry, blueberry, banana, cantaloupe, cherry
						</div>
					</div>

					<!-- Cream Anmitsu -->
					<div class="menu-section">
						<h3 class="section-title">Cream Anmitsu</h3>
						<div class="price">14</div>
						<ul class="flavors">
							<li>
								<span class="flavor-name">Hojicha</span>hojicha kanten, original jello, shiratama
								mochi, anko-red bean paste,<br />matcha soft serve, kinako, homemade maple sauce
							</li>
							<li>
								<span class="flavor-name">Mango</span>mango kanten, original jello, shiratama mochi,
								anko-red bean paste,<br />mango pulp, vanilla soft serve, homemade mango sauce
							</li>
						</ul>
						<div class="note">* Anmitsu : Traditional Japanese Dessert</div>
					</div>
				</div>
			</div>

			<!-- Allergens Info -->
			<div class="allergens">
				<div class="allergens-left">Contains Allergens</div>
				<div class="allergens-right">
					<span><strong>Soft Serve</strong> : Milk</span>
					<span><strong>Purin</strong> : Milk and Egg</span>
				</div>
			</div>
		</div>
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
		height: 85vh;
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

	/* WHITE CARD inset by 2rem on all sides */
	.menu-box {
		box-sizing: border-box;

		/* fill the pane minus 4rem total (2rem each side) */
		width: calc(100% - 4rem);
		height: calc(100% - 4rem);

		margin: 2rem; /* 2rem gap on top/right/bottom/left */
		padding: 2rem; /* your inner card padding */

		background: white;
		display: grid;
		grid-template-rows: 1fr auto; /* menu + allergens box */
		gap: 2rem;
		overflow-y: auto; /* scroll inside if it overflows */
	}

	/* Two-column layout inside the card */
	.menu-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	/* …your existing typography & section styles… */

	.column {
	}
	.menu-section {
		margin-bottom: 1.5rem;
	}
	.japanese {
		font-size: 0.875rem;
		margin-bottom: 0.25rem;
	}
	.section-title {
		font-size: 1.25rem;
		text-transform: uppercase;
		margin: 0.25rem 0;
	}
	.subsection-title {
		font-size: 1.1rem;
		margin: 0.25rem 0;
	}
	.price {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.subtitle {
		font-size: 0.875rem;
		font-style: italic;
		margin-bottom: 0.5rem;
	}
	.options,
	.flavors {
		list-style: none;
		padding: 0;
		margin: 0 0 1rem;
	}
	.options li::before {
		content: ': ';
	}
	.options li {
		margin-bottom: 0.25rem;
	}
	.flavors li {
		margin-bottom: 0.5rem;
	}
	.flavor-name {
		font-weight: bold;
		text-transform: capitalize;
		margin-right: 0.25rem;
	}
	.description {
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}
	.note {
		font-size: 0.875rem;
		margin-top: 0.5rem;
	}
	.allergens {
		display: flex;
		justify-content: space-between;
		border: 1px dashed #000;
		padding: 1rem;
		font-size: 0.875rem;
	}
	.allergens-right {
		display: flex;
		gap: 1.5rem;
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
			height: 85vh;
		}
		.menu-left,
		.menu-right {
			flex: none;
			width: 100%;
			height: 50%;
		}
		.menu-box {
			max-width: none;
			margin: 0 1rem;
		}
		.menu-right img {
			object-fit: cover;
		}
	}
</style>
