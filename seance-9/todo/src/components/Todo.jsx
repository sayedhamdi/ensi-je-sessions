function Todo({todo,done}){
    return (
        <li className="Todo">
            <input type="checkbox" checked={done}/>
                {todo} 
            <button>delete</button>
        </li>
    )
}

export default Todo;