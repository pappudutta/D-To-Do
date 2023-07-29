import React, { useEffect, useState } from "react";
import NewTodoInput from "./components/NewTodoInput";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="container">
        <NewTodoInput setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
