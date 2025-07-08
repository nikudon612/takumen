<script lang="ts">
	import aboutImage from '../../lib/assets/takumen-lic.png';
</script>

<div class="about">
	<div class="about_image">
		<img src={aboutImage} alt="Takumen Outdoor Sign in Evening" class="about_img" />
	</div>
	<div class="about_text">
		<h1>ABOUT</h1>
		<div class="about_text_content">
			<p>
				Takumen is an Izakaya-style restaurant located in Long Island City. Conceived by a group of
				Japanese friends who forged their bonds in New York, their venture began as a Ramen project,
				but gradually developed into a family-friendly eatery that combines elements of Izakaya, a
				noodle shop, and neighborhood cafe.
			</p>

			<p>
				Takumen is Kiyo Shinoki's interpretation of Izakaya culture. The director of the much
				acclaimed speakeasy Bohemian explains the logic behind it:
			</p>

			<p>
				“Historically, Izakaya was where people gathered and bonded over drinks. It was often a
				crossroad of cultures. The food menu was designed around the beverage program.”
			</p>

			<p>
				These interpretations led to Takumen's food and drink menu: eclectically mixed and casual
				food items, wines from California, Sake and Shochu from Japan, and craft beers from local
				Rockaway Brewery. Kiyo respected the original idea by keeping the noodle items on the menu.
				He adds:
			</p>

			<p>“We Japanese have a habit of finishing our Izakaya dinner with a noodle dish.”</p>
			<p>
				While Izakaya culture is the soul of Takumen, it does wear more than one hat. In the front
				sits a serious coffee bar with a skilled barista who uses Parlor Coffee beans. It is also a
				lunch joint where local patrons show up for rice bowls and noodle fare. The grocery shelf
				filled with condiments and ingredients used in the kitchen symbolizes Takumen's commitment
				to transparency.
			</p>

			<p>
				The mostly hand-built space was designed by Sachiko Kamiya of Monroe Garden, who also is
				Kiyo's partner. Inspired by their travels in California, its clean, bright, and breathy
				design will change your perspectives on Izakaya.
			</p>

			<p>
				Hoping to function as a community hub, Takumen is committed to rotating local artists on the
				wall every few months. It is an Izakaya like no other.
			</p>

			<p><em>Text by Yumiko Sakuma</em></p>
		</div>
	</div>
</div>

<style>
	.about {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #87b28b; /* Light gray background */
	}
	.about_image {
		width: 45vw;
		height: 100%;
		display: flex;
	}
	.about_img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the container */
	}

	.about_text {
		width: 55vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 2rem;
		color: #333; /* Dark text color */
		overflow-y: auto;
	}

	.about_text h1 {
		font-size: 3rem;
	}

	.about_text_content {
		max-height: 80vh; /* Limit the height of the text content */
		overflow-y: auto; /* Enable scrolling for long text */
		scroll-behavior: smooth;
	}
	.about_text_content p {
		font-size: 2rem;
		line-height: 1.6;
	}
</style>
