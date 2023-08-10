<script lang="ts">
	import { myTodos } from '$lib/stores';
	export let id: string;
	export let text: string;
	export let completed: boolean;

	function handleDelete() {
		$myTodos = $myTodos.filter((todo) => todo.id !== id);
	}

	function handleOnChange() {
		$myTodos = $myTodos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
	}
</script>

<li class="flex gap-4 [&>*]:flex items-center [&>*]:justify-center py-1 divide-y break-all">
	<div class="flex-1 gap-2">
		<input
			type="checkbox"
			id={id}
			checked={completed}
			on:change={handleOnChange}
			class="peer cursor-pointer w-4 accent-gray-600"
		/>
		<label
			for={id}
			class="peer-checked:line-through text-xl flex-1 peer-checked:text-stone-500 cursor-pointer"
		>
			{text}
		</label>
	</div>
	<button
		on:click={handleDelete}
		class=" bg-red-700 text-white p-1 w-[4rem] rounded-md hover:bg-red-500 transition-colors"
	>
		Delete
	</button>
</li>
