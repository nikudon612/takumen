<script lang="ts">
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	import AboutLayout from '../components/layouts/AboutLayet.svelte';
	import DefaultLayout from '../components/layouts/DefaultLayout.svelte';
	import TakuParlorLayout from '../components/layouts/TakuParlorLayout.svelte';
	import '../app.css';

	export let data;

	const { navigation, footer } = data;

	// console.log('Layout data:', data);
	// console.log('Navigation:', navigation);
	// console.log('Footer:', footer);
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

{#if $page.url.pathname === '/'}
	<DefaultLayout {data}>
		<slot />
	</DefaultLayout>
{:else if $page.url.pathname === '/takuparlor'}
	<TakuParlorLayout {data}>
		<slot />
	</TakuParlorLayout>
{:else}
	<AboutLayout {data}>
		<slot />
	</AboutLayout>
{/if}

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}

<style>
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
