import React, { useEffect, useState } from "react";
import { getRequest , getAuthToken} from "../jsCode/Customer";
import LogiNav from "../customer/LogiNav";
import { useNavigate } from "react-router-dom";

function Address() {
let navigate = useNavigate()
  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/addresses`
    )
      .then((response) => {
        console.log(response);
        setAddresses(response.data);
        localStorage.setItem("addresses", JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  },[]);
  
  return (
    <>
    <LogiNav />

      <div className="h-screen">
          
      <div className="flex items-start justify-center h-screen bg-blue-200 ">
      
        <div className="flex flex-wrap gap-2 justify-evenly ">
          {addresses.map((address)=>(
            <>
            <div className="mt-5 ml-5 h-[20rem] w-[20rem] bg-green-300 border rounded-[15px] border-black cursor-pointer hover:scale-110 duration-300 ">
            <p className="p-2.5  ">houseNumber : <span className="font-bold ">{address.houseNumber}</span> </p>
            <p className="p-2.5 ">landmark : <span className="font-bold">{address.landMark}</span></p>
            <p className="p-2.5 ">streetName : <span className="font-bold ">{address.streetName}</span></p>

            <p className="p-2.5 ">city : <span className="font-bold ">{address.city}</span></p>
            <p className="p-2.5 ">District : <span className="font-bold ">{address.district}</span></p>

            <p className="p-2.5 ">zip : <span className="font-bold ">{address.zip}</span></p>
            <p className="p-2.5 ">State : <span className="font-bold ">{address.state}</span></p>
          </div>
            </>
          ))}
          
         
         </div>
         
      </div>
      
      </div>
    </>
  );
}

export default Address;
