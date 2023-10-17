<script lang="ts">
	import type { TodoType } from '$lib/types/TodoType';
	import type { Writable } from 'svelte/store';
	export let myTodos: Writable<TodoType[]>;
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import TodoItem from './TodoItem.svelte';
	$: numberOfTodosCompleted = $myTodos.filter((todo) => todo.completed === true).length;
</script>

<div>
	<ul class="divide-y">
		{#each $myTodos as todo (todo.id)}
			{#if todo.completed === false}
				<TodoItem {...todo} {myTodos}/>
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
