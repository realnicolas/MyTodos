# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

This project is a simple todo list manager built with Svelte. 

App Demo: https://my-todos-web.netlify.app/

## Usage

- **Viewing todos**: All your todos will be automatically displayed.If there are no todos, a friendly message will be shown instead.
- **Adding a todo**: Enter your desired task into the text box and click the 'Add' button to create a new todo.
- **Marking a Todo as Complete/Incomplete**: Click the checkbox to the left of your todo. This will allow you to toggle its status between complete and incomplete.
- **Deleting a todo**: To remove a todo from the list, click the 'Delete' button situated on the right side of your todo.
- **Changing theme**: To change the theme, click the button on the top right of the application.

## Implementation

"MyTodos" is a Svelte-based web application designed for intuitive task management. It's built using Svelte, TypeScript, and enhanced with Tailwind CSS for styling and implementation of the light and dark.

### Data Management
The todos are persisted using the browser's `localStorage`. This provides a seamless experience, as users can revisit their tasks even after closing the browser, todos are also maintained in the `myTodos` store, serving as the primary data source for the application.

### Lifecycle and Data Flow
- **Initialization**: On mounting the application (`onMount`), we retrieve any existing todos from the `localStorage` and populate the `myTodos` store.
   
- **Reactivity**: Svelte's reactive statements monitor the `myTodos` store for any changes. Whenever a change is detected, the updated list of todos is persisted back to the `localStorage`.

Svelte's reactivity ensures that the task list updates in real-time, reflecting any additions or deletions instantly.

### Theme Management & Layout

The design is dynamic, adjusting according to the user's theming preferences:

- **Persistent Theming**: User's theme choices are stored in the browser's `localStorage`.
- **Default theme**: In the absence of a user-selected theme, the application intelligently uses the OS's theme preference via the `window.matchMedia` method.

- **Dynamic Layout Updates**: When the button to change theme is clicked, the layout adjusts colors for an optimal viewing experience. The header has a button to toggle the dark theme on and off.

## Status

I'm still working on MyTodos, some of the possible future improvements are:
- Ability to edit todos.
- Categorization of tasks (e.g., Work, Personal).
- Implementing a deadline or reminder feature.

## License

MyTodos is available under the MIT license. See the LICENSE file for more info.
