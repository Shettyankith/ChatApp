import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Left from './home/left/Left'
import Right from './home/right/Right'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { useAuth } from "./context/AuthProvider";
import {Routes,Route, Navigate} from "react-router-dom"
import {GetAllUsers} from "./context/GetAllUsers"

function App() {
  const { currentUser, setcurrentUser } = useAuth();
  const { loading, allUsers } = GetAllUsers();
  console.log(allUsers)

  return (
    <>
    <Routes>
      <Route path='/' element={
        currentUser?(<div className='flex h-screen'>
        <Left/>
        <Right/> 
        
      </div> ):( <Navigate to="/signin" />)
      }></Route>
      <Route path='/signin' element={currentUser?<Navigate to="/" />: <SignIn/>}></Route>
      <Route path='/signup' element={currentUser?<Navigate to="/" />: <SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
