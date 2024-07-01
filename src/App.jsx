import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function updateLabel(value) {
    // console.log(value);
    // Update the label with the current value of the slider
    document.getElementById('rangeValue').innerText = value;
  }


  
  return (
    <>
     
<div
id='main-box'
className='bg-slate-700 top-10 relative rounded-md font-serif p-3 items-center'
>
<h1 
className='text-white text-3xl'
>Password Generator</h1>

<div 
className=' flex  justify-center'>
<input type="text" 
className='rounded-md rounded-r-none p-1  border-2 border-black'
placeholder='Your Password'
/>
<button
className='text-white bg-blue-700 p-1 rounded-md rounded-l-none   border-2 border-black border-l-0 hover:bg-blue-300 active:bg-blue-800 '
>COPY</button>
</div> 

<div 
className=' flex  justify-center'>
<input type="range" name="rangeValue"
 id="password-length" 
min="5" max="50" 
// placeholder="7"
 onInput={(e)=>updateLabel(e.target.value)}
/>
<label htmlFor="password-length"
id='rangeValue'
onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
>50</label>
</div>

{/* <div class="bg-white">
    <input type="range" name="rangeValue" 
    id="password-length" 
    min="5" max="50" 
    // value="7"
    // onInput={updateLabel(this.value)}
 
    classṆame="w-full"/>
    
    <label for="password-length" 
    id="rangeValue" class="text-lg font-medium">change</label>
  </div> */}


<input type="checkbox" name="" id="include-numbers" />
<label htmlFor="include-numbers" i>Number </label>

<input type="checkbox" name="n" id="include-characters" />
<label htmlFor="include-characters">Characters </label>

<input type="checkbox" name="" id="include-special-characters" />
<label htmlFor="include-special-characters">Special Ch.</label>

</div>

    </>
  )
}

export default App
