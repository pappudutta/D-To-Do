import React, { useState } from "react";

const NewTodoInput = ({ setTodos }) => {
  const [newItem, setNewItem] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    if (newItem === "") {
      setNewItem("Add Items first");
      return;
    }
    setTodos(prevValue => [
      ...prevValue,
      { id: Date.now(), newItem, completed: false },
    ]);
    setNewItem("");
  };
  return (
    <>
      <form onSubmit={e => handleAdd(e)} className="some">
        <div className="container my-3">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="type here..."
              id={Date.now()}
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
            />

            <button className="btn btn-outline-secondary">Add</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewTodoInput;
