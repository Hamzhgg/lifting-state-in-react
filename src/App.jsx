import './App.css'
import { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos] = useState([])
 
  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo]
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App