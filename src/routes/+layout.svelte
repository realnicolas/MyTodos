<script lang="ts">
	import '../app.css';
	import ChangeThemeButton from '$lib/components/ChangeThemeButton.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores';

	let isThemeLoaded = false;

	function getTheme() {
		const themeStored = localStorage.getItem('theme');
		const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		$theme = themeStored ? themeStored : osTheme;
	}

	onMount(() => {
		getTheme();
		isThemeLoaded = true;
	});

	$: if (typeof window !== 'undefined' && isThemeLoaded) {
		localStorage.setItem('theme', $theme);
		$theme === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

{#if isThemeLoaded}
	<header
		class="flex justify-center items-center py-3 px-4 bg-green-500 dark:bg-purple-900 shadow drop-shadow dark:shadow-stone-900"
	>
		<h1 class="text-3xl font-bold dark:text-white">MyTodos</h1>
		<ChangeThemeButton />
	</header>

	<main class="dark:bg-stone-800 dark:text-white min-h-screen font-bold">
		<slot />
	</main>
{/if}
