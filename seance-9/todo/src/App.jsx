import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  let [list,setList] = useState([])
  let addTodo = (text)=>{
    setList([...list,{done:false,todo:text,id:list.length+1}])
  }
  let handleDoneChange = (id)=>{
    // set done to true or false
    console.log("here")
    let indexOfTodo = list.findIndex((todo)=>todo.id===id)
    let copy= list.map((todo)=>todo)
    copy[indexOfTodo].done = !copy[indexOfTodo].done
    setList(copy)
  }
  let deleteTodo = (id)=>{
      setList(list.filter((todo)=>todo.id!==id))
  }

  return (
    <div className='App'>
      <div style={{display:"flex",flexDirection:"column"}}>
      <span>Total : { list.length }</span>
      <span>Done : { list.filter((todo)=>todo.done).length }</span>
      </div>
      <AddTodo addTodo={addTodo} />
      <TodoList todolist={list} handleDoneChange={handleDoneChange} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
