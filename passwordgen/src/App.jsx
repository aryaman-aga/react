import { useState, useCallback , useEffect, useRef, use} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(()=>{
    console.log("Generating Password")
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed])


  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, charAllowed, passwordgenerator])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])


  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black">
      <h1 className="text-5xl text-center text-white mt-16 mb-8 tracking-wide font-semibold">
        Password Generator
      </h1>
      <div className="w-full max-w-md shadow-lg rounded-xl px-6 py-6 mt-4 text-orange-500 bg-gray-800 text-xl font-semibold">
        <div className="rounded-lg overflow-hidden mb-4" >
          <input 
            type = "text"
            value = {password}
            readOnly
            className="w-full px-4 py-2.5 text-lg bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            placeholder='Password'
            ref={passwordRef}
          />

          <button className='mt-4 w-full bg-orange-600 hover:bg-orange-800 text-white font-semibold py-2.5 rounded-lg transition duration-300' onClick={copyPasswordToClipboard} >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default App
