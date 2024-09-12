import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div>
        <h1 className="bg-gray-800 border-4 border-sky-500">Tailwind CSS props check</h1>
      </div>
      <Card/>
      <Card/>
    </>
  )
}

export default App
//why className because class is a keyword in js, thats why using className
//I used Card as a component here
