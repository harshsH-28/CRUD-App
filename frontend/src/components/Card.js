import React from "react";

export default function Card() {
  return (
    <div className="w-2/3 shadow-lg min-h-40 p-6 mb-14">
      <div className="flex justify-between items-center text-sm md:text-base">
        <h1>Author Name</h1>
        <div>
          <select name="options" id="options" placeholder="...">
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </div>
      <p className="my-6 text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio
        numquam saepe molestias delectus assumenda tenetur reprehenderit quas!
        Unde, provident!
      </p>
      <div className="flex justify-evenly items-center text-sm md:text-base">
        <button>
          <span>0</span> Like
        </button>
        <button className="">Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}
