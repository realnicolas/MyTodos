import { writable } from 'svelte/store';

export const accordionOpen = writable<boolean>(getAccordionState());

function getAccordionState() {
	try {
		if (typeof window !== 'undefined') {
			const storedValue = localStorage.getItem('accordionState');
			if (storedValue) {
				return JSON.parse(storedValue);
			} else {
				return false;
			}
		}
	} catch (error) {
		console.error('Failed to fetch accordion state from localStorage:', error);
	}
}
