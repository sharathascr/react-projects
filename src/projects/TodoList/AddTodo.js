import React, { useContext, useState } from "react";
import { TodoContext } from "./contextAPI/TodoContextWrapper";

function AddTodo() {
  const ADD_TODO = "ADD_TODO";
  const EDIT_TODO = "EDIT_TODO";
  const DELETE_TODO = "DELETE_TODO";

  const [inpTodo, setInputTodo] = useState("");
  const { todoDispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (inpTodo.trim() === "") {
      alert("Todo cannot be empty");
      return;
    }
    todoDispatch({ type: ADD_TODO, payload: inpTodo });
    setInputTodo("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={inpTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="Enter a new todo"
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddTodo} style={{ padding: "10px 20px" }}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
