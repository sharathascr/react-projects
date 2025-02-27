import AddTodo from "./AddTodo";
import ErrorBoundary from "./ErrorBoundary";
import TodoList from "./TodoList";

function TodoWrapper() {
  const styles = {
    todoWrapper: {
      width: "25%",
      margin: "30px auto",
      padding: "10px",
      border: "1px solid blue",
      textAlign: "center",
      borderRadius: "5px",
    },
  };

  return (
    <ErrorBoundary>
      <div style={styles.todoWrapper}>
        <AddTodo />
        <TodoList /> {/* Uncomment this line */}
      </div>
    </ErrorBoundary>
  );
}

export default TodoWrapper;
