import React, { useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(() =>  [])

  const addOne = () => setCount(prevCount => prevCount + 1)
  const addTwo = () => setCount(prevCount => prevCount + 2)
  const addthree = () => setCount(prevCount => prevCount + 3)
  const addFour = () => setCount(prevCount => prevCount + 4)
  const addFive = () => setCount(prevCount => prevCount + 5)
  const addSix = () => setCount(prevCount => prevCount + 6)
  const addSeven = () => setCount(prevCount => prevCount + 7)
  const addEight = () => setCount(prevCount => prevCount + 8)
  const addNine = () => setCount(prevCount => prevCount + 9)
  const addZero = () => setCount(prevCount => prevCount + 0)



  const decrementCount = () => {
    setCount(prevCount => prevCount)
  }


  return (
    <div>
      <span>{count}</span>
      <button onClick={addOne}> 1 </button>
      <button onClick={addTwo}> 2 </button>
      <button onClick={addthree}> 3 </button>
      <button onClick={addFour}> 4 </button>
      <button onClick={addFive}> 5 </button>
      <button onClick={addSix}> 6 </button>
      <button onClick={addSeven}> 7 </button>
      <button onClick={addEight}> 8 </button>
      <button onClick={addNine}> 9 </button>
      <button onClick={addZero}> 0 </button>
    </div>
  )
   
 
}

export default App;
