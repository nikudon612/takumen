<script lang="ts">
	import image from '../../lib/assets/Takumen_Interiors-6.jpg';

	let email = '';
	let message = '';
	let submitting = false;

	async function subscribe() {
		if (!email) return;
		submitting = true;
		message = '';
		console.log('[subscribe] email=', email);

		try {
			const res = await fetch('/api/newsletter', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email, website: '' }) // website is honeypot
			});
			const data = await res.json().catch(() => ({}));
			message = data?.message || 'Thanks — check your inbox shortly.';
			email = '';
		} catch {
			message = 'Thanks — check your inbox shortly.';
		} finally {
			submitting = false;
		}
	}
</script>

<section class="hours-info">
	<!-- Desktop Layout (UNCHANGED) -->
	<div class="content-container">
		<div class="info-block left">
			<div>
				<h2>TAKUMEN NEW AMERICAN IZAKAYA</h2>
				<p>
					<a
						href="https://www.google.com/maps/place/Takumen/@40.742736,-73.9546542,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259236eb4f887:0xc82f789416277fed!8m2!3d40.742736!4d-73.9546542!16s%2Fg%2F11cn2wrhh5?entry=tts&g_ep=EgoyMDI1MDgxMC4wIPu8ASoASAFQAw%3D%3D&skid=66e0bba2-8382-4e96-9a4a-c1dffaec4053"
						target="_blank"
						rel="noopener noreferrer"
					>
						5-50 50TH AVENUE,<br />
						LONG ISLAND CITY, NEW YORK, 11101<br />
					</a>
					<a href="tel:7183617973" class="phone-link"> 718.361.7973 </a>
				</p>
			</div>
			<div>
				<h3>HOURS</h3>
				<p>
					<strong> OPEN EVERYDAY</strong><br />
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
				<input
					type="email"
					placeholder="Email Address"
					class="newsletter-input"
					bind:value={email}
					required
				/>
				<button class="subscribe-btn" on:click|preventDefault={subscribe} disabled={submitting}>
					{submitting ? 'SUBSCRIBING…' : 'SUBSCRIBE'}
				</button>
				{#if message}<p class="newsletter-msg">{message}</p>{/if}
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
				<a
					href="https://www.google.com/maps/place/Takumen/@40.742736,-73.9546542,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259236eb4f887:0xc82f789416277fed!8m2!3d40.742736!4d-73.9546542!16s%2Fg%2F11cn2wrhh5?entry=tts&g_ep=EgoyMDI1MDgxMC4wIPu8ASoASAFQAw%3D%3D&skid=66e0bba2-8382-4e96-9a4a-c1dffaec4053"
					target="_blank"
					rel="noopener noreferrer"
				>
					5-50 50TH AVENUE,<br />
					LONG ISLAND CITY, NEW YORK, 11101<br />
				</a>
				<a href="tel:7183617973" class="phone-link"> 718.361.7973 </a>
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

			<h3>JOIN OUR NEWSLETTER</h3>
			<p>SIGN UP WITH YOUR EMAIL FOR UPDATES</p>
			<input
				type="email"
				placeholder="Email Address"
				class="newsletter-input"
				bind:value={email}
				required
			/>
			<button class="subscribe-btn" on:click|preventDefault={subscribe} disabled={submitting}>
				{submitting ? 'SUBSCRIBING…' : 'SUBSCRIBE'}
			</button>
			{#if message}<p class="newsletter-msg">{message}</p>{/if}

			<!-- <input type="email" placeholder="Email Address" class="newsletter-input" />
			<button class="subscribe-btn">SUBSCRIBE</button> -->

			<h3>FIND US AT</h3>
			<a href="https://instagram.com/takumenlic" target="_blank">INSTAGRAM</a>
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
		padding-top: 15vh;
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
		margin: 0.25rem 0;
	}

	p {
		font-size: 1.375rem;
		line-height: 1.5;
		margin: 0.5rem 0;
	}

	a {
		text-decoration: underline;
		color: inherit;
		font-weight: bold;
	}

	a:hover {
		color: #87b28b !important;
	}
	p a:hover {
		color: #87b28b !important;
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
		width: 55%;
		text-align: left;
	}
	.subscribe-btn:hover {
		color: #fed314;
	}

	/* === MOBILE STYLES ONLY BELOW === */
	.mobile-hours-info {
		display: none;
	}

	.info-block.left a {
		color: black;
		text-decoration: underline;
		font-weight: bold;
	}

	@media (max-width: 768px) {
		.hours-info {
			overflow: visible; /* allow the page to scroll */
			height: auto;
			padding-top: 10vh;
		}
		.content-container {
			display: none;
		}

		.mobile-hours-info {
			display: flex;
			flex-direction: column;
			width: 100%;
			/* height: 85dvh; */
			overflow: hidden;
		}

		.mobile-hours-image {
			width: 100%;
			flex-shrink: 0;
		}

		.mobile-hours-image img {
			width: 100%;
			height: auto;
			object-fit: cover;
			display: block;
			max-height: 42.5vh;
		}

		.mobile-hours-text {
			flex: 1;
			overflow-y: auto;
			background-color: #fed314;
			color: black;
			padding: 1rem 1rem;
			text-align: left;
		}

		.mobile-hours-text h2,
		.mobile-hours-text h3 {
			font-family: futura-pt-condensed, sans-serif;
			font-size: 1.75rem;
			font-weight: normal;
			margin: 1.5rem 0 0rem;
		}

		.mobile-hours-text p {
			font-size: 1.25rem;
			line-height: 1.5;
			margin: 0rem 0;
		}

		.mobile-hours-text a {
			color: black;
			text-decoration: underline;
			font-weight: bold;
		}

		.mobile-hours-text .newsletter-input {
			width: 96%;
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

	@media (orientation: landscape) and (max-height: 500px) {
		.hours-info {
			padding-top: 13vh;
		}
		.mobile-hours-image img {
			max-height: 55vh;
		}
	}
</style>
