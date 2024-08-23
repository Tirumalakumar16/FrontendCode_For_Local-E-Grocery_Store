import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./NavCss.css";

function LogiNav({ search, handleSearch }) {
  let navigate = useNavigate();

  const [roles, setRoles] = useState([]);
  let check = JSON.parse(localStorage.getItem("navBarResult"));

  //
  //  //this is for the navbar roles to decide which navbar to show and which to hide
  //  // this will be called when the user logs in
  //  // this will store the roles in the local storage
  useEffect(() => {
    setRoles(check.roles.split(","));
  }, []);
  // console.log(roles);
  let doesContain = () => {
    if (roles.includes("ROLE_CUSTOMER")) {
      return true;
    } else {
      return false;
    }
  };
  let handleNavigate = () => {
    navigate("/allProducts");
  };
  return (
    <>
      <div className="flex items-center justify-between bg-gray-600 flex-nowrap ">
        {doesContain() ? (
          <>
            <div className="navbar ">
              <div className="dropdown ">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                  <div className="text-start ml-[4px] font-bold text-lg text-black mt-[5px] underline">
                    Address
                  </div>
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/saveAddress"
                  >
                    Save address
                  </a>
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/addresses"
                  >
                    Addresses
                  </a>
                  <div className="text-start ml-[4px] font-bold  text-lg text-black mt-[5px] underline">
                    Cart
                  </div>
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/cart"
                  >
                    Cart details
                  </a>

                  <div className="text-start ml-[4px] font-bold text-lg text-black mt-[5px] underline">
                    Orders
                  </div>
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/orders"
                  >
                    Your Orders
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                href="/home"
                className="cursor-pointer text-black text-xl font-extrabold hover:text-red-900 p-[23px] hover:bg-white"
              >
                Home
              </a>
            </div>
            <div className="">
              <Link
                to="/cart"
                className="cursor-pointer text-black font-extrabold text-xl hover:text-pink-900 p-[23px] hover:bg-white"
              >
                Cart
              </Link>
            </div>
            <div className="flex items-center bg-gray-600 ">
              <div className="navbar ">
                <div className="dropdown ">
                  <button className="dropbtn">Profile</button>
                  <div className="dropdown-content">
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/saveDetails"
                    >
                      Save profile
                    </a>
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/profile"
                    >
                      Profile
                    </a>
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/changePassword"
                    >
                      Change Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Link
                to="/products"
                className="cursor-pointer text-black font-extrabold text-xl hover:text-pink-900 p-[23px] hover:bg-white"
              >
                Products
              </Link>
            </div>
            <div>
              <input
                className="cursor-pointer ml-[20px] outline-none border rounded-[5px] border-gray-500 text-white font-bold text-xl  p-2  bg-gray-300"
                type="text"
                placeholder="search for products"
                onChange={handleSearch}
                value={search}
                onClick={handleNavigate}
              />
            </div>
            {/* <div className="">
              <Link
                to="/logout"
                className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
              >
                Logout
              </Link>
            </div> */}
            <div className="flex items-center bg-gray-600 ">
              <div className="navbar ">
                <div className="dropdown ">
                  <button className=" dropbtn">
                    <span className="font-sans text-xl text-yellow-600">
                      Hello,{check.username}
                    </span>
                  </button>
                  <div className="dropdown-content">
                  <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/profile"
                    >
                      Profile
                    </a>
                    <Link
                      to="/logout"
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <a
                href="/home"
                className="cursor-pointer text-black text-2xl font-extrabold hover:text-red-900 p-[23px] hover:bg-white"
              >
                Home
              </a>
            </div>
            <div className="navbar ">
              <div className="dropdown ">
                <button className="dropbtn">Address</button>
                <div className="dropdown-content">
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/saveAddress"
                  >
                    Save Address
                  </a>
                  <a
                    className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    href="/addresses"
                  >
                    Addresses
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center bg-gray-600 ">
              <div className="navbar ">
                <div className="dropdown ">
                  <button className="dropbtn">Product</button>
                  <div className="dropdown-content">
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/addProduct"
                    >
                      Add Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-gray-600 ">
              <div className="navbar ">
                <div className="dropdown ">
                  <button className="dropbtn">Shop</button>
                  <div className="dropdown-content">
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/addShop"
                    >
                      Add Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-600 ">
              <div className="navbar ">
                <div className="dropdown ">
                  <button className=" dropbtn">
                    <span className="font-sans text-xl text-yellow-600">
                      Hello,{check.username}
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/saveDetails"
                    >
                      Save profile
                    </a>
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/profile"
                    >
                      Profile
                    </a>
                    <a
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                      href="/changePassword"
                    >
                      Change Password
                    </a>
                    <Link
                      to="/logout"
                      className="cursor-pointer text-black font-bold text-xl hover:text-pink-900  p-[23px] hover:bg-white "
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LogiNav;
