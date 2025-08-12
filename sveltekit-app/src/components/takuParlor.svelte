<script></script>

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
		width: calc(100% - 4rem);
		height: calc(100% - 4rem);
		margin: 2rem;
		padding: clamp(1rem, 2vw, 2rem);
		background: #fff;
		display: grid;
		grid-template-rows: 1fr auto;
		gap: var(--gap);
		overflow: auto;
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
	}
	.section-title {
		text-transform: uppercase;
		font-weight: 800;
		letter-spacing: var(--lead);
		margin: 0.25rem 0 0.25rem;
		font-size: clamp(1.25rem, 1.2vw + 1rem, 2rem);
		line-height: 1.1;
	}
	.subsection-title {
		font-weight: 800;
		margin: 0.15rem 0 0.25rem;
		font-size: clamp(1.1rem, 1vw + 0.7rem, 1.5rem);
	}
	.price {
		font-weight: 900;
		font-size: clamp(1.25rem, 1.4vw + 1rem, 2.25rem);
		margin: 0.25rem 0 0.5rem;
	}
	.subtitle {
		font-size: clamp(0.9rem, 0.3vw + 0.8rem, 1rem);
		font-style: italic;
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
	}
	.description {
		margin: 0.25rem 0 0.75rem;
		line-height: 1.35;
		font-size: clamp(0.95rem, 0.25vw + 0.85rem, 1rem);
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
	}
	.flavor-name {
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 0.35rem;
	}

	/* sections */
	.menu-section {
		margin-bottom: 1.5rem;
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

	/* == Responsive ========================================================= */
	/* Large tablets: keep two columns but tighten spacing */
	@media (max-width: 1024px) {
		.menu-box {
			width: calc(100% - 2rem);
			/* height: auto; */
			height: calc(100% - 2rem);
		}
	}

	/* Tablets & down: stack columns, center headings a touch */
	@media (max-width: 820px) {
		.menu-columns {
			grid-template-columns: 1fr;
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

	/* Phones: edge‑to‑edge padding and tighter gaps */
	@media (max-width: 600px) {
		.menu-box {
			margin: 0;
			width: 100%;
			height: auto;
			border-radius: 0;
		}
		.menu-columns {
			gap: 1rem;
		}
		.menu-section {
			margin-bottom: 1.1rem;
		}
	}

	@media (300px <= width <= 600px) {
		.menu-box {
			width: calc(100% - 1rem);
			height: calc(100% - 1rem);
		}
	}
</style>
