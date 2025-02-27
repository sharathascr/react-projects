import React, { useState } from "react";

function EditTodo({ todo }) {
  const [editInp, setEditInp] = useState(todo);
  return (
    <div>
      <input value={editInp} onChange={(e) => setEditInp(e.target.value)} />
      <button>Update</button>
      <button>cancel</button>
    </div>
  );
}

export default EditTodo;
