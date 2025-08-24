<script lang="ts">
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../LiveMode.svelte';
	import hamburger from '../../lib/assets/hamburger.svg';
	import closebutton from '../../lib/assets/closebutton.svg';
	import insta from '../../lib/assets/insta.svg';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;

	const { navigation, footer } = data;

	// console.log('Layout data:', data);
	// console.log('Navigation:', navigation);
	// console.log('Footer:', footer);

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

<svelte:head>
	<title>Takumen LIC</title>
</svelte:head>

<div class="container">
	<header class="header">
		{#if navigation}
			<div class="header_content">
				<a href="/" class="logo-link">
					<img src={navigation.logo.asset.url} alt="Takumen Logo" class="header_logo" />
				</a>
				<img src={hamburger} alt="Menu" class="hamburger-icon" on:click={toggleMobileMenu} />

				<div class="header_links">
					{#each navigation.links as link}
						<a
							class="header_link {link.href === $page.url.pathname ? 'active' : ''}"
							href={link.href}
							target={link.target}
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		{:else}
			<p>loading...</p>
		{/if}
	</header>
	<main>
		<slot />
	</main>
	{#if mobileMenuOpen}
		<div
			class="mobile-menu-overlay"
			transition:fade={{ duration: 220, easing: (t) => t }}
			on:click={closeMobileMenu}
		>
			<img
				src={closebutton}
				alt="Close Menu"
				class="mobile-menu-close"
				on:click|stopPropagation={closeMobileMenu}
				transition:fade={{ duration: 180, delay: 80 }}
			/>

			<div class="mobile-menu-content" on:click|stopPropagation>
				<div class="mobile-menu-content-wrapper" transition:fade={{ duration: 220, delay: 60 }}>
					<div
						class="mobile-menu-content"
						on:click|stopPropagation
						transition:fly={{ y: 8, duration: 220 }}
					>
						{#each navigation.links as link}
							<a
								class="mobile-nav-link {link.href === $page.url.pathname ? 'active' : ''}"
								href={link.href}
								on:click={closeMobileMenu}
								target={link.target}
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<footer class="footer">
		{#if footer}
			<div class="footer_content">
				<div class="footer_info">
					<!-- <p class="footer_label">{footer.locationLabel}</p> -->
					<p class="footer_address">
						<a
							href="https://maps.app.goo.gl/ZSS7GLnRSzZuPBGi8"
							class="footer_link"
							target="_blank"
							rel="noopener noreferrer">{footer.address}</a
						>
					</p>
				</div>
				<div class="socials">
					<a
						href="https://www.instagram.com/takumenlic/"
						target="_blank"
						rel="noopener noreferrer"
						class="footer_a"
					>
						<img src={insta} alt="Instagram" />
					</a>
				</div>
			</div>
		{:else}
			<p>loading...</p>
		{/if}
	</footer>
</div>

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}

<style>
	.container {
		margin: 0 auto;
		background: transparent;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100dvh;
		overflow: hidden;
	}

	/* Ensure the logo link is only the size of the image */
	.logo-link {
		display: inline-block; /* override any global a { display:block } */
		line-height: 0; /* removes stray inline line-height click area */
		padding: 0;
		margin: 0;
	}

	/* Make the image define the box; no extra clickable padding */
	.logo-link .header_logo {
		display: block; /* removes inline gaps */
		width: clamp(120px, 40vw, 175px); /* keep your 40% intent but with sane bounds */
		height: auto;
	}

	main {
		/* margin-top: 45px; */
	}

	.header {
		position: absolute;
		top: 0;
		display: flex;
		z-index: 10;
		width: 100%;
		background: transparent;
		height: 15vh;
		max-width: 100vw;
	}

	.header_content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 3rem 0 3rem;
		background-color: white;
		max-width: 100vw;
	}

	.header_links {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		padding-top: 2rem;
	}

	.header_link {
		text-decoration: none;
		color: #333;
		font-family: futura, sans-serif;
	}

	.header_link:hover,
	.header_link.active {
		color: #87b28b; /* bright yellow to match the footer bg */
		/* font-weight: bold; */
	}

	.header_logo {
		width: 40%;
		height: auto;
	}

	.hamburger-icon {
		display: none;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	.footer_info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.5rem;
	}

	.footer_content {
		display: flex;
		flex-direction: row;
		align-items: center; /* center items vertically */
		justify-content: flex-start;
		gap: 1rem;
	}

	.footer_a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer_link {
		color: #333;
		text-decoration: none;
	}

	.footer_label {
		padding: 0;
		margin: 0;
	}

	.footer_address {
		padding: 0;
		margin: 0;
	}
	.socials {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.footer {
		position: fixed; /* escape the container's stacking/overflow */
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99; /* above slideshow */
		padding: 2rem 3rem;
		max-width: 100vw;
	}

	@media (max-width: 924px) {
		.header_links {
			gap: 1rem;
		}
	}

	@media (max-width: 800px) {
		.header_links {
			gap: 0.75rem;
		}
	}

	@media (max-width: 768px) {
		.hamburger-icon {
			display: block;
			position: absolute;
			right: 1.5rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 20;
		}
		.container {
			width: 100%;
			height: 100dvh;
		}

		main {
			margin-top: 0;
		}

		.header {
			position: relative;
			height: 15vh;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			max-width: 100vw;
		}

		.header_content {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 0;
			/* width: 100%; */
			padding: 0 1rem;
			max-width: 100vw;
		}

		.header_logo {
			width: 40%;
			height: auto;
			margin: 0 auto;
		}

		.logo-link .header_logo {
			display: block; /* removes inline gaps */
			width: clamp(105px, 40vw, 100px); /* keep your 40% intent but with sane bounds */
			height: auto;
		}

		.header_links {
			display: none; /* Or set to column and show below logo if needed */
		}
		.mobile-menu-overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: #87b28b; /* muted green */
			z-index: 100;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.mobile-menu-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
		}

		.mobile-nav-link {
			font-size: 1.25rem;
			color: white;
			text-decoration: none;
			font-family: futura, sans-serif;
			text-transform: capitalize;
		}

		.mobile-nav-link:hover {
			opacity: 0.8;
		}

		.mobile-menu-close {
			position: absolute;
			top: 3rem;
			right: 1.5rem;
			background: none;
			border: none;
			color: white;
			font-size: 2rem;
			cursor: pointer;
			z-index: 101;
		}
	}

	@media (max-width: 575px) {
		.container {
			/* max-width: var(--max-width-1); */
			/* padding: 0 var(--space-4); */
		}

		main {
			margin-top: unset;
		}

		.header {
			/* position: unset;
			border-bottom: none;

			background: unset; */
		}

		.header .header__title {
		}

		.footer {
			position: fixed; /* escape the container's stacking/overflow */
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 99; /* above slideshow */
			padding: 1rem 1rem !important;
		}
		.footer_content {
			padding: 0rem 0rem;
			display: flex;
		}
		.footer_link {
			font-size: 0.75rem;
		}

		.socials a {
			display: flex;
		}
	}

	.preview-toggle {
		backdrop-filter: blur(12px);
		border-radius: 0.25rem;
		bottom: 1rem;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		color: #1f2937;
		display: block;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		position: fixed;
		right: 1rem;
		text-align: center;
		text-decoration: none;
		z-index: 50;
	}

	.preview-toggle:hover {
		background-color: #ef4444;
		color: #ffffff;
	}

	.preview-toggle span:first-child {
		display: block;
	}
	.preview-toggle:hover span:first-child {
		display: none;
	}

	.preview-toggle span:last-child {
		display: none;
	}
	.preview-toggle:hover span:last-child {
		display: block;
	}
</style>
