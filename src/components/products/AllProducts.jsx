import React, { useEffect, useState } from "react";
import LogiNav from "../customer/LogiNav";
import { getRequest ,getAuthToken} from "../jsCode/Customer";
import { useNavigate } from "react-router-dom";

function AllProducts() {

  let navigate = useNavigate()

  useEffect(()=>{
    if(getAuthToken()== null || getAuthToken()=="null") {
      navigate('/login')
        alert("Session timed-out Please login....")
        
    }
  },[])

    const [products , setProducts] = useState([])
    let [search , setSearch] = useState('')

    

    let handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        getRequest(
          "GET",
          `http://localhost:8888/www.localGrocery.com/customer/api/customer/products`
        )
          .then((response) => {
            console.log(response);
            setProducts(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

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
      <LogiNav search={search} handleSearch={handleSearch}/>
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
                product.productName.toLowerCase().includes(search)
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
    </>
  );
}

export default AllProducts;
