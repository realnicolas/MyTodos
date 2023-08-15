<script lang="ts">
	import { myTodos } from '$lib/stores';
	export let id: string;
	export let text: string;
	export let completed: boolean;
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	const editModal: ModalSettings = {
		type: 'prompt',
		title: 'Edit',
		value: text,
		valueAttr: { type: 'text', required: true },
		buttonTextSubmit: "Save",
		response: (editedTodo: string) => editTodo(editedTodo)
	};

	function editTodo(text: string) {
		if (!text || !text.trim()) return
		$myTodos = $myTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
	}

	function handleDelete() {
		$myTodos = $myTodos.filter((todo) => todo.id !== id);
	}

	function handleOnChange() {
		$myTodos = $myTodos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
	}
</script>

<li class="flex gap-4 [&>*]:flex items-center [&>*]:justify-center py-1 break-all">
	<div class="flex-1">
		<input
			type="checkbox"
			{id}
			checked={completed}
			on:change={handleOnChange}
			class="peer cursor-pointer accent-gray-600"
		/>
		<label
			for={id}
			class="peer-checked:line-through text-xl flex-1 peer-checked:text-stone-500 cursor-pointer ml-2"
		>
			{text}
		</label>
		<div class="[&>*]:p-2 flex items-center">
			<button on:click={() => modalStore.trigger(editModal)}
				><svg
					class="w-[16px] h-[16px] text-teal-700 dark:text-teal-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path
						d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"
					/>
					<path
						d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"
					/>
				</svg></button
			>
			<button on:click={handleDelete}>
				<svg
					class="w-[16px] h-[16px] text-red-800 dark:text-red-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 20"
				>
					<path
						d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"
					/>
				</svg>
			</button>
		</div>
	</div>
</li>
