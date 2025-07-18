
import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },200)
  },[])

  return (
    
    <>
    <Routes>
      {/* <Route path='/' element={isLoading ? <HomePage/>: <Preloader />} /> */}
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />


    </Routes>
    </>
  )
}

export default App
