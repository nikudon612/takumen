<script lang="ts">
	import aboutImage from '../../lib/assets/takumen-lic.png';
</script>

<section class="about_section">
	<div class="left-image">
		<img src={aboutImage} alt="Takumen Outdoor Sign in Evening" />
	</div>

	<div class="right-text">
		<div class="text-scroll">
			<h1>ABOUT</h1>
			<p>
				Takumen is an Izakaya-style restaurant located in Long Island City. Conceived by a group of
				Japanese friends who forged their bonds in New York, their venture began as a Ramen project,
				but gradually developed into a family-friendly eatery that combines elements of Izakaya, a
				ramen shop and neighborhood cafe.
			</p>

			<p>
				Takumen is Kiyo Shinoki's interpretation of Izakaya culture. “Historically, Izakaya was
				where people gathered and bonded over drinks. It was often a crossroad of cultures. The food
				menu was designed around the beverage program." These interpretations led to Takumen's food
				and drink menu: a wide variety of casual food items, natural wine, sake and shochu from
				Japan, and craft beers from local breweries. Kiyo respected the original idea by keeping the
				ramen items on the menu. He adds, "We Japanese have a habit of finishing our Izakaya dinner
				with ramen." It is also a lunch joint where locals in the neighborhood show up for rice
				bowls and ramen.
			</p>

			<p>
				While Izakaya culture is the soul of Takumen, it does wear more than one hat. In front sits
				a shop in shop; Taku Parlor that serves Japanese Craft Soft Serve and Pudding. Along with a
				coffee bar with a skilled barista who uses Parlor Coffee beans making a variety of espresso
				drinks.
			</p>

			<p>
				The mostly hand built space was designed by Sachiko Kamiya of Monroe Garden, who also is
				Kiyo's partner. Inspired by their travels in California, its clean, bright, and breathy
				design will change your perspectives on Izakaya. Hoping to function as a community hub,
				Takumen is committed to rotating local artists on the wall every few months. It is an
				Izakaya like no other.
			</p>
		</div>
	</div>
</section>

<style>
	.about_section {
		display: flex;
		width: 100%;
		height: 85vh;
		overflow: hidden; /* lock the whole section to 85vh */
		background-color: #87b28b;
	}

	.left-image {
		flex: 0 0 45vw; /* always 45% of viewport width */
		position: sticky;
		top: 0;
		height: 100%; /* matches the 85vh parent */
	}

	.left-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.right-text {
		flex: 0 0 55vw; /* your fixed 55vw */
		box-sizing: border-box; /* ← makes padding count inside that 55vw */
		padding: 0 6rem;
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		color: #333;
	}

	.text-scroll {
		flex: 1;
		overflow-y: auto;
		overscroll-behavior: contain;
		scrollbar-width: none;

		/* wrap any long/forced text */
		white-space: normal;
		overflow-wrap: break-word;
		word-wrap: break-word;
	}

	.text-scroll::-webkit-scrollbar {
		display: none;
	}

	.text-scroll p {
		font-size: 1.25rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		letter-spacing: 0.04em;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}
</style>
