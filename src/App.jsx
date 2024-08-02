import { useEffect } from 'react'
import { getRequest } from './components/jsCode/Customer'
import './App.css'
import Home from './components/customer/Home'
import Login from './components/customer/Login'
import Logout from './components/customer/Logout'
import NavBar from './components/customer/NavBar'
import Registration from './components/customer/Registration'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import SaveDatails from './components/customer/SaveDatails'
import SaveDetails from './components/customer/UpdateDetails'
import UpdateDetails from './components/customer/UpdateDetails'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import AllProducts from './components/products/AllProducts'
import Profile from './components/customer/Profile'
import SaveAddress from './components/address/SaveAddress'
import Address from './components/address/Address'
import AddressLink from './components/address/AddressLink'
import Order from './components/orders/Order'
import Orders from './components/orders/Orders'
import Payments from './components/payments/Payments'
import AddProduct from './components/products/AddProduct'
import ChangePassword from './components/customer/ChangePassword'
function App() {
 
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
     
    <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/home' element= {<Home />} />
      <Route path='/updateDetails' element= {<UpdateDetails />} />
      <Route path='/saveDetails' element = {<SaveDatails/>} />
      <Route path='/' element = {<Home/>} />
      <Route path='/products' element = {<Products/>} />
      <Route path='/cart' element = { <Cart />} />
      <Route path='/allProducts' element = { <AllProducts />} />
      <Route path='/profile'  element={<Profile />} />
      <Route path='/saveAddress'  element={<SaveAddress />} />
      <Route path='/addresses' element= {<Address />} />
      <Route path='/addressLink' element={<AddressLink />} />
      <Route path='/order' element={<Order />} />
      <Route path='/orders' element ={<Orders />} />
      <Route path='/addProduct' element ={<AddProduct />} />
      <Route path='/changePassword' element ={<ChangePassword />} />

      


    </Routes>
    </BrowserRouter>
   
      </>
  )
}

export default App
