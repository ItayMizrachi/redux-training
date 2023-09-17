import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlide";
import Todos from "./Todos";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
        <h1 className="text-2xl font-bold text-base-content">Redux Todo Form</h1>
        <form className="flex space-x-4" onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
        <Todos/>
    </div>
  );
};

export default AddTodo;
