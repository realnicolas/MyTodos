<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import EditIcon from '$lib/assets/edit-icon.svg?component';
	import DeleteIcon from '$lib/assets/delete-icon.svg?component';
	import { myTodos } from '$lib/TodoStore';

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

<li class="flex [&>*]:flex font-bold [&>*]:justify-center py-3 break-all">
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
			class="peer-checked:line-through flex-1 peer-checked:text-stone-500 cursor-pointer ml-2 flex items-center"
		>
			{text}
		</label>
		<div class="flex gap-1 items-center">
			<button on:click={() => modalStore.trigger(editModal)} aria-label="Edit Todo">
				<EditIcon />
			</button>
			<button on:click={() => modalStore.trigger(deleteModal)} aria-label="Delete Todo">
				<DeleteIcon />
			</button>
		</div>
	</div>
</li>
