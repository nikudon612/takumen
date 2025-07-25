<script lang="ts">
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../LiveMode.svelte';
	import hamburger from '../../lib/assets/hamburger.svg';
	import closebutton from '../../lib/assets/closebutton.svg';

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
				<a href="/">
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
		<div class="mobile-menu-overlay">
			<img
				src={closebutton}
				alt="Close Menu"
				class="mobile-menu-close"
				on:click={closeMobileMenu}
			/>

			<div class="mobile-menu-content">
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
	{/if}

	<!-- <footer class="footer">
		{#if footer}
			<div class="footer_content">
				<p class="footer_label">{footer.locationLabel}</p>
				<p class="footer_address">{footer.address}</p>
			</div>
			<div class="hours_content"></div>
		{:else}
			<p>loading...</p>
		{/if}
	</footer> -->
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

	main {
		margin-top: 45px;
	}

	.header {
		position: absolute;
		top: 0;
		display: flex;
		z-index: 10;
		width: 100%;
		background: transparent;
		height: 15vh;
	}

	.header_content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 3rem 0 3rem;
		background-color: white;
	}

	.header .header__title {
		font-weight: 800;
		font-size: var(--font-size-3);
		line-height: var(--line-height-1);
		padding-left: var(--space-2);
		margin: var(--space-3) 0;
		text-decoration: none;
		color: var(--black);
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

	.footer {
		position: absolute;
		bottom: 0;
		z-index: 10;
		display: flex;
		justify-content: center;
		background-color: #ffe14d;
		opacity: 0.7;
		width: 100%;
		height: 10vh;
	}

	.footer_content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: var(--space-1);
		width: 50%;
		padding: 0 3rem;
	}

	.footer .footer__text {
		font-size: var(--font-size-1);
		line-height: var(--line-height-1);
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.footer_label {
		margin: 0;
		font-weight: 800;
	}

	.footer_address {
		margin: 0;
	}
	.hours_content {
		display: flex;
		flex-direction: column;
		width: 50%;
		justify-content: center;
		padding: var(--space-3) var(--space-4);
	}

	.hours_info {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 1.5rem;
	}

	.hamburger-icon {
		display: none;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
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
		}

		.header_content {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 0;
			width: 100%;
			padding: 0 1rem;
		}

		.header_logo {
			width: 40%;
			height: auto;
			margin: 0 auto;
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

	@media (min-width: 575px) {
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
			/* margin: var(--space-3) 0; */
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
