import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  // let counter = 5;

  const addvalue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    setCounter(counter);

  }
  const removevalue = () => {
    
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
      console.log("value removed", counter);
    }
    else{
      console.log("value less then 0 not allowed");
    }
    
    
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-white padding-40px'>Counter App</h1>
      <h2 >counter value: {counter}</h2>

      
      <button onClick={addvalue} >Add value : {counter}</button>
      <br/>
      <br/>
      <button onClick = {removevalue}>subtract value : {counter}</button>
      <p> footer : {counter}</p>
    </>
  )
}

export default App
 

