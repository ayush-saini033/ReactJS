import { useState } from 'react'
import './App.css'

function App() {
// you can give any default value , false , function, any string
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      // counter += 1
      // setCounter(counter)
    // set counter set tthe new value of the counter
    // it is laos possible 
    // setCounter(counter + 1)
    // prevCounter is the last updated value of counter
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  
  // let  counter = 15
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
