import { useState } from 'react';


function App() {

  let [counter, setCounter ] = useState(15)
  // set counter ke jagah par abhiCounter v rakh sakate hai kuch v
  
  //let counter = 10;

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1 
    setCounter(counter)
    //console.log("value Added", Math.random());
  }

  

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
