import React, { useEffect, useState } from "react";
import { getRequest } from "../jsCode/Customer";
import LogiNav from "../customer/LogiNav";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/orders`
    )
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((err) => console.log(err));
  },[]);

  let total = 0
  for(let i=0;i<orders.length;i++) {
    total = total + orders[i].price
  }

  return (
    <>
      <div className="h-[500vh] bg-blue-200">
        <LogiNav />
        <div className=" flex-col items-start justify-center   ">
        <div className="mb-8 flex justify-center ">
            <p className="mt-10 text-2xl">Total Spent :<i className="fa-solid fa-indian-rupee-sign"></i> <span className="font-bold">{total}</span></p>
        </div>
        <div className="flex  gap-2 flex-wrap justify-evenly   ">
          {orders.map((order)=>(
            <>
            <div className="mt-5 ml-5  w-[20rem] bg-white border rounded-[15px] border-black cursor-pointer hover:scale-110 duration-300 ">
            <p className="p-2.5  ">Product Name : <span className=" font-bold">{order.productName}</span> </p>
            <p className="p-2.5 ">Quantity : <span className="font-bold">{order.quantity}</span></p>
            <p className="p-2.5 ">Price : <span className=" font-bold">{order.price}</span></p>

            <p className="p-2.5 ">Shop Name : <span className=" font-bold">{order.shopName}</span></p>
            <p className="p-2.5 ">TansactionId : <span className=" font-bold">{order.transactionId}</span></p>

            <p className="p-2.5 ">Address : <span className=" font-bold">{order.houseNumber}</span></p>
            <p className="p-2.5 ">Zip : <span className=" font-bold">{order.zip}</span></p>
          </div>
            </>
          ))}
          
         
         </div>
      </div>
      </div>
    </>
  );
}

export default Orders;
