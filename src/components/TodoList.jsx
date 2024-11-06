
const TodoList = (props) => {
    return (
        <ul>
        {props.todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    )
}

export default TodoList