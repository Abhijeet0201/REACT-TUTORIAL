import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Sonu",
    age:23
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card naam = "abhijeet"/>
      <Card />
      <Card />
    </>
  )
}

export default App