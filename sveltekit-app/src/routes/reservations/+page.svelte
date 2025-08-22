<script>
	import image from '../../lib/assets/plates.png';
</script>

<section class="reservations-section">
	<!-- Mobile Layout -->
	<div class="mobile-reservations">
		<div class="mobile-image">
			<img src={image} alt="People dining at Takumen" />
		</div>
		<div class="mobile-info">
			<h2>RESERVATIONS</h2>
			<p>
				<a href="https://resy.com/cities/long-island-city-queens-ny/venues/takumen?date=2025-08-15&seats=2" target="_blank" rel="noopener noreferrer">RESERVE WITH RESY</a><br />
				OR GIVE US A CALL <a href="tel:7183617973">718.361.7973</a>
			</p>
			<h2>LARGE GROUP RESERVATIONS,<br />CATERING & GENERAL INQUIRIES</h2>
			<p><a href="mailto:info@takumenlic.com">INFO@TAKUMENLIC.COM</a></p>
		</div>
	</div>

	<!-- Desktop Layout -->
	<div class="reservations-container">
		<!-- Left: Reservation Info -->
		<div class="reservation-info">
			<h2>RESERVATIONS</h2>
			<p>
				<a href="https://resy.com/cities/long-island-city-queens-ny/venues/takumen?date=2025-08-15&seats=2" target="_blank" rel="noopener noreferrer">RESERVE WITH RESY</a><br />
				OR GIVE US A CALL <a href="tel:7183617973">718.361.7973</a>
			</p>
		</div>

		<!-- Center: Image -->
		<div class="reservation-image">
			<img src={image} alt="People dining at Takumen" />
		</div>

		<!-- Right: Group Info -->
		<div class="group-info">
			<h2>LARGE GROUP RESERVATIONS,<br />CATERING & GENERAL INQUIRIES</h2>
			<p>
				<a href="mailto:info@takumenlic.com">info@takumenlic.com</a>
			</p>
		</div>
	</div>
</section>

<style>
	.mobile-reservations {
		display: none;
	}

	.reservations-section {
		background-color: #f26c5a;
		height: 85dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.reservations-container {
		padding-left: 3rem;
		padding-right: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}

	.reservation-info,
	.group-info {
		flex: 1 1 300px;
		color: white;
	}

	.reservation-info h2,
	.group-info h2 {
		font-family: Futura-pt-condensed, sans-serif;
		font-weight: normal;
		font-size: 2.125rem;
		margin-bottom: 10px;
	}

	.reservation-info p,
	.group-info p {
		font-family: avenir-next-lt-pro-condensed, sans-serif;
		font-size: 1.625rem;
		color: black;
	}

	.reservation-info a,
	.group-info a {
		color: black;
		text-decoration: underline;
	}

	.reservation-image {
		flex: 1 1 500px;
	}

	.reservation-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	a:hover {
		color: #FED314;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.reservations-section {
			justify-content: flex-start;
			overflow: visible;
			height: 100%;
		}
		.reservations-container {
			display: none;
		}

		.mobile-reservations {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
		}

		.mobile-image img {
			width: 100%;
			display: block;
			object-fit: cover;
			max-height: 42.5vh;
			height: 42.5vh;
			flex-shrink: 0;
		}

		.mobile-info {
			background-color: #f26c5a;
			padding: 1rem 1rem;
			text-align: left;
			color: white;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			height: 100%;
			gap: 0rem;
		}

		.mobile-info h2 {
			font-family: Futura-pt-condensed, sans-serif;
			font-size: 1.75rem;
			font-weight: normal;
			margin: 0.5rem 0rem;
		}

		.mobile-info p {
			font-family: avenir-next-lt-pro-condensed, sans-serif;
			font-size: 1.25rem;
			color: black;
			line-height: 1.5;
			margin: 0.5rem 0rem;
		}

		.mobile-info a {
			color: black;
			text-decoration: underline;
			margin: 0.5rem 0rem;
		}
	}
</style>
