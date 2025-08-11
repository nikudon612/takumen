<script lang="ts">
	import { page } from '$app/stores';
	import hamburger from '../../lib/assets/hamburger.svg';
	import closebutton from '../../lib/assets/closebutton.svg';

	export let data;
	const { navigation, footer } = data;

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
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

	<div class="about_content_wrapper">
		<slot />
	</div>
</div>

<style>
	.about_layout {
		display: flex;
		flex-direction: column;
		min-height: 100dvh; /* instead of fixed 100vh */
		width: 100vw;
		overflow-x: hidden;
	}

	.about_content_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: visible; /* let content expand naturally */
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
		width: 40%;
		height: auto;
	}

	/* Mobile Styles */
	.hamburger-icon {
		display: none;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	/* make the logo’s click area = image box only */
	.logo-link {
		display: inline-block; /* override any global a { display:block } */
		line-height: 0; /* kill extra inline click area */
		padding: 0;
		margin: 0;
		flex: 0 0 auto; /* don’t stretch in the flex header */
	}

	.logo-link .header_logo {
		display: block; /* removes inline-image gaps */
		height: auto;
	}

	/* safety: don’t let header links become full-width blocks */
	.header_links .header_link {
		display: inline-block;
		padding: 0;
		margin: 0;
		line-height: 1;
	}

	@media (max-width: 768px) {
		.header {
			justify-content: center;
		}

		/* keep the logo flush‐left inside that centered header */
		.header_content {
			justify-content: flex-start;
		}
		.about_layout {
			width: 100vw;
			height: 100dvh; /* fill the viewport */
		}
		.header_content {
			padding: 1rem;
		}

		.logo-link .header_logo {
			width: clamp(120px, 40vw, 280px);
			height: auto;
		}
/* 
		.header_logo {
			width: 40%;
			height: auto;
			margin: 0 auto;
		} */
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
		}
	}
</style>
