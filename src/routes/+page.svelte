<script lang="ts">
	import AddTodo from '$lib/components/AddTodo.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { myTodos } from '$lib/TodoStore';
	$: console.log($myTodos)
</script>

<div class="mx-auto max-w-[600px] [&>*]:mx-4">
	<AddTodo {myTodos} />

	{#if $myTodos.length === 0}
		<div class="text-center text-stone-700 dark:text-stone-300">
			<h1>Nothing to do? Nice!</h1>
			<h1>Enjoy your day!!!</h1>
		</div>
	{:else}
		<TodoList {myTodos} />
	{/if}
</div>
