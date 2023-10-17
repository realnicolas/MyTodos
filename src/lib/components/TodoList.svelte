<script lang="ts">
	import { myTodos } from '$lib/TodoStore';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import TodoItem from './TodoItem.svelte';
	$: numberOfTodosCompleted = $myTodos.filter((todo) => todo.completed === true).length;
</script>

{#if $myTodos.length === 0}
	<div class="text-center text-stone-700 dark:text-stone-300">
		<h1>Nothing to do? Nice!</h1>
		<h1>Enjoy your day!!!</h1>
	</div>
{:else}
	<div>
		<ul class="divide-y">
			{#each $myTodos as todo (todo.id)}
				{#if todo.completed === false}
					<TodoItem {...todo} />
				{/if}
			{/each}
		</ul>
		<Accordion
			class="bg-black/20 rounded mt-1"
			padding="py-2 px-1"
			regionControl="hover:bg-tertiary-hover-token"
			regionPanel="py-0"
		>
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
