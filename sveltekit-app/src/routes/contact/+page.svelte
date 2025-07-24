<script lang="ts">
	import image from '../../lib/assets/takumensign.jpg';
</script>

<section class="hours-info">
	<!-- Desktop Layout (UNCHANGED) -->
	<div class="content-container">
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

		<div class="info-block center">
			<img src={image} alt="Takumen sign at night" />
		</div>

		<div class="info-block right">
			<div>
				<h3>FIND US AT</h3>
				<p><a href="https://instagram.com/takumenlic" target="_blank">INSTAGRAM</a></p>
			</div>
			<div class="newsletter-signup">
				<h3>JOIN OUR NEWSLETTER</h3>
				<p>SIGN UP WITH YOUR EMAIL FOR UPDATES</p>
				<input type="email" placeholder="Email Address" class="newsletter-input" />
				<button class="subscribe-btn">SUBSCRIBE</button>
			</div>
		</div>
	</div>

	<!-- Mobile Layout -->
	<div class="mobile-hours-info">
		<div class="mobile-hours-image">
			<img src={image} alt="Takumen sign at night" />
		</div>
		<div class="mobile-hours-text">
			<h2>TAKUMEN NEW AMERICAN IZAKAYA</h2>
			<p>
				5-50 50TH AVENUE,<br />
				LONG ISLAND CITY, NEW YORK, 11101<br />
				718.361.7973
			</p>

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

			<h3>FIND US AT</h3>
			<p><a href="https://instagram.com/takumenlic" target="_blank">INSTAGRAM</a></p>

			<h3>JOIN OUR NEWSLETTER</h3>
			<p>SIGN UP WITH YOUR EMAIL FOR UPDATES</p>
			<input type="email" placeholder="Email Address" class="newsletter-input" />
			<button class="subscribe-btn">SUBSCRIBE</button>
		</div>
	</div>
</section>

<style>
	/* === ORIGINAL DESKTOP STYLES PRESERVED === */
	.hours-info {
		background-color: #fed314;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		color: black;
		height: 85vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
	}

	.content-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		flex-wrap: nowrap;
		width: 100%;
	}

	.info-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.info-block.left div {
		width: 100%;
	}

	.info-block.left,
	.info-block.right {
		text-wrap: nowrap;
	}

	.info-block.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-block.center img {
		width: auto;
		height: 100%;
		max-height: 500px;
		object-fit: contain;
	}

	h2,
	h3 {
		font-family: futura-pt-condensed, sans-serif;
		font-weight: normal;
		color: white;
		font-size: 1.875rem;
		line-height: 2.25rem;
		margin: 0.5rem 0;
	}

	p {
		font-size: 1.375rem;
		line-height: 1.5;
		margin: 0.5rem 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		font-weight: bold;
	}

	.newsletter-signup {
		display: flex;
		flex-direction: column;
	}

	.newsletter-input {
		padding: 0.5rem;
		border: none;
		width: 50%;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.subscribe-btn {
		background-color: #a8c38b;
		border: none;
		padding: 0.5rem 1rem;
		font-weight: semi-bold;
		color: white;
		cursor: pointer;
		width: 50%;
		text-align: left;
	}
	.subscribe-btn:hover {
		color: #fed314;
	}

	/* === MOBILE STYLES ONLY BELOW === */
	.mobile-hours-info {
		display: none;
	}

	@media (max-width: 768px) {
		.hours-info {
			overflow: visible;
		}
		.content-container {
			display: none;
			overflow: visible;
		}

		.mobile-hours-info {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			overflow: visible;
		}

		.mobile-hours-image img {
			width: 100%;
			height: auto;
			object-fit: cover;
			display: block;
		}

		.mobile-hours-text {
			background-color: #fed314;
			color: black;
			padding: 1.5rem 1rem;
			text-align: left;
		}

		.mobile-hours-text h2,
		.mobile-hours-text h3 {
			font-family: futura-pt-condensed, sans-serif;
			font-size: 1.75rem;
			font-weight: normal;
			margin: 0.75rem 0 0.25rem;
		}

		.mobile-hours-text p {
			font-size: 1.25rem;
			line-height: 1.5;
			margin: 0.5rem 0;
		}

		.mobile-hours-text a {
			color: black;
			text-decoration: underline;
			font-weight: bold;
		}

		.mobile-hours-text .newsletter-input {
			width: 100%;
			padding: 0.5rem;
			margin: 0.5rem 0;
			border: none;
		}

		.mobile-hours-text .subscribe-btn {
			width: 100%;
			background-color: #a8c38b;
			color: white;
			padding: 0.5rem 1rem;
			border: none;
			cursor: pointer;
			text-align: center;
		}

		.mobile-hours-text .subscribe-btn:hover {
			color: #fed314;
		}
	}
</style>
