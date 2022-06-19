import React from "react";

export default function SignUp() {
  return (
    <div className="bg-slate-50 min-h-screen flex justify-center items-center">
      <div className="bg-white w-1/3 h-[30em] p-10 shadow-lg flex justify-center items-center rounded-xl">
        <form
          action="/login"
          className="flex flex-col justify-center items-center"
        >
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="username" className="mr-4">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="p-2 border-2 boder-black"
            />
          </div>
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="name" className="mr-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="p-2 border-2 boder-black"
            />
          </div>
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="password" className="mr-4">
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              className="p-2 border-2 boder-black"
            />
          </div>
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="confirmpassword" className="mr-4">
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="p-2 border-2 boder-black"
            />
          </div>
          <button
            type="submit"
            className="bg-[#4369af] rounded-lg w-20 h-10 self-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
