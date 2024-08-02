import React, { useState } from 'react'
import LogiNav from '../customer/LogiNav'
import { getRequest } from '../jsCode/Customer'

function AddProduct() {

    const [productName , setProductName] = useState('')
  const [quantity , setQuantity] = useState(0)
  const [price , setPrice] = useState(0)
  const [category , setCategory] = useState('')

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
    <div className=' h-[100vh] w-[110vw]'>
        <LogiNav />

        <div className='bg-blue-300 h-[100vh] flex justify-center items-center'>
    <div className=' border rounded-[5px] w-[18rem]  min-h-[22rem] bg-white float-left'>
      <div className='text-center font-bold text-xl mt-3 mb-3'>Add Product</div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Product Name' onChange={handleProductName} value={productName} />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="number" className='border border-b-blue-300 outline-none text-lg rounded pl-2 appearance-none' placeholder='Quantity' onChange={handleQuantity} value={quantity}/>
      </div>
      <div className='mt-2 text-center'>
       
        <input type="number" className='border border-b-blue-300 outline-none text-lg rounded pl-2 appearance-none' placeholder='Price'onChange={handlePrice} value={price}   />
      </div>
      <div className='mt-2 text-center'>
       
        <input type="text" className='border border-b-blue-300 outline-none text-lg rounded pl-2' placeholder='Category'onChange={handleCategory} value={category}  />
      </div>
     
      <div className='text-center mt-5'>
        <button className='p-3 bg-blue-500 border rounded' onClick={handleSaveProduct}>save</button>
      </div>
      <div className='mt-3'>
        <p className='text-center text-red-700 font-bold'>Don't use "/" in all fields</p>
      </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default AddProduct
