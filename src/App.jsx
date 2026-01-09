import React from "react";

const App = () => {
  let url = "https://elayabarathimv-portfolio.vercel.app/";
  return (
    <div className="bg-zinc-800 w-full h-[100vh] flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-6">
        <input
          type="text"
          className="border-2 rounded-lg w-52 h-10 border-zinc-700 hover:border-red-800/40 focus:border-red-800 transition-all duration-300 outline-none p-3 text-white"
        />
        <button className="w-20 h-10 rounded-lg bg-red-800 hover:bg-red-700 hover:scale-105 active:bg-red-800 active:scale-100 transition-all duration-300 cursor-pointer text-md font-semibold">
          Enter
        </button>
      </div>
      <div className="">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`}
          alt=""
        />
      </div>
      <button>Download</button>
    </div>
  );
};

export default App;
