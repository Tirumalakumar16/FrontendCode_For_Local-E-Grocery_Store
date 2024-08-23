import React, { useCallback, useEffect, useState } from 'react'
import LogiNav from '../customer/LogiNav'
import { getRequest } from '../jsCode/Customer'

function AddProduct() {

    const [productName , setProductName] = useState('')
  const [quantity , setQuantity] = useState()
  const [price , setPrice] = useState()
  const [category , setCategory] = useState('')
  const [shopName , setShopName] = useState(null)

  let handleProductName = (e)=>{
    setProductName(e.target.value)
  }
  let handleQuantity = (e)=>{
    setQuantity(e.target.value)
  }
  let handlePrice = (e)=>{
    setPrice(e.target.value)
  }
  let handleCategory = (e)=>{
    setCategory(e.target.value)
  }

  let handleShop = useCallback(()=>{
    getRequest(
      "GET",  
      `http://localhost:8888/www.localGrocery.com/shop/api/shop`
      
    ).then((response)=>{
      console.log(response.data);
      setShopName(response.data.shopName)
      console.log(shopName);
    })
  },[])
  useEffect(()=>{
    handleShop()
  },[])
  let doesContainShopName =()=>{
    if(shopName == null || shopName == "null"){
      return false;
    } else {
      return true;
    }
  }

  let handleSaveProduct = ()=>{
    getRequest(

        "POST",
        `http://localhost:8888/www.localGrocery.com/shop/api/product`,
        {
            productName : productName,
            quantity : quantity,
            price : price,
            category : category
        }
    ).then((response)=>{
        console.log(response.data);
        alert("Product added successfully.....")
    })
  }

  return (
    <>
    <div className='w-full h-screen'>
        <LogiNav />
        
        <div className='flex items-center justify-center h-screen bg-blue-300'>
    <div className=' border rounded-[5px] w-[18rem]  min-h-[22rem] bg-white float-left'>
   {doesContainShopName() ? (<div></div>):(<div className='font-bold text-center text-red-700'>We didn't find any Shop in our database, please Add Shop</div>)}
      <div className='mt-3 mb-3 text-xl font-bold text-center'>Add Product</div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='pl-2 text-lg border rounded outline-none border-b-blue-300' placeholder='Product Name' onChange={handleProductName} value={productName} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="number" className='pl-2 text-lg border rounded outline-none appearance-none border-b-blue-300' placeholder='Quantity' onChange={handleQuantity} value={quantity}/>
      </div>
      <div className='mt-2 text-center'>
       
        <input type="number" className='pl-2 text-lg border rounded outline-none appearance-none border-b-blue-300' placeholder='Price'onChange={handlePrice} value={price}   />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='pl-2 text-lg border rounded outline-none border-b-blue-300' placeholder='Category'onChange={handleCategory} value={category}  />
      </div>
     
      <div className='mt-5 text-center'>
        <button className='p-3 bg-blue-500 border rounded' onClick={handleSaveProduct}>save</button>
      </div>
      <div className='mt-3'>
        <p className='font-bold text-center text-red-700'>Don't use "/" in all fields</p>
      </div>
      
    </div>
    
    </div>
    </div>
    
    </>
  )
}

export default AddProduct
