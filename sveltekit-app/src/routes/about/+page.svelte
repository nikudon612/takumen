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
		height: 80vh;
		background-color: #87b28b;
	}

	.left-image {
		width: 45vw;
		position: sticky;
		top: 0;
		height: 100vh;
		flex-shrink: 0;
	}

	.left-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.right-text {
		width: 55vw;
		padding: 3rem 6rem 3rem 6rem;
		display: flex;
		flex-direction: column;
		color: #333;
		height: 100%;
		background-color: #87b28b;
	}

	.text-scroll h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		font-family: futura, sans-serif;
		font-weight: 500;
	}

	.text-scroll {
		max-height: calc(100vh - 4rem); /* subtract padding if needed */
		overflow-y: auto;
		scroll-behavior: smooth;
		scrollbar-width: none;
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
