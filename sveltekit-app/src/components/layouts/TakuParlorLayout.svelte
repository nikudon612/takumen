<script lang="ts">
	import { page } from '$app/stores';
	import TakuParlorLogo from '$lib/assets/tplogo.png';
	import hamburger from '$lib/assets/hamburger.svg';
	import closebutton from '$lib/assets/closebutton.svg';
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

	// (optional) lock page scroll when menu is open
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
					<img src={TakuParlorLogo} alt="Taku Parlor Logo" class="header_logo" />
				</a>

				<img src={hamburger} alt="Menu" class="hamburger-icon" on:click={toggleMobileMenu} />

				<div class="header_links">
					{#each navigation.links as link (link.href)}
						{#if link.href !== '/takuparlor'}
							<a
								class="header_link {link.href === $page.url.pathname ? 'active' : ''}"
								href={link.href}
								target={link.target}
							>
								{link.label}
							</a>
						{/if}
					{/each}
					<a class="header_link" href="/">Takumen</a>
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

			<!-- wrapper fades, inner flies (avoid double transition on same node) -->
			<div class="mobile-menu-content" on:click|stopPropagation>
				<div class="mobile-menu-content-wrapper" transition:fade={{ duration: 220, delay: 60 }}>
					<div
						class="mobile-menu-content"
						on:click|stopPropagation
						transition:fly={{ y: 8, duration: 220 }}
					>
						{#each navigation.links as link (link.href)}
							{#if link.href !== '/takuparlor'}
								<a
									class="mobile-nav-link {link.href === $page.url.pathname ? 'active' : ''}"
									href={link.href}
									on:click={closeMobileMenu}
									target={link.target}
								>
									{link.label}
								</a>
							{/if}
						{/each}
						<a class="mobile-nav-link" href="/" on:click={closeMobileMenu}>Takumen</a>
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
		width: 100vw;
		min-height: 100dvh;
		overflow-x: hidden;
	}

	/* logo sizing is image-box only */
	.logo-link {
		display: inline-block;
		line-height: 0;
		padding: 0;
		margin: 0;
	}
	.logo-link img {
		display: block;
		height: auto;
		width: auto;
	}
	.header_content > a.logo-link .header_logo {
		display: block;
		height: auto;
		width: clamp(100px, 40vw, 100px) !important; /* keep your 40% intent but with sane bounds */
	}

	.header {
		height: 15dvh;
		background-color: white;
		display: flex;
		align-items: center;
		z-index: 10;
	}

	.header_content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 3rem;
		position: relative;
	}

	.header_links {
		display: flex;
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
		color: #87b28b;
	}

	.header_logo {
		width: clamp(120px, 40vw, 175px); /* keep your 40% intent but with sane bounds */
		height: auto;
	} /* desktop */

	.about_content_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: visible;
	}

	.hamburger-icon {
		display: none;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	/* ----- Mobile ----- */
	@media (max-width: 835px) {
		.header {
			height: 10dvh;
			background-color: white;
			display: flex;
			align-items: center;
			z-index: 10;
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

		.header_content > a.logo-link .header_logo {
			display: block;
			height: auto;
			width: clamp(70px, 40vw, 70px) !important; /* keep your 40% intent but with sane bounds */
		}

		.mobile-menu-overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: #87b28b;
			z-index: 100;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			/* helps the fade look crisp */
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

		/* wrapper used solely to host the fade (so inner can fly) */
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

		.header_logo {
			width: 10%;
			height: auto;
		} /* mobile */
		.header_content {
			padding-left: 1rem;
		}
	}

	@media (orientation: landscape) and (max-width: 835px) {
		/* header height = 15% of the *safe* viewport height */
		header.header {
			height: 15svh;
			min-height: 15svh; /* guard against other rules */
		}

		/* landscape logo sizing (note: underscore selector) */
		.logo-link .header_logo,
		.header_content > a.logo-link .header_logo {
			display: block;
			height: auto;
			width: clamp(60px, 12svw, 60px) !important; /* keep your 40% intent but with sane bounds */
		}
	}
</style>
