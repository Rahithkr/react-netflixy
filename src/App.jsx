import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectorRoute from './components/ProtectorRoute'


function App() {
  return (

<>


<AuthContextProvider >
<Navbar/>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/profile' element={<ProtectorRoute><Profile/></ProtectorRoute>} />
   </Routes>
   </AuthContextProvider>
   </>
  )
}

export default App
