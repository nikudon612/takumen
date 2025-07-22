<!-- src/routes/+error.svelte -->
<script>
	export let error;
	export let status;
	import errorImage from '../lib/assets/mascot1.png'; // Adjust the path as necessary
</script>

<section class="error-section">
	<div>
		<img src={errorImage} alt="Error Image" />
		<p class="error-message">{error?.message || '404 Page Not Found'}</p>
		<a href="/">HEAD BACK HOME!</a>
	</div>
</section>

<style>
	.error-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #fed314;
		text-align: center;
	}

	img {
		max-width: 200px;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
		color: #343a40;
		margin-bottom: 1rem;
	}

	a {
		color: #007bff;
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		text-decoration: underline;
	}

	.error-message {
		font-size: 2rem;
		color: #343a40;
		margin-bottom: 1rem;
	}
</style>
