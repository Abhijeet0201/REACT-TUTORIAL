import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
   )
}

// const reactElement ={
//   type: 'a', // a means anchor tag, d means div here.
//   props: {   // props means properties
//       href:'https://google.com',
//       target: '_kuchNahi'
//   },
//   childern: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_kuchNahi'>Visit Google</a>
)

const anotherUser = "learning React"

const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  

  // <MyApp />
  //anotherElement
  reactElement
  // <App />
  
)
