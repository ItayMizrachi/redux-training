import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    books: [
        // Sample book structure:
        {
            id: 1,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567890',
            status: 'available'  // or 'checkedOut'
        },
        {
            id: 2,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567891',
            status: 'available'  // or 'checkedOut'
        },
        {
            id: 3,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567892',
            status: 'available'  // or 'checkedOut'
        },
        {
            id: 4,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567893',
            status: 'available'  // or 'checkedOut'
        },
        {
            id: 5,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567894',
            status: 'available'  // or 'checkedOut'
        },
        {
            id: 6,
            title: 'Book Title',
            author: 'Author Name',
            isbn: '1234567895',
            status: 'available'  // or 'checkedOut'
        },
        
    ]
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook = {
                ...action.payload,
                id: nanoid(),
                status: 'available'
            };
            state.books.push(newBook);
        },
        removeBook: (state, action) => {
            const isbnToRemove = action.payload;
            state.books = state.books.filter(book => book.isbn !== isbnToRemove);
        },
        updateBookDetails: (state, action) => {
            const updatedBook = action.payload;
            const bookIndex = state.books.findIndex(book => book.isbn === updatedBook.isbn);
            if (bookIndex !== -1) {
                state.books[bookIndex] = { ...state.books[bookIndex], ...updatedBook };
            }
        },
        toggleBookStatus: (state, action) => {
            const isbnToToggle = action.payload;
            const book = state.books.find(book => book.isbn === isbnToToggle);
            if (book) {
                book.status = book.status === 'available' ? 'checkedOut' : 'available';
            }
        }
    }
});

export const { addBook, removeBook, updateBookDetails, toggleBookStatus } = booksSlice.actions;

export default booksSlice.reducer;
