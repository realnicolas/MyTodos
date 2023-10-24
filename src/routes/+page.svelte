<script lang="ts">
	import AddTodo from '$lib/components/AddTodo.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { myTodos } from '$lib/TodoStore';
	$: localStorage.setItem('my_todos', JSON.stringify($myTodos));
</script>

<div class="mx-auto max-w-[600px] [&>*]:mx-4">
	<AddTodo />
	<TodoList />
</div>
