<script>
	import image from '../../lib/assets/plates.png';
</script>

<section class="reservations-section">
	<div class="reservations-container">
		<!-- Left: Reservation Info -->
		<div class="reservation-info">
			<h2>RESERVATIONS</h2>
			<p>
				RESERVE WITH RESY<br />
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
	@media (max-width: 768px) {
		.reservations-container {
			flex-direction: column;
			align-items: center;
		}

		.reservation-info,
		.group-info {
			text-align: center;
			margin-bottom: 20px;
		}

		.reservation-image img {
			max-width: 100%;
			height: auto;
		}
	}
	.reservations-section {
		background-color: #f26c5a;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.reservations-container {
		padding-left: 3rem;
		padding-right: 3rem;
		display: flex;
		flex-wrap: wrap;
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
</style>
