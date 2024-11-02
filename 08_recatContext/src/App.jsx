import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <div className='flex text-white justify-center items-center text-2xl font-bold'>This is for react</div>
      <div className='flex text-white justify-center items-center'>
          <Login></Login>
          <Profile></Profile>
      </div>
      
    </UserContextProvider>
  )
}

export default App
