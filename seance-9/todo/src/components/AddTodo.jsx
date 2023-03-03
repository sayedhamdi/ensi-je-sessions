import {useRef} from 'react'
function AddTodo({addTodo}){
    let inputRef = useRef(null)
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>addTodo(inputRef.current.value)}>Add todo</button>
        </div>
    )
}

export default AddTodo;