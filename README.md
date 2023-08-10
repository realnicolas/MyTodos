# MyTodos

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

MyTodos is a todo list application made with NextJS 13 and Prisma.

## Table of contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Run the program](#run-the-program)
- [How to use it?](#how-to-use-it)
- [Notes](#notes)
- [Status](#status)
- [License](#license)

## Dependencies:

- **prisma**: ^5.1.0
- **@prisma/client**: ^5.1.0
- **@types/node**: 20.4.2
- **@types/react**: 18.2.15
- **@types/react-dom**: 18.2.7
- **autoprefixer**: 10.4.14
- **eslint**: 8.45.0
- **eslint-config-next**: 13.4.10
- **next**: ^13.4.12
- **postcss**: 8.4.26
- **react**: 18.2.0
- **react-dom**: 18.2.0
- **server-only**: ^0.0.1
- **tailwindcss**: 3.3.3
- **typescript**: 5.1.6

## Installation

Follow the steps below:

1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/realnicolas/MyTodos.git
   ```
1. Navigate to the project directory:
   ```shell
   cd MyTodos
   ```
1. Install the dependencies:
   ```shell
   npm install
   ```

## Database Setup

This project uses Prisma with SQLite. Follow the steps below to set up the database:

1. Create a `.env` file in the root of the project with the following terminal command:

   On a Linux terminal:

   ```shell
   touch .env
   ```

   On a Windows terminal:

   ```shell
    ni .env
   ```

2. Add your database connection string to the `.env` file. It should look like this:

   ```
   DATABASE_URL="file:./dev.db"
   ```

3. Generate Prisma client and apply migrations. This step creates the necessary tables in your database:
   ```shell
   npx prisma migrate dev
   ```

## Run the program

1. Start the development server:
   ```shell
   npm run dev
   ```
1. Open your web browser and visit http://localhost:3000 to access the application.
1. You can now explore the project and make any necessary changes. The development server will automatically update as you modify the source files.
1. To build the production-ready version of your project:
   ```shell
   npm run build
   ```
1. Once the build process completes, start the production server:
   ```shell
   npm start
   ```
1. Visit http://localhost:3000 to access the production version of your application.

## How to use it?

- **Viewing todos**: All your todos will be automatically displayed. If there are no todos to show, you will receive a message.
- **Adding a todo**: Enter your desired task into the text box and click the 'Add' button to create a new todo.
- **Marking a Todo as Complete/Incomplete**: Click the checkbox to the left of your todo. This will allow you to toggle its status between complete and incomplete.
- **Deleting a todo**: To remove a todo from the list, click the 'Delete' button situated on the right side of your todo.

## Notes

This project utilizes the experimental feature, Server Actions, introduced in Next.js 13. Server Actions allow us to write server-side logic directly inside Next.js, helping in simplifying the process of handling server-side operations.

## Status

MyTodos is finished for now, but I plan to comeback to it in the future!

## License

MyTodos is available under the MIT license. See the LICENSE file for more info.
