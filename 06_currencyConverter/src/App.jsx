import { useState } from 'react'
import './App.css'
import CurrencyConverter from "./components/CurrencyConverter.jsx"

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <CurrencyConverter></CurrencyConverter>
    </div>
    </>
  )
}

export default App
