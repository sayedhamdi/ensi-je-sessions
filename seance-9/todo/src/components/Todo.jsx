function Todo({todo,done,handleDoneChange,id,deleteTodo}){
    return (
        <li className="Todo">
            <input type="checkbox" checked={done} onChange={()=>handleDoneChange(id)}/>
                <span style={{textDecoration:done? 'line-through':''}}>{todo} </span>
            <button onClick={()=>deleteTodo(id)}>delete</button>
        </li>
    )
}

export default Todo;