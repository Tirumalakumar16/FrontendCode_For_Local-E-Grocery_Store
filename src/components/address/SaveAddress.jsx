import React, { useState,useEffect } from 'react'
import LogiNav from '../customer/LogiNav'
import { getRequest , getAuthToken } from '../jsCode/Customer'
import { useNavigate } from 'react-router-dom'

function SaveAddress() {

  let navigate = useNavigate()
  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])
  const [houseNumber , setHouseNumber] = useState('')
  const [landMark , setLandMark] = useState('')
  const [city , setCity] = useState('')
  const [streetName , setStreetName] = useState('')
  const [zip , setZip] = useState('')
  const [district , setDistrict] = useState('')
  const [state , setState] = useState('')

  let handleHouseNumber = (e)=>{
    setHouseNumber(e.target.value)
  }
  let handleLandMark = (e)=>{
    setLandMark(e.target.value)
  }
  let handleCity = (e)=>{
    setCity(e.target.value)
  }
  let handleStreetName = (e)=>{
    setStreetName(e.target.value)
  }
  let handleZip = (e)=>{
    setZip(e.target.value)
  }
  let handleDistrict = (e)=>{
    setDistrict(e.target.value)
  }
  let handleState = (e)=>{
    setState(e.target.value)
  }

  let handleAddress = ()=>{

      getRequest(
        "POST",
        `http://localhost:8888/www.localGrocery.com/customer/api/customer/address`,
        {
          houseNumber : houseNumber,
          landMark : landMark,
          city : city,
          streetName : streetName,
          zip : zip,
          district : district,
          state : state
        }
      ).then((response)=>{
        console.log(response);
        navigate('/addresses')
      }).catch(err => console.log(err))
  }
  return (
    <>
    <div className='bg-green-100 h-[100vh]'>
        <LogiNav />

        <div className='bg-blue-300 h-[100vh] flex justify-center items-center'>
    <div className=' border rounded-[5px] w-[18rem] h-[27rem] min-h-[10rem] bg-white '>
      <div className='text-center font-bold text-xl mt-3 mb-3'>Address</div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='HouseNumber' onChange={handleHouseNumber} value={houseNumber}/>
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Land mark'onChange={handleLandMark} value={landMark} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='City' onChange={handleCity} value={city} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Street name' onChange={handleStreetName} value={streetName} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='District' onChange={handleDistrict} value={district} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Pin code' onChange={handleZip} value={zip}/>
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='State' onChange={handleState} value={state}/>
      </div>
      
      <div className='text-center mt-5'>
        <button className='p-3 bg-blue-500 border rounded' onClick={handleAddress}>save</button>
      </div>
      <div className='mt-3'>
        <p className='text-center text-red-700 font-bold'>Don't use "/" in all fields</p>
      </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default SaveAddress
