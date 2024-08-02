import React, { useState ,useEffect} from 'react'
import LogiNav from './LogiNav'
import { getRequest ,getAuthToken} from '../jsCode/Customer'
import { useNavigate } from 'react-router-dom'

function SaveDatails() {

  let navigate = useNavigate()

  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])

  let [customerName , setName] = useState('')
  let [mobile , setMobile] = useState('')

  let handleMobile = (e)=>{
    setMobile(e.target.value)
  }
  let handleName = (e)=>{
    setName(e.target.value)
  }


  let handleSubmit = ()=>{
    getRequest(
      "POST",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer`,
      {
        customerName : customerName,
        mobile : mobile
      }
    ).then((response)=>{
      navigate('/profile')
      console.log(response);
    }).catch(err => console.log(err))
  }
  console.log(customerName);
  return (
    <>
    <LogiNav/>
    <div className='bg-blue-300 h-[100vh] flex justify-center items-center'>
    <div className=' border rounded-[5px] w-[18rem] h-[15rem] min-h-[10rem] bg-white '>
      <div className='text-center font-bold text-xl mt-3 mb-3'>Customer datails</div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Enter your Name' onChange={handleName} value={customerName}/>
      </div>
      <div className='mt-2 text-center'>
        
        <input type="text" placeholder='Enter mobile' className='border border-b-blue-300 outline-none text-lg rounded pl-2 ' onChange={handleMobile} value={mobile}/>
      </div>
      <div className='text-center mt-5'>
        <button className='p-3 bg-blue-500 border rounded' onClick={handleSubmit}>save</button>
      </div>
    </div>
    </div>
    
    </>
   
  )
}

export default SaveDatails
