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
          class="border border-black dark:border-white bg-transparent rounded p-1 flex-1"
        />

        <button
          type="submit"
          class="btn bg-primary-500 py-1 text-on-primary-token md:w-[5rem]"
        >
          Add
        </button>
      </div>
</form>