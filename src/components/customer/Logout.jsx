import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../jsCode/Customer";

function Logout() {
    let navigate = useNavigate()


  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])

    useEffect(()=>{
        localStorage.clear()
        navigate('/login')
        
    })

  return (
    <>
      <div></div>
    </>
  );
}

export default Logout;
