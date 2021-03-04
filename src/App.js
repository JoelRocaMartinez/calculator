import React, { useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(4)


  return (
    <div>
      <button> - </button>
      <span>{count}</span>
      <button>+</button>
    </div>
  )
   
 
}

export default App;
