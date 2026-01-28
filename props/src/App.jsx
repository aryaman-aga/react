import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "aryaman",
    age: "21"
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-white p-4'>Counter App</h1>
      <br></br>
      <div>
        <Card username = "ChaiaurCode"  />
        <Card username = "Aryaman" btntext = "press me" />
      </div>
      
    </>
  )
}

export default App
