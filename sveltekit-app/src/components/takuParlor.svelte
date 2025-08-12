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
					<div class="section-header">
						<div class="japanese">ソフトクリーム</div>
						<h2 class="section-title">Soft Serve</h2>
					</div>

					<div class="price ssprice">7.5</div>

					<div class="section-content softserve-content">
						<div class="softserve-info">
							<div class="icecream-note">Cone or Cup</div>
							<ul class="options icecream-options">
								<li>Vanilla</li>
								<li>Matcha</li>
								<li>Swirl</li>
							</ul>
						</div>
						<img src={mascot1} alt="" class="mascot-side" />
					</div>
				</div>
			</div>

			<!-- Purin -->
			<div class="menu-section">
				<div class="section-header">
					<div class="japanese">プリン</div>
					<h2 class="section-title">Purin</h2>
					<div class="subtitle purin-subtitle">Japanese Custard Pudding</div>
					<div class="description">Housemade salted caramel sauce</div>
				</div>
				<ul class="options purin-options">
					<li class="option">
						<span class="option-label">Single</span><span class="option-price">7.5</span>
					</li>
					<li class="option">
						<span class="option-label">Gift Box <span class="purin-amount">(4 piece)</span></span
						><span class="option-price">29</span>
					</li>
				</ul>
			</div>

			<!-- Ice Cream Float -->
			<div class="menu-section">
				<div class="section-header">
					<h2 class="section-title">Ice Cream Float</h2>
					<div class="price">10</div>
				</div>

				<div class="icecream-note">Made with soft serve</div>
				<ul class="options icecream-options">
					<li>Melon Soda X Vanilla</li>
					<li>Matcha X Matcha</li>
					<li>Coffee X Vanilla</li>
				</ul>
			</div>
		</div>

		<!-- RIGHT COLUMN -->
		<div class="column">
			<!-- Sundae -->
			<div class="menu-section">
				<div class="section-header">
					<h2 class="section-title">Sundae</h2>
					<div class="subtitle">- Japanese Parfait -</div>
				</div>

				<div class="section-content">
					<h3 class="subsection-title">Purin à la Mode</h3>
					<div class="price">16</div>
					<div class="description">
						housemade custard pudding, salted caramel sauce, vanilla soft serve, strawberry,
						blueberry, banana, cantaloupe, cherry
					</div>
				</div>
			</div>

			<!-- ⬇️ MASCOT 2 (below Sundae, above Cream Anmitsu) -->
			<img src={mascot2} alt="" class="mascot-inline mascot-sundae" />

			<!-- Cream Anmitsu -->
			<div class="menu-section">
				<div class="section-header">
					<h3 class="section-title">Cream Anmitsu</h3>
					<div class="price">14</div>
				</div>

				<ul class="flavors">
					<li class="flavor">
						<span class="flavor-name">Hojicha</span>
						<span class="flavor-description"
							>hojicha kanten, original jello, shiratama mochi, anko-red bean paste, matcha soft
							serve, kinako, homemade maple sauce</span
						>
					</li>
					<li class="flavor">
						<span class="flavor-name">Mango</span>
						<span class="flavor-description"
							>mango kanten, original jello, shiratama mochi, anko-red bean paste, mango pulp,
							vanilla soft serve, homemade mango sauce</span
						>
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

	.column {
		display: flex;
		flex-direction: column;
		gap: clamp(1rem, 2vw, 2rem);
	}

	/* == Type scale (roughly matches the reference) ======================== */
	.japanese {
		font-size: clamp(0.9rem, 0.4vw + 0.7rem, 1.1rem);
		margin-bottom: 0.25rem;
		letter-spacing: var(--lead);
		font-family: 'Luckiest Guy', sans-serif;
		font-weight: 800;
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
		font-weight: 500;
		font-size: clamp(1rem, 1.4vw + 1rem, 1.5rem);
		margin: 0.25rem 0 0.5rem;
		font-family: 'Luckiest Guy', sans-serif;
		letter-spacing: 0.1em;
	}
	.ssprice {
		text-align: center;
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
		font-size: clamp(0.95rem, 0.25vw + 0.85rem, 0.825rem);
		font-family: 'avenir-next-lt-pro-condensed';
		text-align: center;
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

	.option-label::before {
		content: ':';
		margin-right: 0.25rem;
		color: #333;
	}
	.option-price {
		font-weight: 800;
	}
	.options .note {
		margin-top: 0.25rem;
		font-size: 0.9em;
		opacity: 0.85;
	}

	.icecream-options {
		font-family: 'everyrun', sans-serif;
		text-align: left;
		display: flex;
		flex-direction: column;
	}
	.icecream-note {
		font-family: 'everyrun', sans-serif;
		text-align: left;
	}

	/* flavor callouts */
	.flavors li {
		/* margin-bottom: 0.6rem; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.flavors {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}

	.flavor {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}
	.flavor-name {
		font-weight: 400;
		text-transform: uppercase;
		margin-right: 0.35rem;
		font-family: 'everyrun', sans-serif;
	}

	.flavor-description {
		font-size: 0.9rem;
		line-height: 1.3;
		text-align: center;
		font-family: 'avenir-next-lt-pro-condensed';
		font-weight: 600;
		margin-top: 0.15rem;
		text-wrap: pretty;
	}

	/* sections */
	.menu-section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.section-header {
		text-align: center;
	}

	.section-content {
		text-align: center;
	}

	.softserve-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: -3rem;
	}

	.softserve-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	/* PURIN ROWS — label ⟶ price, centered and evenly spaced */
	.purin-options {
		width: min(440px, 90%);
		margin: 0 auto; /* center the block in the section */
	}

	/* PURIN — remove extra colon from the list item itself */
	.purin-options li::before {
		content: none !important;
	}

	/* Keep a single colon tight before the label text */
	.purin-options .option-label::before {
		content: ':'; /* one colon */
		margin-right: 0.25rem; /* small gap */
	}

	.purin-options .option {
		display: flex;
		align-items: center; /* center price vertically vs label */
		justify-content: space-between; /* push price away from label */
		gap: 1.25rem; /* breathing room between them */
	}

	.purin-options .option-label {
		display: inline-flex;
		align-items: center;
		text-align: left;
	}

	.purin-options .option-price {
		min-width: 3.5ch; /* keeps 7.5 / 29 from jittering */
		text-align: right;
		padding-left: 0.5rem; /* small buffer from label */
	}

	.purin-subtitle {
		font-size: clamp(0.9rem, 0.3vw + 0.8rem, 3rem);
		margin-bottom: 0rem;
		font-family: 'futura-pt', sans-serif;
		text-transform: uppercase;
		font-weight: 600;
	}

	.option {
		display: flex;
		/* justify-content: space-between; */
		width: 100%;
		align-items: center;
		text-align: left;
	}

	.option-price {
		font-family: 'Luckiest Guy', sans-serif;
		display: flex;
		align-items: center;
	}

	.purin-amount {
		font-family: 'futura-pt', sans-serif;
		font-size: 0.9rem;
		margin-left: 0.25rem;
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
		gap: clamp(8px, 1vw, 16px);
	}

	.softserve-text {
		flex: 1;
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}

	.mascot-side {
		max-width: clamp(80px, 18vw, 160px);
		height: auto;
		pointer-events: none;
		user-select: none;
	}

	.note {
		font-family: 'everyrun', sans-serif;
		font-size: 1rem;
		width: 100%;
		text-align: center;
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

		.softserve-content {
			justify-content: center;
			margin-top: 0rem;
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
