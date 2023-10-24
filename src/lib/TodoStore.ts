/* eslint-disable @typescript-eslint/no-explicit-any */

import { z } from 'zod';
import { writable } from 'svelte/store';

export const TodoSchema = z.object({
	id: z.string(),
	text: z.string(),
	completed: z.boolean()
});

type Todo = z.infer<typeof TodoSchema>;

export const myTodos = writable<Todo[]>(getTodos());

function getTodos() {
	try {
		if (typeof window !== 'undefined') {
			const storedTodos = localStorage.getItem('my_todos');
			if (storedTodos) {
				const parsedTodos = JSON.parse(storedTodos);

				const validTodos: Todo[] = [];
				const invalidTodos: any[] = [];

				parsedTodos.forEach((todo: any) => {
					const todoValidation = TodoSchema.safeParse(todo);
					if (todoValidation.success) {
						validTodos.push(todo);
					} else {
						invalidTodos.push({ todo, error: todoValidation.error });
					}
				});

				if (invalidTodos.length > 0) console.warn('Found invalid todos:', invalidTodos);

				return validTodos;
			} else {
				return [];
			}
		}
	} catch (error) {
		console.error('Failed to fetch todos from localStorage:', error);
		return [];
	}
}
