/* eslint-disable @typescript-eslint/no-explicit-any */

import { writable } from 'svelte/store';
import type { TodoType } from '$lib/types/TodoType';
export const myTodos = writable<TodoType[]>(getTodos());

function validateTodos(array: any[]): { valid: TodoType[]; invalid: any[] } {
	const valid: TodoType[] = [];
	const invalid: any[] = [];

	array.forEach((item) => {
		if (
			typeof item === 'object' &&
			typeof item.id === 'string' &&
			typeof item.text === 'string' &&
			typeof item.completed === 'boolean'
		) {
			valid.push(item);
		} else {
			invalid.push(item);
		}
	});

	return { valid, invalid };
}

function getTodos() {
	try {
		const storedTodos = localStorage.getItem('my_todos');
		if (storedTodos) {
			const parsedTodos = JSON.parse(storedTodos);
			const { valid, invalid } = validateTodos(parsedTodos);

			if (invalid.length > 0) {
				console.warn('Found invalid todos:', invalid);
			}

			return valid;
		} else {
			return []; // If there are no stored todos, set todos to an empty array
		}
	} catch (error) {
		console.error('Failed to fetch todos from localStorage:', error);
		return []; // If there's a JSON parsing error, set todos to an empty array
	}
}
