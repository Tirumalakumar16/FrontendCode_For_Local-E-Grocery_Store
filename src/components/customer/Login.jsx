import { React, useEffect, useState } from "react";

import { postRequest, getAuthToken } from "../jsCode/Customer";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    if (getAuthToken() != null && getAuthToken() != "null") {
      navigate("/home");
    }
  });

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
        navigate("/home");

        console.log(response.data);
      })
      .catch(() => {
        alert("username or password is wrong");
      });
  };
  return (
    <>
      <NavBar />

      <div className="registration  flex flex-col justify-center items-center">
        <p className="font-bold mb-[15px] text-xl">
          Welcome To Local Grocery Store
        </p>
        <div className=" border rounded-[5px] w-[19rem]  h-[20rem] bg-white   ">
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
                <span className="text-green-700">
                  <a href="/register">Register</a>
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
