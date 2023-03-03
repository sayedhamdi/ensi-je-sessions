import Todo from "./Todo";

function TodoList({todolist,handleDoneChange,deleteTodo}){

    return (
        <div className="TodoList">
            <hr></hr>
          {todolist.map(({todo,done,id}) => <Todo deleteTodo={deleteTodo} handleDoneChange={handleDoneChange} id={id} todo={todo} done={done}/>)}
          <hr></hr>
        </div>
    )
}

export default TodoList;