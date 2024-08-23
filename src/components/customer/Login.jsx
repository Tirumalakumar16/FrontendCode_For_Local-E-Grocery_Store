import { React, useCallback, useEffect, useState } from "react";

import { postRequest, getAuthToken, getRequest } from "../jsCode/Customer";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    if (getAuthToken() != null && getAuthToken() != "null") {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, []);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let handleUserName = (e) => {
    //  e.preventDefault()
    //  console.log(e.target.value);
    setUserName(e.target.value);
  };
  let handlePassword = (e) => {
    // e.preventDefault()
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  //
  //this is for the navbar roles to decide which navbar to show and which to hide
  // this will be called when the user logs in
  // this will store the roles in the local storage
  // and then navigate to the home page
  // if the user is already logged in then it will navigate to the home page
  let handleNavRoles = useCallback(() => {
    getRequest(
      "GET",
      `http://localhost:8888/www.localGrocery.com/identity/api/identity`
    )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("navBarResult", JSON.stringify(response.data));
      })
      .catch((message) => console.log(message));
  }, []);

  // Login function to handle the login of the user and to store the token in the local storage
  //  and to navigate to the home page
  // if the user is already logged in then it will navigate to the home page
  //  and if the user is not logged in then it will show the alert message
  let handleLogin = (e) => {
    e.preventDefault();
    postRequest(
      "POST",
      `http://localhost:8888/www.localGrocery.com/identity/api/sign_in`,

      {
        username: username,
        password: password,
      }
    )
      .then((response) => {
        localStorage.setItem("localCart", response.data);
        handleNavRoles();
        setTimeout(() => {
          navigate("/home");
        }, 500);

        //console.log(response.data);
      })
      .catch(() => {
        alert("username or password is wrong");
      });
  };
  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center justify-center h-screen registration">
        <p className="font-bold mb-[15px] text-xl">
          Welcome To Local Grocery Store
        </p>
        <div className=" border rounded-[5px] w-[19rem]  h-[20rem] bg-white  ">
          <div className="p-[18px] text-2xl font-bold text-center">Login</div>
          <div>
            <form>
              <div>
                <input
                  className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your username"
                  onChange={handleUserName}
                  value={username}
                  required
                />
              </div>
              <div>
                <input
                  className="w-[15.5rem] outline-none border rounded-[5px] border-b-gray-400 ml-[1rem] p-[4px] text-md mt-[10px] text-left"
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                  onChange={handlePassword}
                  value={password}
                  required
                />
              </div>

              <div>
                <button onClick={handleLogin} className="btn-register">
                  Signin
                </button>
              </div>
              <div className="text-sm ml-[30px] mt-[1rem]">
                Don't have an account?
                <span className="text-green-700 underline">
                  <a href="/register">
                    <strong> Register</strong>
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
