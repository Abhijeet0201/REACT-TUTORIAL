import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter ] = useState(15)
  // set counter ke jagah par abhiCounter v rakh sakate hai kuch v
  
  //let counter = 10;

  const addValue = () => {
    console.log("Clicked", counter);
    if (counter <20) {
      counter = counter + 1 
      setCounter(counter)
    }
    //console.log("value Added", Math.random());
  }
  const removeValue = () =>{
   if (counter >= 1) {
    setCounter(counter - 1)
   }
  }
  

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
      <p>Footer</p>
    </>
  )
}

export default App
