import React, { useState } from "react";
import "./Custom.css";
import NavBar from "./NavBar";
import { postRequest } from "../jsCode/Customer";
import { useNavigate } from "react-router-dom";


function Registration() {

  let navigate = useNavigate()
  const [emailId, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRoles] = useState('')

  let handleEmail = (e)=>{
     
    setEmail(e.target.value)
  }
  let handleUserName = (e)=>{
     
    setUserName(e.target.value)
  }
  let handlePassword = (e)=>{
     
    setPassword(e.target.value)
  }
  let handleRoles = (e)=>{
     console.log(e.target.value);
    setRoles((e.target.value))
  }

  let handleRegister = (e) =>{
    e.preventDefault()
    postRequest(
      "POST",
      `http://localhost:8888/www.localGrocery.com/identity/api/register`,
      {
        username : username,
        password : password,
        emailId : emailId,
        role : role
      }

    ).then((Response)=>{
      console.log(Response);
      alert(Response.data)
      navigate('/login')
    }).catch(message => console.log(message))
  }
 
    // console.log(emailId);
  return (
    <>
    <NavBar />
    <div>
    <div className="registration flex justify-center items-center flex-col w-screen min-h-[30rem]">
    <p className='font-bold mb-[15px] text-xl'>Please signup to enjoy shopping with Local Grocery Store</p>

        <div className="flex flex-col  border rounded-[5px] w-[19rem]  h-[25rem] bg-white      ">
        <div className="p-[18px] text-2xl font-bold text-center">Register</div>
        
          <form className="flex flex-col">
            <div>
              <input
                className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md"
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                onChange={handleEmail}
                value={emailId}
                required
              />
            </div>
            <div>
              <input
                className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                type="text"
                name=""
                id=""
                placeholder="Create a username"
                onChange={handleUserName}
                value={username}
                required
              />
            </div>
            <div>
              <input
                className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                type="password"
                name=""
                id=""
                placeholder="Create a password"
                onChange={handlePassword}
                value={password}
                required
              />
            </div>
            
            <div>
              <input
                className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                type="text"
                name=""
                id=""
                placeholder="ROLE_CUSTOMER , ROLE_OWNER"
                onChange={handleRoles}
                value={role}
                required
              />
            </div>
            <div>
              <button onClick={handleRegister} className="btn-register">Signup</button>
            </div>
            <div className="text-sm ml-[30px] mt-[1rem]">
              Already have an account? 
              <span className="text-green-700"> 
                <a href="/login" >
                   Login
                </a>
              </span>
            </div>
          </form>
        </div>
        </div>
      </div>
    
    
   
     
    </>
  );
}

export default Registration;
