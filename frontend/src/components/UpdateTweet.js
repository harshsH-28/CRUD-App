import React from "react";

export default function UpdateTweet() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-14 font-bold text-3xl">Update your Tweet</h1>
      <div className="bg-white w-1/3 h-[25em] p-10 shadow-lg flex justify-center items-center rounded-xl">
        <form
          action="/login"
          id="newtweet"
          className="flex flex-col justify-center items-center"
        >
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="tweet-title" className="mr-4">
              Tweet Title
            </label>
            <input
              type="text"
              id="tweet-title"
              placeholder="Tweet Title"
              className="p-2 border-2 boder-black"
            />
          </div>
          <div className="m-4 w-[75%] flex justify-center items-center">
            <label htmlFor="tweet" className="mr-4">
              Tweet
            </label>
            <textarea
              name="tweet"
              id="tweet"
              cols="30"
              rows="6"
              form="newtweet"
              className="p-2 border-2 boder-black"
            ></textarea>
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
