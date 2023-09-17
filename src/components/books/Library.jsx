// Library.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBook,
  removeBook,
  toggleBookStatus,
} from "../../features/books/booksSlice"; // Adjust the path accordingly

function Library() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  // Local state for the new book form
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, isbn }));
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div className="p-8 max-w-[1300px] mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Library
      </h1>

      <div className="card w-full max-w-lg mx-auto bg-base-200/90 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Add a New Book</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Book Title"
              className="input input-bordered w-full"
              required
            />
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              className="input input-bordered w-full"
            />
            <input
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="ISBN"
              className="input input-bordered w-full"
            />
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary w-full font-bold">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="card w-full bg-base-100 shadow-md p-5 space-y-4 bg-base-200/90"
            >
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">ISBN: {book.isbn}</p>
              <p className="text-gray-600">
                Status:{" "}
                <span
                  className={
                    book.status === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {book.status}
                </span>
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => dispatch(toggleBookStatus(book.isbn))}
                  className="btn"
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => dispatch(removeBook(book.isbn))}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Library;
