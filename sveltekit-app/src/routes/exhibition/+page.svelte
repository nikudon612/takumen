<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	export let data;
	const exhibition = data.exhibition;

	// Image
	$: imageUrl = exhibition.heroImage?.url;

	// Format date helper (you already have this)
	function formatDate(dateStr: string | null) {
		if (!dateStr) return '';
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	// Computed:
	$: start = formatDate(exhibition.startDate);
	$: end = exhibition.endDate ? formatDate(exhibition.endDate) : null;

	// Final display string:
	$: dateRange = end ? `${start} - ${end}` : start;

	// Instagram formatting
	function getInstagramHref(value?: string | null) {
		if (!value) return null;
		if (value.startsWith('http')) return value;
		return `https://www.instagram.com/${value.replace('@', '')}`;
	}
	function getInstagramLabel(value?: string | null) {
		if (!value) return null;
		return value.startsWith('@') ? value : `@${value}`;
	}

	$: instagramHref = getInstagramHref(exhibition.instagram);
	$: instagramLabel = getInstagramLabel(exhibition.instagram);

	// Website (may be null)
	$: websiteHref = exhibition.website;

	// Email
	$: email = exhibition.contactEmail || 'info@takumenlic.com';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<section class="artwork-section">
	<div class="artwork-container">
		<!-- Left: Image -->
		<div class="artwork-image">
			{#if imageUrl}
				<img src={imageUrl} alt={exhibition.heroImage?.alt || 'Exhibition flyer'} />
			{/if}
		</div>

		<!-- Right: Text Content -->
		<div class="artwork-details">
			<h3>ART WORK</h3>

			<h2>{exhibition.title}</h2>

			<p>
				<strong>
					By
					{#if instagramHref}
						<a href={instagramHref} target="_blank" rel="noopener noreferrer">
							{exhibition.artistName}
						</a>
					{:else}
						{exhibition.artistName}
					{/if}
				</strong>
			</p>

			{#if dateRange}
				<p>Exhibition dates: {dateRange}</p>
			{/if}

			<!-- Portable Text description -->
			{#if exhibition.description}
				<div>
					<PortableText value={exhibition.description} />
				</div>
			{/if}

			<p>
				{#if instagramHref}
					instagram :
					<a href={instagramHref} target="_blank" rel="noopener noreferrer">
						{instagramLabel}
					</a>
					<br />
				{/if}

				{#if websiteHref}
					website :
					<a href={websiteHref} target="_blank" rel="noopener noreferrer">
						{websiteHref.replace(/^https?:\/\//, '')}
					</a>
				{/if}
			</p>

			<p class="divider">**************************************************</p>

			<p>
				For inquiries regarding artworks, please contact us,<br />
				<a href={`mailto:${email}`} class="highlight">{email.toUpperCase()}</a>
			</p>
		</div>
	</div>

	<!-- MOBILE VERSION -->
	<div class="artwork-mobile">
		<h3>ART WORK</h3>

		<div class="artwork-mobile-image">
			{#if imageUrl}
				<img src={imageUrl} alt={exhibition.heroImage?.alt || 'Exhibition flyer'} />
			{/if}
		</div>

		<div class="artwork-mobile-details">
			<h2>{exhibition.title}</h2>

			<p>
				<strong>
					By
					{#if instagramHref}
						<a href={instagramHref} target="_blank" rel="noopener noreferrer">
							{exhibition.artistName}
						</a>
					{:else}
						{exhibition.artistName}
					{/if}
				</strong>
			</p>

			{#if dateRange}
				<p>Exhibition dates: {dateRange}</p>
			{/if}

			{#if exhibition.description}
				<div>
					<PortableText value={exhibition.description} />
				</div>
			{/if}

			<p>
				{#if instagramHref}
					instagram :
					<a href={instagramHref} target="_blank" rel="noopener noreferrer">
						{instagramLabel}
					</a>
					<br />
				{/if}

				{#if websiteHref}
					website :
					<a href={websiteHref} target="_blank" rel="noopener noreferrer">
						{websiteHref.replace(/^https?:\/\//, '')}
					</a>
				{/if}
			</p>

			<p>
				For inquiries regarding artworks, please contact us,<br />
				<a href={`mailto:${email}`} class="highlight">{email.toUpperCase()}</a>
			</p>
		</div>
	</div>
</section>

<style>
	a:hover {
		text-decoration: underline !important;
		color: #fed314 !important;
	}

	.artwork-section {
		background-color: #83a77d;
		height: 100svh; /* dynamic viewport for consistency */
		box-sizing: border-box;
		overflow: hidden;
		padding-top: 15vh;
	}

	.artwork-container {
		display: flex;
		height: calc(100svh - 15vh); /* ensure scrollable area fits viewport */
		width: 100%;
		gap: 2rem;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		overflow: hidden;
		padding: 3rem;
		min-height: 0; /* allow children to shrink */
	}

	.artwork-image {
		width: 50vw;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
		min-height: 0; /* important for flex scroll fix */
	}

	.artwork-image img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		display: block;
	}

	/* --- Scrollable Details Column (Scrollbar Hidden) --- */
	.artwork-details {
		width: 50vw;
		height: 100%;
		max-height: 100%;
		overflow-y: auto; /* scrolls independently */
		min-height: 0;
		scrollbar-gutter: stable;
		padding-right: 0.75rem;
		font-family: 'futura', sans-serif;
		color: #333;
		overscroll-behavior: contain;
		box-sizing: border-box;
		scrollbar-width: none; /* Firefox - hide scrollbar */
		-ms-overflow-style: none; /* IE/Edge - hide scrollbar */
	}

	/* Hide scrollbar for Chrome, Safari, and Opera */
	.artwork-details::-webkit-scrollbar {
		display: none;
	}

	.artwork-details h3 {
		font-weight: bold;
		font-size: 2.125rem;
		color: #ffffff;
	}

	.artwork-details h2 {
		font-size: 1.1rem;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.artwork-details p {
		font-size: 1rem;
		line-height: 1.6;
		margin: 0.5rem 0;
		font-family: avenir-next-lt-pro-condensed, sans-serif;
	}

	.artwork-details p strong a {
		font-weight: bold;
	}

	.artwork-details a {
		color: #333;
		text-decoration: underline;
		font-weight: 500;
	}

	.artwork-details .highlight {
		font-weight: bold;
		text-transform: uppercase;
	}

	.divider {
		overflow-wrap: break-word;
		word-break: break-all;
		font-family: monospace;
		margin: 1rem 0;
		text-align: left;
	}

	/* Mobile layout hidden by default */
	.artwork-mobile {
		display: none;
	}

	/* --- Responsive Tweaks for Smaller Desktops --- */
	@media (min-width: 769px) and (max-width: 1100px) {
		.artwork-container {
			padding: 1.5rem 2rem;
			gap: 1.25rem;
		}

		.artwork-details h3 {
			font-size: 1.75rem;
		}

		.artwork-details h2 {
			font-size: 1rem;
		}

		.artwork-details p {
			font-size: 0.95rem;
		}
	}

	/* --- Mobile Layout --- */
	@media (max-width: 768px) {
		.artwork-section {
			padding: 0rem 1rem 1.75rem 1rem;
			height: auto !important;
			overflow: visible;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 10vh;
		}

		.artwork-container {
			display: none !important;
		}

		.artwork-mobile {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #83a77d;
			color: #333;
			font-family: avenir-next-lt-pro-condensed, sans-serif;
		}

		.artwork-mobile h3 {
			font-size: 1.75rem;
			font-weight: bold;
			color: white;
			margin-bottom: 1rem;
			text-align: center;
		}

		.artwork-mobile-image img {
			width: 100%;
			max-width: 100%;
			height: auto;
			object-fit: contain;
			margin-bottom: 1rem;
			display: block;
		}

		.artwork-mobile-details {
			text-align: left;
			font-size: 0.95rem;
			line-height: 1.6;
			width: 100%;
		}

		.artwork-mobile-details h2 {
			font-size: 1.1rem;
			font-weight: 600;
			margin-bottom: 0.75rem;
		}

		.artwork-mobile-details a {
			color: #333;
			text-decoration: underline;
			font-weight: 500;
		}

		.artwork-mobile-details .divider {
			font-size: 0.8rem;
			letter-spacing: 1px;
			margin: 1rem 0;
		}

		.artwork-mobile-details .highlight {
			font-weight: bold;
			text-transform: uppercase;
		}
	}
</style>
