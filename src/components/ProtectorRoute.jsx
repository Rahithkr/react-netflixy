import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const  ProtectorRoute=({children}) =>{
    const {user}=UserAuth()

    if(!user){
        return <Navigate to='/'/>
    }
    
  return children;
  
}

export default ProtectorRoute