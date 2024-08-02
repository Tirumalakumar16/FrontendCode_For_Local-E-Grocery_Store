import React, { useEffect, useState } from "react";
import { getRequest, getAuthToken } from "../jsCode/Customer";
import LogiNav from "../customer/LogiNav";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  useEffect(() => {
    if (getAuthToken() == null || getAuthToken() == "null") {
      navigate("/login");
      alert("Session timed-out Please login....");
    }
  }, []);

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/addresses`
    )
      .then((response) => {
        // console.log(response);
        localStorage.setItem("addresses", JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  },[]);
  const [carts, setCarts] = useState([]);
  const [total, SetTotal] = useState(0);


  // let carts = JSON.parse(localStorage.getItem('cartProducts'))

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/carts`
    )
      .then((response) => {
        // console.log(response.data);
        //setCarts(response.data);
        localStorage.setItem("cartProducts", JSON.stringify(response.data));
        setCarts(JSON.parse(localStorage.getItem("cartProducts")));
        // console.log(carts);

        let priceProducts = JSON.parse(localStorage.getItem("cartProducts"));
        let prices = [];
        for (let i = 0; i < priceProducts.length; i++) {
          prices.push(priceProducts[i].price);
        }
        localStorage.setItem("cartPrice", JSON.stringify(prices));
        let price = JSON.parse(localStorage.getItem("cartPrice"));
        let totalPrice = 0
        for(let i=0;i<price.length;i++){
              totalPrice = totalPrice+price[i]
        }
        SetTotal(totalPrice)
        // console.log(prices);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  // console.log(prices);

  //   let price = prices.reduce((total , productPrice)=>{
  //     return total+productPrice
  //  },0)
  //  localStorage.setItem('cartTotalPrice',price)
  //  console.log(JSON.parse(localStorage.getItem('price')));

  let handleDelete = (product) => {
    let filteredCarts = carts.filter((item) => {
      return product.id != item.id;
    });

    localStorage.setItem("cartProducts", JSON.stringify(filteredCarts));
    setCarts(JSON.parse(localStorage.getItem("cartProducts")));

    let priceProducts = JSON.parse(localStorage.getItem("cartProducts"));
    let prices = [];
    for (let i = 0; i < priceProducts.length; i++) {
      prices.push(priceProducts[i].price);
    }
    localStorage.setItem("cartPrice", JSON.stringify(prices));
    let price = JSON.parse(localStorage.getItem("cartPrice"));
    let totalPrice = 0
    for(let i=0;i<price.length;i++){
          totalPrice = totalPrice+price[i]
    }
    SetTotal(totalPrice)

    getRequest(
      "DELETE",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/cart/${product.productName}`
    )
      .then((response) => {
        // navigate('/cart')
        console.log(response.data);
        // alert(response.data);
      })
      .catch((err) => console.log(err));
  };

  let handleOrderInCart = () => {

    navigate("/addressLink");
  };
  
  
  return (
    <>
      <div className="bg-blue-100 h-[300vh] ">
        <LogiNav />
        <div className=" rounded-lg mt-[1rem] ">
          <table className=" w-full border border-gray-600 rounded-lg  text-center ">
            <thead className="bg-gray-300 border border-gray-100 text-center">
              <tr>
                <th className="p-2  border border-gray-400">Product Name</th>
                <th className="border border-gray-400">Price</th>
                <th className="border border-gray-400">Quantity</th>
                <th className="border border-gray-400 ">ShopName</th>
                <th className="border border-gray-400 "></th>
              </tr>
            </thead>

            <tbody className="border border-gray-300 bg-gray-100">
              {carts.map((product) => {
                return (
                  <>
                    <tr className="border-b-4 border-gray-300" key={product.id}>
                      <td className="flex justify-start items-center p-4">
                        {/* <img
                          className="w-[200px] h-[100px] rounded-lg bd-cover"
                          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                          alt="movie"
                        /> */}
                        <div className="text-xl  ml-5 ">
                          {product.productName}
                        </div>
                      </td>
                      <td className="text-lg">{product.price}</td>
                      <td className="text-lg">{product.quantity}</td>
                      <td className="text-lg">{product.shopName}</td>
                      <td
                        className="text-lg text-red-600 cursor-pointer"
                        onClick={() => handleDelete(product)}
                      >
                        Delete
                      </td>
                      {/* <td onClick={()=>handleAddToCart(product)} className="text-red-600 cursor-pointer">
                        Add to Cart
                      </td> */}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {carts.length === 0 ? (
            <div className="flex justify-center items-center mt-[10rem]">
              <p className="text-2xl font-bold text-green-700">
                Please add products to Cart ....
              </p>
            </div>
          ) : (
            <div className=" flex justify-center mb-[20px] mt-8">
               <div className="bg-white ml-8 w-[20rem] h-[15rem] ">
          <div className ="flex">
          <i className="fa-solid fa-circle-check text-green-800 text-2xl pl-8 pt-8 flex" ></i>   
          <p className="text-green-800 pl-3 mt-6">Part of your order qualifies for FREE Delivery.</p>
          </div>
          <div className="text-center">
            <p className="text-xl ml-5 mt-5">Subtotal (  <span >{JSON.parse(localStorage.getItem('cartProducts')).length}</span> items) :  <i className="fa-solid fa-indian-rupee-sign"></i><span className="font-bold pl-1">{total}</span> </p>
            <button
                onClick={handleOrderInCart}
                className="  bg-yellow-500 p-[10px] w-[70%] border rounded-[20px] mt-[20px] border-black font-bold"
              >
                Proceed to Buy
              </button>
          </div>
        
        </div>
             
            </div>
          )}
        </div>

       
      </div>
    </>
  );
}

export default Cart;
