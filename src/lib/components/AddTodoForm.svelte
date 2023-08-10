<script lang="ts">
  import { myTodos } from "$lib/stores";

  let newTodo: string;

  function handleSubmit() {
    if (!newTodo || !newTodo.trim()) return
    $myTodos = [...$myTodos, {id: crypto.randomUUID(), text: newTodo.trim(), completed: false}]
    newTodo = ""
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="py-6 flex flex-col gap-2 md:flex-row md:gap-4">
        <input
          type="text"
          bind:value={newTodo}
          class="border border-black dark:bg-stone-800 dark:border-white rounded p-1 flex-1"
        />

        <button
          type="submit"
          class="bg-blue-700 text-white md:w-[4rem] p-1 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
</form>