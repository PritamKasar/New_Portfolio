import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([{path:'/',element:<Home/>}])

  return (
    <>
    <div className='bg-[#0d1224]'>
    <RouterProvider router={routes}>
    </RouterProvider>
    </div>
    </>
  )
}

export default App
