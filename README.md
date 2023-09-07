# Bookshelf API

> API for Managing Digital Book Collections

Bookshelf API is a backend application designed to provide functionalities for handling a digital book collection.

## 🛠 Technical Specifications

- **Platform**: Node.js
- **Framework**: Hapi.js (from the `@hapi/hapi` package)
- **Unique ID Generator**: nanoid (from the `nanoid` package)
- **Development & Debugging**: nodemon
- **Linting**: ESLint with Airbnb config

## 🚀 Setup & Development

### Installation

Ensure you have Node.js and npm installed on your machine.

1. Clone this repository.
2. Navigate into the application directory and run:

```bash
npm install
```

This will install all necessary dependencies.

### Running the Server

To run the server in production mode:

```bash
npm start
```

For development purposes, use:

```bash
npm run dev
```

With nodemon, the server will automatically restart upon changes.

### Linting

To check for code errors and ensure code quality:

```bash
npm run lint
```

## 💡 Core Features

- **CRUD Operations**: Manage books with Create, Read, Update, and Delete functionalities.
- **Search & Sort**: Easily find and organize books.
- **Unique IDs**: Generate a unique ID for each book using `nanoid`.

## 📑 API Endpoints

### Add a New Book

- **Method**: `POST`
- **Path**: `/books`
- **Handler**: `addBookHandler`

### Get All Books

- **Method**: `GET`
- **Path**: `/books`
- **Handler**: `getAllBooksHandler`

### Get Book by ID

- **Method**: `GET`
- **Path**: `/books/{bookId}`
- **Handler**: `getBookByIdHandler`

### Edit Book by ID

- **Method**: `PUT`
- **Path**: `/books/{bookId}`
- **Handler**: `editBookByIdHandler`

### Delete Book by ID

- **Method**: `DELETE`
- **Path**: `/books/{bookId}`
- **Handler**: `delBookByIdHandler`

---

📝 **Note**: If you wish to add more API routes, please append them to `src/routes.js` and also include their respective handlers in `src/handler`.
