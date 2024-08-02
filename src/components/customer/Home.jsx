import React, { useEffect, useState } from 'react'
import LogiNav from './LogiNav'
import { getRequest } from '../jsCode/Customer'
import { getAuthToken } from '../jsCode/Customer'
import { useNavigate } from 'react-router-dom'

function Home() {
    
  
  let navigate = useNavigate()

  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])
 

  useEffect(()=>{
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/identity/api/identity`
    ).then((response)=>{
      // console.log(response.data);
      localStorage.setItem('navBarResult',JSON.stringify(response.data))
      
    }).catch((message)=> console.log(message))

  },[])

 
  // reloadOnce()
  return (
    <>
    <LogiNav />
     <div className='flex justify-center items-center bg-blue-300 h-[92vh] w-[100vw]'>
      <div  className='text-center'>
      <i className="fa-solid fa-cart-shopping text-center text-[5rem] p-3"></i>
        <p className='text-3xl font-bold'>Welcome to Local Grocery Store</p>
      </div>
    </div>
    </>
   
  )
}

export default Home
