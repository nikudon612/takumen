<script lang="ts">
	import image from '../../lib/assets/takumensign.jpg';
</script>

<section class="hours-info">
	<div class="content-container">
		<!-- Left column -->
		<div class="info-block left">
			<div>
				<h2>TAKUMEN NEW AMERICAN IZAKAYA</h2>
				<p>
					5-50 50TH AVENUE,<br />
					LONG ISLAND CITY, NEW YORK, 11101<br />
					718.361.7973
				</p>
			</div>
			<div>
				<h3>HOURS</h3>
				<p>
					OPEN EVERYDAY<br />
					MONDAY TO SUNDAY<br />
					11:30AM - 3:45PM
				</p>
				<p>
					<strong>DINNER</strong><br />
					SUNDAY TO THURSDAY<br />
					5:30PM - 9:30PM<br />
					FRIDAY & SATURDAY<br />
					5:30PM - 10:00PM
				</p>
			</div>
		</div>

		<!-- Center image -->
		<div class="info-block center">
			<img src={image} alt="Table full of shared plates" />
		</div>

		<!-- Right column -->
		<div class="info-block right">
			<div>
				<h3>FIND US AT</h3>
				<p><a href="https://instagram.com">INSTAGRAM</a></p>
			</div>
			<div>
				<h3>JOIN OUR NEWSLETTER</h3>
				<p>SIGN UP WITH YOUR EMAIL FOR UPDATES</p>
				<input type="email" placeholder="Email Address" class="newsletter-input" />
				<button class="subscribe-btn">SUBSCRIBE</button>
			</div>
		</div>
	</div>
</section>

<style>
	.hours-info {
		background-color: #fed314;
		padding: 4rem 3rem;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		color: black;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content-container {
		display: flex;
		/* max-width: 1200px; */
		/* margin: 0 auto; */
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.info-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1 1 300px;
	}

	.info-block.left,
	.info-block.right {
		max-width: 300px;
	}

	.info-block.center img {
		width: 100%;
		height: auto;
		max-height: 400px;
		object-fit: contain;
	}

	h2,
	h3 {
		font-family: futura, sans-serif;
		color: white;
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0.5rem 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.5;
		margin: 0.5rem 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		font-weight: bold;
	}

	.newsletter-input {
		padding: 0.5rem;
		border: none;
		width: 100%;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.subscribe-btn {
		background-color: #a8c38b;
		border: none;
		padding: 0.5rem 1rem;
		font-weight: bold;
		cursor: pointer;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.content-container {
			flex-direction: column;
			text-align: center;
		}

		.info-block.left,
		.info-block.right {
			max-width: 100%;
		}
	}
</style>
