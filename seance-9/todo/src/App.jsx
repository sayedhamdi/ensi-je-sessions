import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  let todolist = [
    { 
      todo: "item 1",
      done:false
    },
    { 
      todo:"item 2",
      done :true 
    },
    {  
      todo : "item 3",
      done:false
    },
    { 
      todo :"item 4",
      done:false
    }
  ]
  return (
    <div className='App'>
      <AddTodo />
      <TodoList todolist={todolist}/>
    </div>
  )
}

export default App
