import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false)

  //ref hook
  const passwordRef= useRef(null)
  const copyPassToClipBoard= useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setIsCopied(true)

  },[password])

  const passwordGenerator =  useCallback(()=>{
    setIsCopied(false)
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str +="0123456789"
    if (charAllowed) str += "!@#$%&{}[]~`_-^"
    for (let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])
useEffect(()=>{
    const timeout = setTimeout(() => {
    passwordGenerator();
  }, 0);

  return () => clearTimeout(timeout);
},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="w-full h-screen duration-200 py-4"
      style={{backgroundColor: 'black'}}>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-800 bg-gray-700'>
          <h5 className='text-white text-center'>Password Generator</h5>
          <div className='flex shadow-md overflow-hidden mb-4 py-2 rounded-lg'>
            <input 
              type='text' 
              value={password} 
              placeholder='Password'
              className='outline-none w-full py-2 px-3 bg-white rounded-lg' 
              readOnly
              ref={passwordRef}
              />
              <button 
              onClick={copyPassToClipBoard}
              className="btn bg-blue-600 rounded-lg p-3 ml-2 text-white">{isCopied ? "Copied": "Copy"}</button>
          </div>
          <div className='flex text-sm gap-x-1 p-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={8}
              max={25}
              value={length}
              className='cursor-pointer' 
              onChange={(e)=> {setLength(e.target.value)}}/>
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>

        </div>
    </div>
  )
}

export default App
