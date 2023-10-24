<script lang="ts">
	import TodoItem from './TodoItem.svelte';
	import { accordionOpen } from '$lib/AccordionStore';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { myTodos } from '$lib/TodoStore';
	import { flip } from 'svelte/animate';
	import { fade, crossfade } from 'svelte/transition';

	const [send, receive] = crossfade({ duration: 400 });
	$: todosCompleted = $myTodos.filter((todo) => todo.completed);
	$: todosNotCompleted = $myTodos.filter((todo) => !todo.completed);
	$: localStorage.setItem('accordionState', JSON.stringify($accordionOpen));
</script>

{#if $myTodos.length === 0}
	<div class="text-center text-stone-700 dark:text-stone-300">
		<h1>Nothing to do? Nice!</h1>
		<h1>Enjoy your day!!!</h1>
	</div>
{:else}
	<div>
		<ul>
			{#each todosNotCompleted as todo (todo.id)}
				<div
					animate:flip={{ duration: 300 }}
					in:receive={{ key: todo.id }}
					out:send={{ key: todo.id }}
				>
					<TodoItem {...todo} />
				</div>
			{/each}
		</ul>
		{#if todosCompleted.length > 0}
			<div transition:fade={{ duration: 100 }}>
				<Accordion
					class="bg-black/20 rounded mt-1"
					padding="py-2 px-3"
					regionControl="hover:bg-tertiary-hover-token"
					regionPanel="py-0"
				>
					<AccordionItem
						open={$accordionOpen}
						class="focus:bg-none"
						on:click={() => ($accordionOpen = !$accordionOpen)}
					>
						<svelte:fragment slot="summary">
							Completed ({todosCompleted.length})
						</svelte:fragment>
						<svelte:fragment slot="content">
							<ul>
								{#each todosCompleted as todo (todo.id)}
									<div
										animate:flip={{ duration: 300 }}
										in:receive={{ key: todo.id }}
										out:send={{ key: todo.id }}
									>
										<TodoItem {...todo} />
									</div>
								{/each}
							</ul>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		{/if}
	</div>
{/if}
