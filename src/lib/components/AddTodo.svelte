<script lang="ts">
	import type { TodoType } from '$lib/types/TodoType';
	import type { Writable } from 'svelte/store';
	export let myTodos: Writable<TodoType[]>;
	let inputValue: string;

	$ : localStorage.setItem("my_todos", JSON.stringify(myTodos));

	function addTodo() {
		if (!inputValue.trim()) return;
		$myTodos = [
			...$myTodos,
			{ id: crypto.randomUUID(), text: inputValue.trim(), completed: false }
		];
		inputValue = '';
	}
</script>

<div class="py-6 flex flex-col gap-2 md:flex-row md:gap-4">
	<input
		type="text"
		bind:value={inputValue}
		class="border border-black dark:border-white bg-transparent rounded p-1 flex-1"
	/>

	<button on:click={addTodo} class="btn bg-primary-500 py-1 text-on-primary-token md:w-[5rem]">
		Add
	</button>
</div>
