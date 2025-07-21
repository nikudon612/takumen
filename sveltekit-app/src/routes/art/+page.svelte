<script>
	import image from '../../lib/assets/art.jpg';
</script>

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
				instaglam : <a href="#">@sloppymonsta</a><br />
				website : <a href="#">sloppymonsta.bigcartel.com</a>
			</p>

			<p class="divider">**************************************************</p>

			<p>
				For inquiries regarding artworks, please contact us,<br />
				<a href="mailto:info@takumenlic.com" class="highlight">INFO@TAKUMENLIC.COM</a>
			</p>
		</div>
	</div>
</section>

<style>
	.artwork-section {
		background-color: #83a77d;
		padding: 60px;
		height: 100vh;
		box-sizing: border-box;
		overflow: hidden; /* ensures nothing spills out */
	}

	.artwork-container {
		display: flex;
		height: 100%;
		width: 100%;
		gap: 2rem;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
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

	.artwork-details {
		width: 50vw;
		flex: 1 1 500px;
		color: black;
		font-family: sans-serif;
	}

	.artwork-details h3 {
		font-weight: bold;
		font-size: 1.2rem;
		margin-bottom: 10px;
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
		margin-bottom: 16px;
	}

	.artwork-details a {
		color: black;
		text-decoration: underline;
		font-weight: 500;
	}

	.artwork-details .highlight {
		font-weight: bold;
		text-transform: uppercase;
	}

	.divider {
		margin: 20px 0;
		font-family: monospace;
	}
</style>
