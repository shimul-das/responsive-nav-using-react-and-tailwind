import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Pricelist from './Components/PriceList/Pricelist'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {

  return (
    <div className="App">
      <div>
        <h1 className='text-5xl text-purple-600'>Hello from tailwind</h1>
        <Navbar></Navbar>
        <Pricelist></Pricelist>
        <Dashboard></Dashboard>
    </div>
    </div>
  )
}

export default App
