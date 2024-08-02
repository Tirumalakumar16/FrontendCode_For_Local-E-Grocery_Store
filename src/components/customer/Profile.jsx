import React, { useEffect ,useState} from 'react'
import { getRequest,getAuthToken } from '../jsCode/Customer'
import LogiNav from './LogiNav'
import { useNavigate } from 'react-router-dom'

function Profile() {

    let [details,setDetails] = useState([])

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
            `http://localhost:8888/www.localGrocery.com/customer/api/customer`
        ).then((response)=>{
                console.log(response.data);
                setDetails(response.data)
        }).catch(err => console.log(err))
    },[])
  return (
   <>
   <LogiNav />
   <div className='flex flex-col justify-center items-center bg-red-100 h-[100vh]'>
    <div className=' border min-w-[18rem] w-[20rem] h-[20rem] bg-white border rounded-[5px]'>
        <div className='text-center mt-[10px] text-3xl font-bold '>Profile Details</div>
    <p className='text-center text-xl p-3'><span className='font-bold text-red-600'>Name: </span>{details.customerName}</p>
    <p className='text-center text-xl p-4'><span className='font-bold text-red-600'>Email: </span>{details.emailId}</p>
    <p className='text-center text-xl p-4'><span className='font-bold text-red-600'>UserName: </span>{details.username}</p>
    <p className='text-center text-xl p-4'><span className='font-bold text-red-600'>Mobile: </span>{details.mobile}</p>
   
    </div>
    
   </div>
   </>
  )
}

export default Profile
