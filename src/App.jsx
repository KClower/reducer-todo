import { useState, useReducer } from 'react'
import { initialState, reducer } from './Reducers/todoReducer'


function App() {

  const [todoTask, setTodoTask] = useState("")

  const [todos, dispatch] = useReducer(reducer, initialState);



  const changeHandler = (e) => {
    setTodoTask(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_TASK", payload: todoTask });
    setTodoTask("");
  }

  const toggleTodo = (todoItemId) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: todoItemId })
  }

  const clearTodo = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <>
      <div>
        <h1 className='mb-3'>Todo List</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            name="todoTask"
            value={todoTask}
            onChange={changeHandler}
          >
          </input>
          <button>
            Add Task
          </button>
        </form>
        {todos.map(todo => {
          return <h5 onClick={() => toggleTodo(todo.id)} className={`todo ${todo.completed ? 'text-decoration-line-through' : ""}`}>{todo.item}</h5>
        })}


        <div>
          <button onClick={() => clearTodo()}>Clear Completed Tasks</button>
        </div>

      </div>

    </>
  )
}

export default App
