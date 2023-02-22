function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Button text="My blue button" color="blue"/>
      <Button text="My green button" color="green"/>
    </div>
  )
}
// props
function Button({text, color}){
  return (
    <button  style={{backgroundColor: color}}>{text}</button>
  )
}



export default App
