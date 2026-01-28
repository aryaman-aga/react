import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/buttons.jsx'

function App() {
  const [color , setcolor] = useState("Black")

  return (
      <div className="w-screen h-screen duration-2000" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-3xl">
            {/* <button colorcode = "red" ></button>
            <button colorcode = "red" ></button>
            <button colorcode = "red" ></button> */}

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }} onClick={() => setcolor("red")}>
            red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Blue" }} onClick={() => setcolor("Blue")}>
            Blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Green" }} onClick={() => setcolor("Green")}>
            Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{ backgroundColor: "Yellow" }} onClick={() => setcolor("Yellow")}>
            Yellow
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
