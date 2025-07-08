<script lang="ts">
	import plates from '../../lib/assets/plates.png';
</script>

<section class="hours-info">
	<div class="content-container">
		<div class="info-left">
			<div class="block">
				<h2>TAKUMEN NEW AMERICAN IZAKAYA</h2>
				<p>
					5-50 50TH AVENUE,<br />
					LONG ISLAND CITY, NEW YORK, 11101<br />
					718.361.7973
				</p>
			</div>

			<div class="block">
				<h3>RESERVATIONS</h3>
				<p>
					RESERVE WITH RESY<br />
					OR GIVE US A CALL 718.361.7973
				</p>
			</div>

			<div class="block">
				<h3>LARGE GROUP RESERVATIONS,<br />CATERING & GENERAL INQUIRIES</h3>
				<p><a href="mailto:info@takumenlic.com">INFO@TAKUMENLIC.COM</a></p>
			</div>
		</div>

		<div class="info-center">
			<img src={plates} alt="Table full of shared plates" />
		</div>

		<div class="info-right">
			<div class="block">
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

			<div class="block">
				<h3>FIND US AT</h3>
				<p><a href="https://instagram.com">INSTAGRAM</a></p>
			</div>
		</div>
	</div>
</section>

<style>
	.hours-info {
		background-color: #fed314;
		padding: 4rem 2rem;
		font-family: sans-serif;
		color: black;
		height: 80vh;
	}

	.content-container {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		align-items: flex-start;
		justify-content: space-between;
	}

	.info-left,
	.info-right {
		flex: 1 1 250px;
		min-width: 250px;
	}

	.info-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-center img {
		width: 100%;
		height: auto;
		object-fit: contain;
		max-height: 100%;
	}

	.block {
		margin-bottom: 2rem;
	}

	.block h2,
	.block h3 {
		font-size: 1.5rem;
		font-family: futura, sans-serif;
		font-weight: 500;
		color: white;
	}

	h2,
	h3 {
		margin: 0 0 0.5rem;
		font-weight: bold;
	}

	.block p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin: 0.5rem 0;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}

	a {
		text-decoration: underline;
		color: inherit;
	}

	@media (max-width: 768px) {
		.content-container {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.info-left,
		.info-right {
			text-align: center;
		}
	}
</style>
