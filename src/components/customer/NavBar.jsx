import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
  

  let handleActive = ()=>{
    let register = document.querySelector('.register')
  let login = document.querySelector('.login')
  // let home = document.querySelector('.home')
  // home.classList.remove('bg-white')
    register.classList.remove('bg-white')
   // console.log(e.target.className);
   login.classList.add('bg-white')
   // console.log();
   
   
  }

  let handleRegisterActive = ()=>{
    let register = document.querySelector('.register')
    let login = document.querySelector('.login')
    // let home = document.querySelector('.home')
      login.classList.remove('bg-white')
      // home.classList.remove('bg-white')
    register.classList.add('bg-white')
   // console.log();
   
  }
  // let handleHome = ()=>{
  //   let register = document.querySelector('.register')
  //   let login = document.querySelector('.login')
  //   let home = document.querySelector('.home')
  //     login.classList.remove('bg-white')
  //     register.classList.remove('bg-white')
  //   home.classList.add('bg-white')
  //  // console.log();
   
  // }
 
 

  return (
    <div >
      
      <div className='flex  items-center bg-gray-600  h-15 w-[100vw]  '>
       
      <Link to="/login" className='login cursor-pointer text-black font-bold text-xl hover:bg-gray-400   p-[15px]' onClick={()=> handleActive()} >Login</Link>
      <Link to="/register" className='register cursor-pointer text-black font-bold text-xl hover:bg-gray-400  p-[15px]' onClick={()=>handleRegisterActive()}>Register</Link>
      </div>

      
    </div>
  )
}

export default NavBar
