import { useState } from "react";

function AddTodo({handleAdd}){
    let [todo,setTodo] = useState("")
    
    return (
        <div>
            <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
            <button onClick={()=>{handleAdd(todo)}}>Add todo</button>
        </div>
    )
}

export default AddTodo;