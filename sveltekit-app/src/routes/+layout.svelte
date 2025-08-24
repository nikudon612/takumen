<script lang="ts">
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import DefaultLayout from '../components/layouts/DefaultLayout.svelte';
	import TakuParlorLayout from '../components/layouts/TakuParlorLayout.svelte';
	import FixedHeight from '../components/layouts/fixedHeight.svelte';
	import FixedHeightLayout from '../components/layouts/fixedHeight.svelte';
	import Scrollable from '../components/layouts/scrollable.svelte';

	export let data;

	// timings (tweak)
	const FADE_IN_MS = 240; // curtain -> opaque
	const HOLD_MS = 180; // optional pause while covered
	const FADE_OUT_MS = 240; // curtain -> clear

	let curtainPhase: 'idle' | 'in' | 'hold' | 'out' = 'idle';
	let showCurtain = false;
	let contentHidden = false; // <-- NEW: hides all routed content during fade-in
	let t: number | null = null;
	const sleep = (ms: number) =>
		new Promise((r) => {
			t = window.setTimeout(r, ms);
		});

	beforeNavigate((nav) => {
		if (nav.type === 'leave') return; // external
		if (curtainPhase !== 'idle') return;
		showCurtain = true;
		contentHidden = true; // <-- hide content immediately so nothing can flash
		curtainPhase = 'in';
	});

	afterNavigate(async () => {
		if (curtainPhase === 'idle') {
			// programmatic goto without beforeNavigate (rare)
			showCurtain = true;
			contentHidden = true;
			curtainPhase = 'in';
		}

		// Let the curtain reach full opacity
		await sleep(FADE_IN_MS);
		curtainPhase = 'hold';

		// Optional tiny hold while covered (keeps timing consistent)
		await sleep(HOLD_MS);

		// Reveal the (new) route under the curtain, THEN fade curtain out
		contentHidden = false; // <-- unhide right before fade-out starts
		curtainPhase = 'out';
		await sleep(FADE_OUT_MS);

		// Reset
		curtainPhase = 'idle';
		showCurtain = false;
	});
</script>

<!-- Curtain -->
<div class="curtain" class:show={showCurtain} data-phase={curtainPhase} aria-hidden="true" />

<!-- Routed content wrapper; hidden while fading in to prevent flashes -->
<div class:invisible={contentHidden}>
	{#if $page.url.pathname === '/'}
		<DefaultLayout {data}><slot /></DefaultLayout>
	{:else if $page.url.pathname === '/takuparlor'}
		<TakuParlorLayout {data}><slot /></TakuParlorLayout>
	{:else if $page.url.pathname === '/about' || $page.url.pathname === '/contact' || $page.url.pathname === '/menu' || $page.url.pathname === '/exhibition'}
		<Scrollable {data}><slot /></Scrollable>
	{:else if $page.url.pathname === '/reservations' || $page.url.pathname === '/store'}
		<FixedHeightLayout {data}><slot /></FixedHeightLayout>
	{:else}
		<FixedHeight {data}><slot /></FixedHeight>
	{/if}
</div>

<style>
	.curtain {
		position: fixed;
		inset: 0;
		z-index: 9999;
		pointer-events: none;
		background: #fff;
		opacity: 0;
		transition-property: opacity;
		will-change: opacity;
	}
	.curtain.show[data-phase='in'] {
		opacity: 1;
		transition-duration: 240ms;
		transition-timing-function: ease;
	}
	.curtain.show[data-phase='hold'] {
		opacity: 1;
		transition-duration: 0ms;
	}
	.curtain.show[data-phase='out'] {
		opacity: 0;
		transition-duration: 240ms;
		transition-timing-function: ease;
	}

	/* Hide routed content during fade-in so nothing can peek through */
	.invisible {
		visibility: hidden;
	}

	@media (prefers-reduced-motion: reduce) {
		.curtain {
			transition: none !important;
		}
	}
</style>
