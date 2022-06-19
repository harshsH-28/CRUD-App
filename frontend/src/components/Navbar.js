import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-12 bg-[#4369af] flex justify-around items-center">
      <NavLink to="/" className="md:w-2/4">
        Twitter
      </NavLink>
      <div className="hidden md:flex md:justify-around">
        <NavLink to="/login" className="mr-10 hover:font-medium">
          Login
        </NavLink>
        <NavLink to="/signup" className="ml-10 hover:font-medium">
          SignUp
        </NavLink>
        <NavLink to="/new" className="ml-10 hover:font-medium">
          New
        </NavLink>
      </div>
    </div>
  );
}
