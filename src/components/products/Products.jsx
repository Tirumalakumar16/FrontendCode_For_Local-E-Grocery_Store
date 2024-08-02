import React, { useEffect, useState } from "react";
import { getRequest ,getAuthToken } from "../jsCode/Customer";
import LogiNav from "../customer/LogiNav";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function Products() {


  let navigate = useNavigate()

  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])
  let [category, setcategory] = useState("");
  let [products, setProducts] = useState([]);
  let [pageNo,setPageNo] = useState(1)

  

  let handleSearch1 = (e) => {
    setcategory(e.target.value);
  };

  let handlePrevious = ()=>{

    if(pageNo == 1){
      setPageNo(1)
    } else {
      setPageNo(pageNo-1)
    }
  }

  let handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/product/${pageNo}`
    )
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNo]);

  let handleAddToCart = (product) =>{
    getRequest(
      "POST",
      `http://localhost:8888/www.localGrocery.com/customer/api/customer/cart`,
      {
        productName : product.productName
      }

    ).then((response)=>{
      console.log(response.data);
    }).catch(err => console.log(err.response.data))
  }

  return (
    <>
     <LogiNav />
    <div>
      <div className="flex items-center justify-center mt-10">
        <label htmlFor="" className="text-3xl font-bold mr-10">
          Category:
        </label>
        <input
          type="text"
          placeholder="Search By Category"
          onChange={handleSearch1}
          value={category}
          className="bg-gray-100 p-2 rounded-md placeholder-pink-400 w-[20rem] h-[3.5rem]  px-[2rem] border border-gray-400 hover:border-gray-500 text-xl font-bold border-solid outline-none"
        />
      </div>

      <div className="mt-8 rounded-lg ">
        <table className=" w-full border border-gray-600 rounded-lg  text-center ">
          <thead className="bg-gray-300 border border-gray-100 text-center">
            <tr>
              <th className="p-2  border border-gray-400">Product Name</th>
              <th className="border border-gray-400">Price</th>
              <th className="border border-gray-400">Available in KG's</th>
              <th className="border border-gray-400 ">Category</th>
              <th className="border border-gray-400 ">ShopName</th>
              <th className="border border-gray-400"></th>
            </tr>
          </thead>

          <tbody className="border border-gray-300 bg-gray-100">
            {products
              .filter((product) =>
                product.category.toLowerCase().includes(category)
              )
              .map((product) => {
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
                      <td className="text-lg">{product.category}</td>
                      <td className="text-lg">{product.shopName}</td>
                      <td onClick={()=>handleAddToCart(product)} className="text-red-600 cursor-pointer">
                        Add to Cart
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination next={handleNext} prevous={handlePrevious} pageNumber={pageNo}/>
    </div>
    </>
   
  );
}

export default Products;
