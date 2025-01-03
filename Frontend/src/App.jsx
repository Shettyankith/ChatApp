import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Authentication from './components/Authentication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Authentication/>
      {/* <div className='flex h-screen'>
        <Left/>
        <Right/> 
        
      </div> */}
    </>
  )
}

export default App
