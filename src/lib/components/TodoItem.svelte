<script lang="ts">
	import { myTodos } from '$lib/stores';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	// import EditIcon from '$lib/assets/editIcon.svg?component';
	// import DeleteIcon from '$lib/assets/deleteIcon.svg?component';
	export let id: string;
	export let text: string;
	export let completed: boolean;

	const editModal: ModalSettings = {
		type: 'prompt',
		title: 'Edit',
		value: text,
		valueAttr: { type: 'text', required: true },
		buttonTextSubmit: 'Save',
		response: (response: string | false) => response && editTodo(response)
	};

	const deleteModal: ModalSettings = {
		type: 'confirm',
		title: 'Delete',
		body: text,
		response: (response: boolean) => response && deleteTodo()
	};

	function editTodo(text: string) {
		if (!text || !text.trim()) return;
		$myTodos = $myTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
	}

	function deleteTodo() {
		$myTodos = $myTodos.filter((todo) => todo.id !== id);
	}

	function handleOnChange() {
		$myTodos = $myTodos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
	}
</script>

<li class="flex gap-4 [&>*]:flex [&>*]:justify-center py-1 break-all">
	<div class="flex-1">
		<input
			type="checkbox"
			{id}
			checked={completed}
			on:change={handleOnChange}
			class="peer cursor-pointer w-4 accent-gray-600"
		/>
		<label
			for={id}
			class="peer-checked:line-through text-xl flex-1 peer-checked:text-stone-500 cursor-pointer ml-2 flex items-center"
		>
			{text}
		</label>
		<div class="[&>*]:p-2 flex items-center">
			<button on:click={() => modalStore.trigger(editModal)} aria-label="Edit Todo">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit text-green-800 dark:text-green-600"> <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
			</button>
			<button on:click={() => modalStore.trigger(deleteModal)} aria-label="Delete Todo">
				<svg class="feather feather-trash-2 text-red-700 dark:text-red-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
			</button>
		</div>
	</div>
</li>
