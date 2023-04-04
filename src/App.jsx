import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1 className='text-5xl text-purple-600'>Hello from tailwind</h1>
        <Navbar></Navbar>
    </div>
    </div>
  )
}

export default App
