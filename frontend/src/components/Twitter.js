import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Twitter() {
  const [tweet, setTweet] = useState("");

  return (
    <div className="min-h-screen box-border bg-slate-50 flex justify-center">
      <div className="w-screen min-h-screen md:w-2/4 py-10 bg-white shadow-xl flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">Here are your Tweets</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
