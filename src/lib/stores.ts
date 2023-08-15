import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
import type { TodoType } from '$lib/types/TodoType';

export const myTodos: Writable<TodoType[]> = localStorageStore('my_todos', []);
