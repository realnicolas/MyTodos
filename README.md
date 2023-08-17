# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

Simple todo list manager built with Svelte. 

App Demo: https://my-todos-web.netlify.app/

## Usage

- **Viewing todos**: All your todos will be automatically displayed.If there are no todos, a friendly message will be shown instead.
- **Adding a todo**: Enter your desired task into the text box and click the 'Add' button to create a new todo.
- **Editing a todo**: Click the ![Edit Icon](src/lib/assets/edit-icon.svg) button to the right of the todo, make the change, and click `Save`.
- **Marking a Todo as Complete/Incomplete**: Click the checkbox to the left of your todo. This will allow you to toggle its status between complete and incomplete.
- **Deleting a todo**: To remove a todo from the list, click the ![Delete Icon](src/lib/assets/delete-icon.svg) button located to the right of your todo and confirm to remove.
- **Changing theme**: To change the theme, click the button on the top right of the application.

## Implementation

"MyTodos" is a Svelte-based web application designed for intuitive task management. It's built using Svelte, TypeScript, and enhanced with Tailwind CSS and Skeleton UI.

### Data Management
The todos are persisted using the browser's `localStorage`. This provides a seamless experience, as users can revisit their tasks even after closing the browser, todos are also maintained in the `myTodos` store, serving as the primary data source for the application, this 

Svelte's reactive statements monitor the `myTodos`` store for any changes. Whenever a change is detected, the updated list of todos is sent back to `localStorage', ensuring that the todo list is updated in real time, reflecting any additions or deletions immediately.

### Theme Management

The design is dynamic and changes according to the user's theme preference using the Lightswitch from Skeleton UI.

## Status

MyTodos is finished.

## License

MyTodos is available under the MIT license. See the LICENSE file for more info.
