<script lang="ts">
	import AddTodoForm from '$lib/components/AddTodoForm.svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { myTodos } from '$lib/stores';
</script>

<div class="mx-auto max-w-[600px] [&>*]:mx-4">
	<AddTodoForm />

	{#if $myTodos.length === 0}
		<div class="text-center text-stone-700 dark:text-stone-300">
			<h1>Nothing to do? Nice!</h1>
			<h1>Enjoy your day!!!</h1>
		</div>
	{:else}
		<ul class="divide-y-2">
			{#each $myTodos as todo (todo.id)}
				<TodoItem {...todo} />
			{/each}
		</ul>
	{/if}
</div>
