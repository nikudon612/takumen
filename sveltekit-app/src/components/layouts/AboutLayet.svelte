<script lang="ts">
	import { page } from '$app/stores';
	import hamburger from '../../lib/assets/hamburger.svg';
	import closebutton from '../../lib/assets/closebutton.svg';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;
	const { navigation, footer } = data;

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// (optional) lock page scroll while menu is open
	onMount(() => {
		const original = document.body.style.overflow;
		return () => (document.body.style.overflow = original);
	});
	$: {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
		}
	}
</script>

<div class="about_layout">
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
		{/if}
	</header>

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

			<!-- wrapper fades, inner flies (avoid double transition on one node) -->
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

	<div class="about_content_wrapper">
		<slot />
	</div>
</div>

<style>
	.about_layout {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		width: 100vw;
		overflow-x: hidden;
	}

	.about_content_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: visible;
	}

	/* ====== HEADER matches DefaultLayout ====== */
	.header {
		height: 15dvh;
		background-color: white;
		display: flex;
		align-items: center;
		z-index: 10;
	}

	.header_content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 3rem 0 3rem; /* same as DefaultLayout */
		position: relative;
		max-width: 100vw; /* keep inside viewport */
	}

	.header_links {
		display: flex;
		flex-direction: row;
		gap: 2rem; /* desktop spacing like DefaultLayout */
		padding-top: 2rem;
	}

	.header_link {
		text-decoration: none;
		color: #333;
		font-family: futura, sans-serif;
	}
	.header_link:hover,
	.header_link.active {
		color: #87b28b;
	}

	.header_logo {
		width: 40%;
		height: auto;
	}

	/* Logo link box == image box */
	.logo-link {
		display: inline-block;
		line-height: 0;
		padding: 0;
		margin: 0;
		flex: 0 0 auto;
	}
	.logo-link .header_logo {
		display: block;
		height: auto;
	}

	/* ====== Same tablet tightening as DefaultLayout ====== */
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

	/* ====== Mobile rules identical to DefaultLayout ====== */
	.hamburger-icon {
		display: none;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.header {
			justify-content: center;
		}
		.header_content {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start; /* same */
			padding: 0 1rem; /* same */
			max-width: 100vw;
		}

		.about_layout {
			width: 100%;
			height: 100dvh;
		}

		.logo-link .header_logo {
			width: clamp(120px, 40vw, 200px);
			height: auto;
			margin: 0 auto;
		}

		.hamburger-icon {
			display: block;
			position: absolute;
			right: 1.5rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 20;
		}

		.header_links {
			display: none;
		}

		.mobile-menu-overlay {
			position: fixed;
			inset: 0;
			width: 100vw;
			height: 100vh;
			background-color: #87b28b;
			z-index: 100;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			will-change: opacity, transform;
		}

		.mobile-menu-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
			will-change: opacity, transform;
		}
		.mobile-menu-content-wrapper {
			will-change: opacity, transform;
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
		.mobile-nav-link.active {
			text-decoration: underline;
			text-underline-offset: 4px;
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
			will-change: opacity, transform;
		}
	}
</style>
