import React from "react";
import TodoContextWrapper from "./contextAPI/TodoContextWrapper";
import TodoWrapper from "./TodoWrapper";

function TodoApp() {
  return (
    <TodoContextWrapper>
      <TodoWrapper />
    </TodoContextWrapper>
  );
}

export default TodoApp;
