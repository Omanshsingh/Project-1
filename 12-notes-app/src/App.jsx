import React from "react";
import { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <div className="h-screen bg-gray-900 text-white p-10">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-start gap-4 flex-col w-1/2 justify-between p-10"
      >
        <textarea
          type="text"
          className="px-5 h-20 w-full py-2 font-medium border-2 rounded-md outline-none"
          placeholder="Enter your note"
        />
        <textarea
          type="text"
          className="px-5 h-32 w-full py-2 font-medium border-2 rounded-md outline-none"
          placeholder="write details"
        />
        <button
          type="submit"
          className="px-5 h-12 w-full font-medium rounded-md text-black outline-none bg-white hover:bg-gray-200 transition-colors"
        >
          Add Note
        </button>
        {/* <img
          className="h-52 flex object-cover rounded-md"
          src="https://gallery.yopriceville.com/downloadfullsize/send/14426"
          alt=""
        /> */}
      </form>
      <div className="h-32  w-32"></div>
    </div>
  );
};

export default App;
