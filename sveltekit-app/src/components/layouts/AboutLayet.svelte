<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	const { navigation, footer } = data;
</script>

<div class="about_layout">
	<header class="header">
		{#if navigation}
			<div class="header_content">
				<a href="/">
					<img src={navigation.logo.asset.url} alt="Takumen Logo" class="header_logo" />
				</a>
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

	<div class="about_content_wrapper">
		<!-- This slot is expected to contain the image and scrollable text -->
		<slot />
	</div>

	<!-- <footer class="footer">
		{#if footer}
			<div class="footer_content">
				<p class="footer_label">{footer.locationLabel}</p>
				<p class="footer_address">{footer.address}</p>
			</div>
			<div class="hours_content">
			</div>
		{/if}
	</footer> -->
</div>

<style>
	.about_layout {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		/* overflow-y: visible; */
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
		width: 40%;
		height: auto;
	}

	.about_content_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 80vh;
		overflow: hidden;
	}

	.footer {
		height: 12vh;
		background-color: #ffe14d;
		display: flex;
		justify-content: center;
		z-index: 10;
		width: 100%;
	}

	.footer_content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-1);
		width: 50%;
		padding: var(--space-3) var(--space-4);
	}
	.footer_label {
		font-weight: bold;
		margin: 0;
	}
	.footer_address {
		margin: 0;
	}
</style>
