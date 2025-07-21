<script lang="ts">
	import { page } from '$app/stores';
	import TakuParlorLogo from '$lib/assets/tplogo.png'; // adjust path if needed

	export let data;

	const { navigation, footer } = data;
</script>

<div class="about_layout">
	<header class="header">
		{#if navigation}
			<div class="header_content">
				<!-- Swap Takumen logo with Taku Parlor logo -->
				<a href="/">
					<img src={TakuParlorLogo} alt="Taku Parlor Logo" class="header_logo" />
				</a>

				<div class="header_links">
					<!-- Show all nav links except the one that links to /takuparlor -->
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

					<!-- Inject Takumen link -->
					<a class="header_link" href="/">Takumen</a>
				</div>
			</div>
		{/if}
	</header>

	<div class="about_content_wrapper">
		<slot />
	</div>
</div>

<style>
	.about_layout {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
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
		height: 80vh;
		overflow: hidden;
	}
</style>
