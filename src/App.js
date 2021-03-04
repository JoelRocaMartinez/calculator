import React, { useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(() =>  0)
  const [colour, setColour] = useState(() => "")


  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    console.log(count)
    if (count <= 0) {
      setColour("red")
    }
  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    if (count > 0) {
      setColour("blue")
    }
  }


  return (
    <div>
      <button onClick={decrementCount}> - </button>
      <span>{count}</span>
      <span>{colour}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
   
 
}

export default App;
