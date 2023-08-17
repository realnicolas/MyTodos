<script lang="ts">
	import AddTodoForm from '$lib/components/AddTodoForm.svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { myTodos } from '$lib/stores';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	let numberOfTodosCompleted: number;
	$: {
		numberOfTodosCompleted = $myTodos.filter((todo) => todo.completed === true).length;
	}
</script>

<div class="mx-auto max-w-[600px] [&>*]:mx-4">
	<AddTodoForm />

	{#if $myTodos.length === 0}
		<div class="text-center text-stone-700 dark:text-stone-300">
			<h1>Nothing to do? Nice!</h1>
			<h1>Enjoy your day!!!</h1>
		</div>
	{:else}
		<div class="">
			<ul class="divide-y">
				{#each $myTodos as todo (todo.id)}
					{#if todo.completed === false}
						<TodoItem {...todo} />
					{/if}
				{/each}
			</ul>
			<Accordion class="bg-black/20 rounded mt-1" padding='py-2 px-1'>
				<AccordionItem class="focus:bg-none">
					<svelte:fragment slot="summary">
						Completed ({numberOfTodosCompleted})
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="divide-y">
							{#each $myTodos as todo (todo.id)}
								{#if todo.completed === true}
									<TodoItem {...todo} />
								{/if}
							{/each}
						</ul>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	{/if}
</div>
