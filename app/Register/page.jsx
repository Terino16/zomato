"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Register = () => {
  const [firstname, setfirstName] = useState("");
  const [secondname, setsecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, SetuserCreated]=useState(null);


  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Req recived")
    try {
      fetch("/api/register", {
        method: 'POST',
        body: JSON.stringify({firstname,email,secondname, password}),
        headers: { 'Content-Type': 'application/json' },
      });
      SetuserCreated(true);
    } catch (error) {
      SetuserCreated(false);
      console.log(error);
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register an account
          </h2>
        </div>
        {userCreated && (<div className="text-xl text-black">
          User Created Successfully! Please Login to Continue
          </div>)}

          {userCreated==false && (<div> Some Error Occured. Please try Later</div>)}
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
           <div className="flex items-center justify-start">
           <div>
              <label htmlFor="username" className="sr-only">
            First Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First_Name"
              />
            </div>
            <div className="grow">
              <label htmlFor="username" className="sr-only">
            Last Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={secondname}
                onChange={(e) => setsecondName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last_Name"
              />
            </div>

           </div>
         
            <div>
              <label htmlFor="username" className="sr-only">
            Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

           
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <div>
              <button className="p-3 bg-teal-300 text-black text-xl w-full mt-3" onClick={()=>{signIn('google',{callbackUrl:'/'})}}>
                Sign in with google
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </a>
          </p>
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">Or register with</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
