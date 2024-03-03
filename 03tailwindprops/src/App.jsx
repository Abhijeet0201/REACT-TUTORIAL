import {  } from 'react'
import './App.css'
import  Card  from './components/Card'

function App() {
  let myObj = {
    username: "Abhijeet",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 
     rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Card" btnText = "Click Me" />
     <Card username= "Abhi" btnText = "Viste Me" />
     <Card username= 'Kumar' />

    </>
  )
}

export default App
