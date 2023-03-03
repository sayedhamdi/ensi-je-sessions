import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { useState } from 'react'

let idStart = -1

function App() {
  let [todoList,setTodoList] = useState([])
  
  function addTodo(todo){
    if(todo == ""){
      alert("please write Something")
      return
    }
    idStart ++ 
    let newTodo = {
      id : idStart,
      todo:todo,
      done:false
    }
    console.log(newTodo)
    setTodoList( [...todoList,newTodo])
  }  

  function deleteTodo(id){
    let newListWithoutTheTodo = todoList.filter((todo)=>todo.id!==id)
    setTodoList(newListWithoutTheTodo)
  }

  function changeDone(id){
    console.log(`todo with id : ${id}` )

    // find the element wwith that id in the list and show it
    let copyOfList = [...todoList]
    let indexOfTodo = copyOfList.findIndex((todo)=>todo.id===id)
    copyOfList[indexOfTodo].done = !copyOfList[indexOfTodo].done
    setTodoList(copyOfList)
  }


  let doneTodos = todoList.reduce((acc,todo)=>todo.done ? acc+1 : acc,0)



  return (
    <div className='App'>
      <Stats total={todoList.length} done={doneTodos}/>
      <AddTodo handleAdd={addTodo}/>
      <TodoList deleteTodo={ deleteTodo} changeDone={changeDone} todolist={todoList} title="WORK"/>
    </div>
  )
}

function Stats({total,done}){
  return (
    <div>
      <h1> total todos : {total}</h1>
      <h1> Done : {done}</h1>
    </div>
  )
}

export default App
