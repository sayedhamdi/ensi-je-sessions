import { useState } from 'react'
// react hook 

// convention in react 
function Element({countInitial}){
    
    const sayHello = ()=>{
        console.log("Hello")
    }
    const handleChange = (e)=>{
        console.log(`value :  ${e.target.value}`)
    }



    // how to declare state in react
    // count is the state variable
    // setCount is the function to update the state variable
    let [count,setCount] = useState(countInitial);
    

    function increment(){
        setCount(count+1)
        console.log("incrementing")
        console.log(count)
    }
    function decrement(){
        setCount(count-1)
    }

    return (
        <div>
            <h1>Element</h1>
            <input  type="text" onChange={handleChange}/>
            <button onClick={sayHello} >Click me !</button>
            <hr />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>count is : {count}</h1>
        </div>
    )

}

export default Element