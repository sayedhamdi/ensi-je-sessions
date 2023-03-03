


function Todo({id,todo,done,changeDone,deleteTodo}){
    return (
        <li className="Todo">
            <input type="checkbox" checked={done} onChange={()=>{changeDone(id)}}/>
                <span style={{textDecoration : done ? 'line-through':'' }}> {todo} </span>
            <button onClick={()=>{deleteTodo(id)}}>delete</button>
        </li>
    )
}

export default Todo;