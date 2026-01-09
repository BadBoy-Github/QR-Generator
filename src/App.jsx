import { useState } from "react";

const App = () => {
  let [url, setUrl] = useState("https://elayabarathimv-portfolio.vercel.app/");
  let [inputCorrect, setInputCorrect] = useState(true);

  let defaultFunction = () => {
    let inputBox = document.getElementById("inputBox");
    let inputValue = inputBox.value;

    // Check inputValue is a link or url
    if (
      inputValue.includes(".com") ||
      inputValue.includes(".net") ||
      inputValue.includes(".org") ||
      inputValue.includes(".app") ||
      inputValue.includes(".in") ||
      inputValue.includes(".info") ||
      inputValue.includes(".biz") ||
      inputValue.includes(".ai") ||
      inputValue.includes(".io") ||
      inputValue.includes(".store") ||
      inputValue.includes(".tech") ||
      inputValue.includes(".online")
    ) {
      setInputCorrect(true);
      setUrl(inputValue);
    } else {
      setInputCorrect(false);
    }
  };

  const downloadQR = () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`;
    window.open(qrUrl, "_blank")
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-6">
        {inputCorrect ? (
          ""
        ) : (
          <p className="absolute top-32 text-red-600 w-52">
            Please enter a valid link or url
          </p>
        )}

        <input
          type="text"
          className="border-2 rounded-lg w-52 h-10 border-red-950 hover:border-red-800/40 focus:border-red-800 transition-all duration-300 outline-none p-3 text-zinc-950 bg-red-950/10"
          id="inputBox"
          placeholder="Enter link/url"
        />
        <button
          className="w-20 h-10 rounded-lg bg-red-800 hover:bg-red-700 hover:scale-105 active:bg-red-800 active:scale-100 transition-all duration-300 cursor-pointer text-md font-semibold text-white"
          onClick={defaultFunction}
        >
          Enter
        </button>
      </div>
      <div className="border border-red-700 bg-red-950/10 rounded-lg w-52 h-52 flex justify-center items-center">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`}
          alt=""
          className="w-44 h-44"
        />
      </div>
      <button className="w-32 h-12 rounded-lg bg-red-800 hover:bg-red-700 hover:scale-105 active:bg-red-800 active:scale-100 transition-all duration-300 cursor-pointer text-md font-semibold text-white" onClick={downloadQR}>
        Download
      </button>
    </div>
  );
};

export default App;
