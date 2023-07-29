import React from "react";

import deleteBtn from "../assets/deleteBtn.svg";

const Todos = ({ todos, setTodos }) => {
  const handleToggle = (id, completed) => {
    setTodos(prevValue => {
      return prevValue.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });

    // setTodos(prevValue => {
    //   return prevValue.map(todo => {
    //     if (todo.id === id) {
    //       return { ...todo, completed };
    //     }
    //     return todo;
    //   });
    // });
  };

  const handleDelete = id => {
    setTodos(prevValue => {
      return prevValue.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
      <ol className="list-group">
        <div className="d-flex justify-content-center">
          {todos.length === 0 && (
            <h2 className="text-danger">Add what's on your mind!</h2>
          )}
        </div>
        {todos
          .map(todo => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={todo.id}
            >
              <label htmlFor={todo.id} className="mx-2">
                <input
                  key={todo.id}
                  checked={todo.completed}
                  type="checkbox"
                  id={todo.id}
                  className="mx-2"
                  onChange={e => handleToggle(todo.id, e.target.checked)}
                />
                {todo.completed ? (
                  <del className="text-danger">{todo.newItem}</del>
                ) : (
                  todo.newItem
                )}
              </label>

              <span key={todo.id} onClick={() => handleDelete(todo.id)}>
                <img
                  style={{ width: "30px", cursor: "pointer" }}
                  src={deleteBtn}
                  key={todo.id}
                />
              </span>
            </li>
          ))
          .reverse()}
      </ol>
    </>
  );
};

export default Todos;
