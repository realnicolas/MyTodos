<script lang="ts">
	import AddTodoForm from '$lib/components/AddTodoForm.svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { myTodos } from '$lib/stores';
	import { onMount } from 'svelte';

	let areTodosLoaded = false;

	function getTodos() {
		const storedTodos = localStorage.getItem('my_todos');
		$myTodos = storedTodos ? JSON.parse(storedTodos) : [];
	}

	onMount(() => {
		getTodos();
		areTodosLoaded = true;
	});

	$: {
		if (typeof window !== 'undefined' && areTodosLoaded) {
			localStorage.setItem('my_todos', JSON.stringify($myTodos));
		}
	}
</script>

<div class="mx-auto max-w-[600px] [&>*]:mx-4">
	<AddTodoForm />

	{#if areTodosLoaded}
		{#if $myTodos.length === 0}
			<div class="text-center text-stone-700 dark:text-stone-300">
				<h1>Nothing to do? Nice!</h1>
				<h1>Enjoy your day!!!</h1>
			</div>
		{:else}
			<ul class="divide-y">
				{#each $myTodos as todo (todo.id)}
					<TodoItem {...todo} />
				{/each}
			</ul>
		{/if}
	{/if}
</div>
