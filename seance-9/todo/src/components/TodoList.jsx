import Todo from "./Todo";

function TodoList({todolist}){

    return (
        <div class="TodoList">
            <hr></hr>
          {todolist.map(({todo,done}) => <Todo todo={todo} done={done}/>)}
          <hr></hr>
        </div>
    )
}

export default TodoList;