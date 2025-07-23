<script lang="ts">
	import { page } from '$app/stores';
	import TakuParlorLogo from '$lib/assets/tplogo.png';
	import hamburger from '$lib/assets/hamburger.svg';
	import closebutton from '$lib/assets/closebutton.svg';

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
				<a href="/">
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
		<div class="mobile-menu-overlay">
			<img
				src={closebutton}
				alt="Close Menu"
				class="mobile-menu-close"
				on:click={closeMobileMenu}
			/>
			<div class="mobile-menu-content">
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
		min-height: 100vh;
		overflow-x: hidden;
	}

	.header {
		height: 15vh;
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
		width: 15%;
		height: auto;
	}

	.about_content_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: visible;
	}

	/* Mobile Styles */
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
		.header_logo {
			width: 25% !important;
			height: auto;
		}
	}
</style>
