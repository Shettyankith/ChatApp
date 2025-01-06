import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Left from './home/left/Left'
import Right from './home/right/Right'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {AuthProvider} from "./context/AuthProvider"

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <SignIn/>
      {/* <div className='flex h-screen'>
        <Left/>
        <Right/> 
        
      </div> */}
    </AuthProvider>
  )
}

export default App
