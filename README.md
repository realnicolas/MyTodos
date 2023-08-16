# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

Simple todo list manager built with Svelte. 

App Demo: https://my-todos-web.netlify.app/

## Usage

- **Viewing todos**: All your todos will be automatically displayed.If there are no todos, a friendly message will be shown instead.
- **Adding a todo**: Enter your desired task into the text box and click the 'Add' button to create a new todo.
- **Editing a todo**: Click the <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"> <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> button to the right of the todo, make the change, and click `Save`.
- **Marking a Todo as Complete/Incomplete**: Click the checkbox to the left of your todo. This will allow you to toggle its status between complete and incomplete.
- **Deleting a todo**: To remove a todo from the list, click the <svg class="feather feather-trash-2" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> button located to the right of your todo and confirm to remove.
- **Changing theme**: To change the theme, click the button on the top right of the application.

## Implementation

"MyTodos" is a Svelte-based web application designed for intuitive task management. It's built using Svelte, TypeScript, and enhanced with Tailwind CSS and Skeleton UI.

### Data Management
The todos are persisted using the browser's `localStorage`. This provides a seamless experience, as users can revisit their tasks even after closing the browser, todos are also maintained in the `myTodos` store, serving as the primary data source for the application, this 

Svelte's reactive statements monitor the `myTodos`` store for any changes. Whenever a change is detected, the updated list of todos is sent back to `localStorage', ensuring that the todo list is updated in real time, reflecting any additions or deletions immediately.

### Theme Management

The design is dynamic and changes according to the user's theme preference using the Lightswitch from Skeleton UI.

## Status

I'm still working on MyTodos, some of the possible future improvements are:
- Categorization of tasks (e.g., Work, Personal).
- Implementing a deadline or reminder feature.

## License

MyTodos is available under the MIT license. See the LICENSE file for more info.
