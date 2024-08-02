import React,{useEffect} from 'react'
import LogiNav from '../customer/LogiNav'
import { useNavigate } from 'react-router-dom'
import { getAuthToken } from '../jsCode/Customer'
function Order() {
  let navigate = useNavigate()
  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])

  return (
    <>
    <LogiNav />
    <div className='flex justify-center items-center h-[100vh] bg-blue-300 '>
        <p>Orders placed successfully......</p>
      
    </div>
    </>
    
  )
}

export default Order
