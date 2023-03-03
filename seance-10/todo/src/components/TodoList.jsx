import Todo from "./Todo";

function TodoList({todolist,title,changeDone,deleteTodo}){

    return (
        <div className="TodoList">
            <h1>{title}</h1>
            <hr></hr>
            {todolist.length===0 ?
             <span style={{color:"red"}}>No todos please add one </span>
             : 
            todolist.map(
                ({todo,done,id}) => 
                            <Todo 
                                key={id} 
                                id={id} 
                                todo={todo} 
                                done={done} 
                                changeDone={changeDone}
                                deleteTodo={deleteTodo}
                            />
                )}
          <hr></hr>
        </div>
    )
}

export default TodoList;