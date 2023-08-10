<script>
	import { theme } from '$lib/stores';

	function handleButton() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
	}
</script>

<button
	on:click={handleButton}
	class={`absolute p-2 rounded-md right-4`}>{$theme === 'dark' ? '☀️' : '🌙'}</button
>
