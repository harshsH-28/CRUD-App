import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import NewTweet from "./NewTweet";
import UpdateTweet from "./UpdateTweet";
import SignUp from "./SignUp";
import Twitter from "./Twitter";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Twitter />} />
        <Route path="/new" element={<NewTweet />} />
        <Route path="/update" element={<UpdateTweet />} />
      </Routes>
    </div>
  );
}

export default App;
