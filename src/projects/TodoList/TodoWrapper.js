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
  //   const [todoArr, setTodoArr] = useState([]);
  //   function updateTodo(todo) {
  //     setTodoArr([...todoArr, todo]);
  //   }

  //   useEffect(() => {
  //     if (editAndDeleteIndex && editAndDeleteIndex.type === "delete") {
  //       const newTodoArr = todoArr.filter(
  //         (_, index) => index !== editAndDeleteIndex.index
  //       );
  //       setTodoArr(newTodoArr);
  //     }
  //   }, [editAndDeleteIndex, todoArr]);
  return (
    <ErrorBoundary>
      <div style={styles.todoWrapper}>
        <AddTodo />
        {/* <TodoList /> */}
      </div>
    </ErrorBoundary>
  );
}

export default TodoWrapper;
