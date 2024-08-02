import React, { useEffect, useState } from 'react'
import { getAuthToken, getRequest, postRequest } from '../jsCode/Customer';
import { useNavigate } from 'react-router-dom';
import LogiNav from './LogiNav';

function ChangePassword() {

    let navigate = useNavigate();

   
  
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword1, setNewPassword1] = useState("");
  
    let handleOldPassword = (e) => {
      //  e.preventDefault()
      //  console.log(e.target.value);
      setOldPassword(e.target.value);
    };
    let handleNewPassword = (e) => {
      // e.preventDefault()
      // console.log(e.target.value);
      setNewPassword(e.target.value);
    };
    let handleNewPassword1 = (e) => {
        // e.preventDefault()
        // console.log(e.target.value);
        setNewPassword1(e.target.value);
      };
  
    let handleChangePassword= (e) => {
      e.preventDefault();
      getRequest(
        "Put",
        `http://localhost:8888/www.localGrocery.com/identity/api/changePassword`,
  
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        }
      )
        .then((response) => {
         
          console.log(response.data);
          alert(response.data)
        })
        .catch(() => {
          alert("Old password or new password is wrong");
        });
    };
  return (
   <>
   <LogiNav />
     <div className="registration  flex flex-col justify-center items-center">
        <p className="font-bold mb-[15px] text-xl">
          Please provide us your old password to change password
        </p>
        <div className=" border rounded-[5px] w-[19rem]  h-[20rem] bg-white   ">
          <div className="p-[18px] text-2xl font-bold text-center">Change Password</div>
          <div>
            <form>
              <div>
                <input
                  className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Old Password"
                  onChange={handleOldPassword}
                  value={oldPassword}
                  required
                />
              </div>
              <div>
                <input
                  className={(newPassword === newPassword1) ? "w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left hover:outline-green-600 " :"w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left outline-red-500"}
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter New Password"
                  onChange={handleNewPassword}
                  value={newPassword}
                  required
                />
              </div>
              <div>
                <input
                  className={(newPassword === newPassword1) ? "w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left outline-green-600 " :"w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left outline-red-600"}
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm New Password"
                  onChange={handleNewPassword1}
                  value={newPassword1}
                 
                  required
                />
              </div>

              <div>
                <button onClick={handleChangePassword} className="btn-register">
                 Change
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default ChangePassword
