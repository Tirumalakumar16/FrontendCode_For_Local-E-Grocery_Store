import React, { useState ,useEffect } from 'react'
import LogiNav from '../customer/LogiNav'
import { getRequest ,getAuthToken } from '../jsCode/Customer'
import { useNavigate } from 'react-router-dom'

function AddressLink() {

  let navigate = useNavigate()
  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  })
  
    let addresses = JSON.parse(localStorage.getItem('addresses'))

    

    let handleAddress = (address)=>{
        let houseNumber =address.houseNumber
        getRequest(
            "POST",
            `http://localhost:8888/www.localGrocery.com/customer/api/customer/order`,
            {
                houseNumber : houseNumber
            }
        ).then((response)=>{
            console.log(response.data);
            navigate('/order')
        })
        
    }

    

  return (
    <>
    <LogiNav />
      <div></div>
      <div className="bg-blue-200  items-start flex-row justify-center h-[300vh]   ">
      <div>
        <p className='text-2xl text-center pt-[3rem] text-blue-700'>Please select address for delivery of your products...</p>
    </div>
        <div className="flex  gap-2 flex-wrap justify-evenly   ">
          {addresses.map((address)=>(
            <>
            <div className="mt-[4rem] ml-5 h-[20rem] w-[20rem] bg-green-300 border rounded-[15px] border-black cursor-pointer hover:scale-110 duration-300 ">
            <p className="p-2.5  ">houseNumber : <span className=" font-bold">{address.houseNumber}</span> </p>
            <p className="p-2.5 ">landmark : <span className="font-bold">{address.landMark}</span></p>
            <p className="p-2.5 ">streetName : <span className=" font-bold">{address.streetName}</span></p>

            <p className="p-2.5 ">city : <span className=" font-bold">{address.city}</span></p>
            <p className="p-2.5 ">District : <span className=" font-bold">{address.district}</span></p>

            <p className="p-2.5 ">zip : <span className=" font-bold">{address.zip}</span></p>
            <p className="p-2.5 ">State : <span className=" font-bold">{address.state}</span></p>
            <div className='mt-5 flex justify-center '>
            <button onClick={()=>handleAddress(address)} className='bg-blue-400 p-3 font-bold border rounded-[5px]'>Select</button>
            </div>
          </div>
            </>
          ))}
          
         
         </div>
      </div>
    </>
  )
}

export default AddressLink
