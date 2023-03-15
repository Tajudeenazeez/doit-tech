import Link from "next/link";
import React from "react";

const Login = () => {
  //usesatate

  const onSubmit = () => {};
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-2   bg-[#f5f5f5] w-[420px] h-[57vh] shadow shadow-gray-800/40 my-8 rounded rounded-lg hover:shadow-gray-800 ">
          <h2 className="text-2xl text-[#00283a] mt-4 font-bold leading">
            Log in
          </h2>

          <form onSubmit={onSubmit}>
            <div className="my-4 font-bold text-[#00283a]">
              <label className="text-xl my-2">Email</label>
              <input
                className="w-full h-12 rounded-lg px-4 focus:outline-none hover:border border-blue-200"
                type="text"
                placeholder="Enter email"
                onChange={() => {}}
                required
              />
            </div>
            <div className="my-4 font-bold text-[#00283a] ">
              <label className="text-xl my-2">Password</label>
              <input
                className="w-full h-12 rounded-lg px-4 focus:outline-none hover:border border-blue-200"
                type="password"
                placeholder="Enter password"
                onChange={() => {}}
                required
              />
            </div>
            <div className="flex justify-center align-center w-full">
              <button
                className="bg-[#00283a] text-white w-[9.5rem] h-[3.2rem] rounded-lg hover:bg-gray-300 hover:text-black "
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="flex">
          <p>New user ?</p>
          <Link  href="/signup"><button className="hover:border border-blue-200 rounded-sm">Sign up</button></Link>
          </div>
          <div className=" flex">
            <p className="px-2 text-xs">
              By clicking “Create Account” you agree to our ` terms and privacy
              policy. forgotten password ? click <button className="text-blue-300 hover:text-blue-800">here</button>
            </p>
            
          
        </div>
          </div>
      </div>
    </>
  );
};

export default Login;
