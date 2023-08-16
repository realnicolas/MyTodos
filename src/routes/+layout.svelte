<script lang="ts">
	import '../app.css';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { onMount } from 'svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { setInitialClassState } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';

	let renderReady = false;

	onMount(() => {
		renderReady = true;
	});
</script>

<svelte:head>
	<title>MyTodos</title>
	<meta name="description" content="Simple todo list manager built with Svelte." />
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

{#if renderReady}
	<header
		class="flex justify-between bg-blue-400 dark:bg-black/40 dark:shadow-black shadow-md shadow-stone-400 [&>*]:mx-4 items-center py-3"
	>
		<h1 class="text-3xl font-bold">MyTodos</h1>
		<LightSwitch />
	</header>
	
	<main class=" min-h-screen font-bold">
		<Modal />
		<slot />
	</main>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

	header,
	main {
		font-family: 'Quicksand', sans-serif;
	}
</style>
