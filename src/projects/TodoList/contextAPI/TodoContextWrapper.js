import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = {
  todoArr: ["shopping"],
  editAndDeleteIndex: null,
};

const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoArr: [...state.todoArr, action.payload] };
    case EDIT_TODO:
      return {
        ...state,
        todoArr: state.todoArr.map((todo, index) =>
          index === action.payload.index ? action.payload.newTodo : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoArr: state.todoArr.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

function TodoContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ todoState: state, todoDispatch: dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextWrapper;
