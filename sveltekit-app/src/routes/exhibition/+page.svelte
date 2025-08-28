<script>
	import image from '../../lib/assets/art.jpg';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<section class="artwork-section">
	<div class="artwork-container">
		<!-- Left: Image -->
		<div class="artwork-image">
			<img src={image} alt="Sloppy Monsta flyer" />
		</div>

		<!-- Right: Text Content -->
		<div class="artwork-details">
			<h3>ART WORK</h3>
			<h2>TAKUMEN NEW YORK PRESENTS EXHIBITION VOL.20</h2>
			<p><strong>By <a href="#">Sloppy Monsta</a></strong></p>
			<p>Starting from May 4th, 2025</p>
			<p>
				Sloppy Monsta is a little creature who lives all around you – in the corners of your room,
				along the sidewalk of your block, or quietly passing by on the train. If you slow down and
				look closely, and believe just a little, you might just catch a glimpse of him.
			</p>
			<p>
				He loves a bit of harmless mischief, but his heart is kind and full of good intentions. In
				his own silly, clumsy way, Sloppy Monsta always tries his best to be helpful, leaving little
				bits of joy and unexpected smiles wherever he wanders.
			</p>
			<p>
				instagram : <a
					href="https://www.instagram.com/sloppymonsta/"
					target="_blank"
					rel="noopener noreferrer">@sloppymonsta</a
				><br />
				website :
				<a href="https://sloppymonsta.bigcartel.com" target="_blank" rel="noopener noreferrer"
					>sloppymonsta.bigcartel.com</a
				>
			</p>

			<p class="divider">**************************************************</p>

			<p>
				For inquiries regarding artworks, please contact us,<br />
				<a href="mailto:info@takumenlic.com" class="highlight">INFO@TAKUMENLIC.COM</a>
			</p>
		</div>
	</div>
	<div class="artwork-mobile">
		<h3>ART WORK</h3>

		<div class="artwork-mobile-image">
			<img src={image} alt="Sloppy Monsta flyer" />
		</div>

		<div class="artwork-mobile-details">
			<h2>TAKUMEN NEW YORK PRESENTS EXHIBITION VOL.20</h2>
			<p>
				<strong
					>By <a
						href="https://www.instagram.com/sloppymonsta/"
						target="_blank"
						rel="noopener noreferrer">Sloppy Monsta</a
					></strong
				>
			</p>
			<p>Starting from May 4th, 2025</p>
			<p>
				Sloppy Monsta is a little creature who lives all around you – in the corners of your room,
				along the sidewalk of your block, or quietly passing by on the train. If you slow down and
				look closely, and believe just a little, you might just catch a glimpse of him.
			</p>
			<p>
				He loves a bit of harmless mischief, but his heart is kind and full of good intentions. In
				his own silly, clumsy way, Sloppy Monsta always tries his best to be helpful, leaving little
				bits of joy and unexpected smiles wherever he wanders.
			</p>

			<p>
				instagram : <a
					href="https://www.instagram.com/sloppymonsta/"
					target="_blank"
					rel="noopener noreferrer">@sloppymonsta</a
				><br />
				website :
				<a href="https://sloppymonsta.bigcartel.com" target="_blank" rel="noopener noreferrer"
					>sloppymonsta.bigcartel.com</a
				>
			</p>

			<!-- <p class="divider">**************************************************</p> -->

			<p>
				For inquiries regarding artworks, please contact us,<br />
				<a href="mailto:info@takumenlic.com" class="highlight">INFO@TAKUMENLIC.COM</a>
			</p>
		</div>
	</div>
</section>

<style>
	a:hover {
		text-decoration: underline !important;
		color: #fed314 !important;
	}
	.artwork-section {
		background-color: #83a77d;
		height: 100dvh;
		box-sizing: border-box;
		overflow: hidden; /* ensures nothing spills out */
		padding-top: 15vh;
	}

	.artwork-container {
		display: flex;
		height: 100%;
		width: 100%;
		gap: 2rem;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
		padding: 3rem;
	}

	.artwork-image {
		width: 50vw;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.artwork-image img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		display: block;
	}

	/* Make the details column scrollable */
	.artwork-details {
		width: 50vw;
		overflow: auto; /* enables scrolling in this pane only */
		min-height: 0; /* prevents flexbox from forcing extra height */
		scrollbar-gutter: stable; /* avoids layout shift when scrollbar appears */
		/* optional: tiny right padding so text doesn't hit the scrollbar */
		padding-right: 0.5rem;
		font-family: 'futura', sans-serif;
		color: #333;
	}

	/* .artwork-details {
		width: 50vw;
		flex: 1 1 500px;
		color: black;
		font-family: futura, sans-serif;
		display: flex;
		flex-direction: column;
	} */

	.artwork-details h3 {
		font-weight: bold;
		font-size: 2.125rem;
		/* margin-bottom: 10px; */
		color: #ffffff;
	}

	.artwork-details h2 {
		font-size: 1.1rem;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.artwork-details p {
		font-size: 1rem;
		line-height: 1.6;
		/* margin-bottom: 16px; */
		margin: 0.5rem 0;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}

	.artwork-details p strong a {
		font-weight: bold;
	}

	.artwork-details a {
		color: #333;
		text-decoration: underline;
		font-weight: 500;
	}

	.artwork-details .highlight {
		font-weight: bold;
		text-transform: uppercase;
	}

	.divider {
		/* allow asterisks to break onto the next line */
		overflow-wrap: break-word; /* modern */
		word-break: break-all; /* old-school fallback */
		font-family: monospace;
		margin: 1rem 0;
		text-align: left;
	}

	/* Mobile only structure - hidden on desktop */
	.artwork-mobile {
		display: none;
	}

	/* Hide desktop layout on mobile */
	@media (max-width: 768px) {
		.artwork-section {
			padding: 0rem 1rem 1.75rem 1rem;
			height: auto !important; /* Allow height to adjust based on content */
			overflow: visible; /* Allow content to overflow */
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 10vh;
		}
		.artwork-container {
			display: none !important;
		}

		.artwork-mobile {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #83a77d;
			color: #333;
			font-family: avenir-next-lt-pro-condensed, sans-serif;
		}

		.artwork-mobile h3 {
			font-size: 1.75rem;
			font-weight: bold;
			color: white;
			margin-bottom: 1rem;
			text-align: center;
		}

		.artwork-mobile-image img {
			width: 100%;
			max-width: 100%;
			height: auto;
			object-fit: contain;
			margin-bottom: 1rem;
			display: block;
		}

		.artwork-mobile-details {
			text-align: left;
			font-size: 0.95rem;
			line-height: 1.6;
			width: 100%;
		}

		.artwork-mobile-details h2 {
			font-size: 1.1rem;
			font-weight: 600;
			margin-bottom: 0.75rem;
		}

		.artwork-mobile-details a {
			color: #333;
			text-decoration: underline;
			font-weight: 500;
		}

		.artwork-mobile-details .divider {
			font-size: 0.8rem;
			letter-spacing: 1px;
			margin: 1rem 0;
		}

		.artwork-mobile-details .highlight {
			font-weight: bold;
			text-transform: uppercase;
		}
	}
</style>
