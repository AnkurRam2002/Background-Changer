
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const [tColor, setTColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color, color: tColor}}>
        <div className='text-center text-4xl pt-40'>Hello World!</div>
        <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-2xl'>
            <div className='text-black'>Pick a Background Color :</div>

            <button onClick={()=>{setColor("red")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
            style={{backgroundColor: 'red'}}>Red</button>

            <button onClick={()=>{setColor("green")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
            style={{backgroundColor: 'green'}}>Green</button>

            <button onClick={()=>{setColor("blue")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
            style={{backgroundColor: 'blue'}}>Blue</button>

            <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 rounded-xl text-black shadow-lg' 
            style={{backgroundColor: 'yellow'}}>Yellow</button>
          </div>
        </div>
        <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-2xl'>
          <div className='text-black'>Pick a Text Color :</div>

          <button onClick={()=>{setTColor("red")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
          style={{backgroundColor: 'red'}}>Red</button>

          <button onClick={()=>{setTColor("green")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
          style={{backgroundColor: 'green'}}>Green</button>

          <button onClick={()=>{setTColor("blue")}} className='outline-none px-4 rounded-xl text-white shadow-lg' 
          style={{backgroundColor: 'blue'}}>Blue</button>

          <button onClick={()=>{setTColor("yellow")}} className='outline-none px-4 rounded-xl text-black shadow-lg' 
          style={{backgroundColor: 'yellow'}}>Yellow</button>
          </div></div>
      </div>
    </>
  )
}

export default App
