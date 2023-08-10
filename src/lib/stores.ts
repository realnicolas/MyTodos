import { writable } from 'svelte/store';
import type { TodoType } from '$lib/types/TodoType';

export const myTodos = writable<TodoType[]>([]);

export const theme = writable<string>()    