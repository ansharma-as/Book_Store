import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav></nav>
    <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
     <Outlet />
     </main>
     <footer></footer>
    </>
  )
}

export default App
