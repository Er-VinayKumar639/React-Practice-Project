import { useState } from 'react'

import './App.css'

function App() {
  //let counter = 15;

  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    setCounter(counter+1);
    console.log(counter);
  }
  
  const removeValue = () => {
    setCounter(counter - 1);

  }
  return (
    <>
      <h1>React Practice Project</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >
        Add value
      
      </button>
      <button
      onClick={removeValue}
      >
       Reduce value
      </button>
      <p> <span> This is a basic counter created by Vinay Kumar</span> </p>
    </>
  )
}

export default App
