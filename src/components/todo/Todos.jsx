import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlide";
const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-lg mt-5">
    <table className="table w-full table-compact">
      <thead>
        <tr>
          <th></th>
          <th>Task</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id} className="bg-base-200  ">
            <th>{index + 1}</th>
            <td className="py-2">{todo.text}</td>
            <td>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-xs btn-error"
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Todos;
