<script>
	import mascot1 from '../lib/assets/mascot1.png';
	import mascot2 from '../lib/assets/mascot2.png';
</script>

<div class="menu-box">
	<div class="menu-columns">
		<!-- LEFT COLUMN -->
		<div class="column">
			<!-- Soft Serve -->
			<!-- Soft Serve with mascot -->
			<div class="menu-section softserve-with-mascot">
				<div class="softserve-text">
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
				<img src={mascot1} alt="" class="mascot-side" />
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
				<div class="">Made with soft serve</div>
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
					housemade custard pudding, salted caramel sauce, vanilla soft serve,<br />
					strawberry, blueberry, banana, cantaloupe, cherry
				</div>
			</div>

			<!-- ⬇️ MASCOT 2 (below Sundae, above Cream Anmitsu) -->
			<img src={mascot2} alt="" class="mascot-inline mascot-sundae" />

			<!-- Cream Anmitsu -->
			<div class="menu-section">
				<h3 class="section-title">Cream Anmitsu</h3>
				<div class="price">14</div>
				<ul class="flavors">
					<li>
						<span class="flavor-name">Hojicha</span>hojicha kanten, original jello, shiratama mochi,
						anko-red bean paste,<br />matcha soft serve, kinako, homemade maple sauce
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

<style>
	/* == Card =============================================================== */
	.menu-box {
		--gap: 2rem;
		--dash: #000;
		--lead: 0.02em;

		box-sizing: border-box;
		width: calc(100% - 2rem);
		height: calc(100% - 2rem);
		padding: clamp(1rem, 2vw, 2rem);
		background: #fff;
		display: grid;
		grid-template-rows: 1fr auto;
		gap: var(--gap);
		overflow: auto;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
		/* border-radius: 8px; */
	}

	/* == Columns ============================================================ */
	.menu-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(1rem, 2vw, 2rem);
	}

	/* == Type scale (roughly matches the reference) ======================== */
	.japanese {
		font-size: clamp(0.9rem, 0.4vw + 0.7rem, 1.1rem);
		margin-bottom: 0.25rem;
		letter-spacing: var(--lead);
		font-family: 'everyrun', sans-serif;
	}
	.section-title {
		text-transform: uppercase;
		font-weight: 800;
		letter-spacing: var(--lead);
		margin: 0.25rem 0 0.25rem;
		font-size: clamp(1.25rem, 1.2vw + 1rem, 2rem);
		line-height: 1.1;
		font-family: 'everyrun', sans-serif;
	}
	.subsection-title {
		font-weight: 800;
		margin: 0.15rem 0 0.25rem;
		font-size: clamp(1.1rem, 1vw + 0.7rem, 1.5rem);
		font-family: 'everyrun', sans-serif;
	}
	.price {
		font-weight: 900;
		font-size: clamp(1.25rem, 1.4vw + 1rem, 2.25rem);
		margin: 0.25rem 0 0.5rem;
		font-family: 'Luckiest Guy', sans-serif;
	}
	.subtitle {
		font-size: clamp(0.9rem, 0.3vw + 0.8rem, 1rem);
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
		font-family: 'futura-pt', sans-serif;
	}
	.description {
		margin: 0.25rem 0 0.75rem;
		line-height: 1.35;
		font-size: clamp(0.95rem, 0.25vw + 0.85rem, 1rem);
		font-family: 'avenir-next-lt-pro-condensed';
		font-weight: 800;
	}

	/* == Lists ============================================================= */
	.options,
	.flavors {
		list-style: none;
		padding: 0;
		margin: 0 0 1rem;
	}

	.options li {
		margin-bottom: 0.25rem;
	}
	.options:not(.priced) li::before {
		content: ': ';
	}

	.option-label {
		text-transform: capitalize;
		font-family: 'everyrun', sans-serif;
	}
	.option-price {
		font-weight: 800;
	}
	.options .note {
		margin-top: 0.25rem;
		font-size: 0.9em;
		opacity: 0.85;
	}

	/* flavor callouts */
	.flavors li {
		margin-bottom: 0.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}
	.flavor-name {
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 0.35rem;
		font-family: 'everyrun', sans-serif;
	}

	/* sections */
	.menu-section {
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	/* == Allergens bar ====================================================== */
	.allergens {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: space-between;
		border: 2px dashed var(--dash);
		padding: clamp(0.75rem, 1.2vw, 1rem);
		font-size: clamp(0.9rem, 0.3vw + 0.8rem, 1rem);
		border-radius: 6px;
	}
	.allergens-left {
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}
	.allergens-right {
		display: flex;
		gap: clamp(0.75rem, 2vw, 2rem);
		flex-wrap: wrap;
	}

	/* mascots: inline, responsive, never capture clicks, no scrollbars affected */
	.mascot-inline {
		display: block;
		margin: clamp(8px, 2vw, 20px) auto;
		max-width: clamp(140px, 20vw, 280px);
		height: auto;
		pointer-events: none;
		user-select: none;
	}

	.mascot-sundae {
		/* slight nudge right on wide screens */
		transform: translateX(2%);
	}

	.softserve-with-mascot {
		display: flex;
		align-items: flex-start; /* align mascot to top of text block */
		gap: clamp(8px, 1vw, 16px);
	}

	.softserve-text {
		flex: 1;
	}

	.mascot-side {
		max-width: clamp(80px, 18vw, 160px);
		height: auto;
		pointer-events: none;
		user-select: none;
	}

	.note {
		font-family: 'everyrun', sans-serif;
	}

	/* == Responsive ========================================================= */
	/* Large tablets: keep two columns but tighten spacing */
	@media (max-width: 1024px) {
		.menu-box {
			width: calc(100% - 2rem);
			/* height: auto; */
			height: calc(100% - 2rem);
		}
		.menu-columns {
			display: flex;
			flex-direction: column;
		}
	}

	/* Tablets & down: stack columns, center headings a touch */
	@media (max-width: 820px) {
		.menu-box {
			width: calc(100% - 2rem);
			height: calc(100% - 2rem);
		}

		.section-title,
		.subsection-title {
			line-height: 1.1;
		}
		.allergens {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media (max-width: 768px) {
		.menu-columns {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: clamp(1rem, 2vw, 2rem);
		}
	}

	/* Phones: edge‑to‑edge padding and tighter gaps */
	@media (max-width: 600px) {
		.menu-box {
			margin: 0;
			width: calc(100% - 1rem);
			height: calc(100% - 1rem);
			border-radius: 0;
		}
		.menu-columns {
			gap: 1rem;
		}
		.menu-section {
			margin-bottom: 1.1rem;
		}
	}
	@media (max-width: 525px) {
		.menu-columns {
			display: flex;
			flex-direction: column;
		}
	}

	@media (300px <= width <= 600px) {
		.menu-box {
			width: calc(100% - 1rem);
			height: calc(100% - 1rem);
		}
		.softserve-with-mascot {
			flex-direction: row;
			align-items: center;
		}
		.mascot-side {
			max-width: clamp(100px, 40vw, 180px);
		}
	}
</style>
