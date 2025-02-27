import React, { useContext } from "react";
import { TodoContext } from "./contextAPI/TodoContextWrapper";

function TodoListButtons({ todoIndex }) {
  const { setEditAndDeleteIndex } = useContext(TodoContext);
  return (
    <div>
      <button
        onClick={() =>
          setEditAndDeleteIndex({ type: "edit", index: todoIndex })
        }
      >
        edit
      </button>
      <button
        onClick={() =>
          setEditAndDeleteIndex({ type: "delete", index: todoIndex })
        }
      >
        delete
      </button>
    </div>
  );
}

export default TodoListButtons;
