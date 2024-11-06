import { useState } from 'react'

const NewTodo = props => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.addTodo(newTodo)
    setNewTodo('')
  }

  const handleChange = event => {
    // console.log('inside handleChange: ', event.target.value)
    setNewTodo(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input
        type="text"
        id="todoInput"
        name="todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit">Create to-do</button>
    </form>
  )
}

export default NewTodo