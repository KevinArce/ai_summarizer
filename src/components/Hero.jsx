import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col dark:bg-slate-800 dark:text-white">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 dark:bg-slate-800 dark:text-white">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/KevinArce", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
        <button type="button" onClick={''} className="black_btn">
          {" "}
          <p>🌙</p>
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden dark:bg-slate-800 dark:text-white" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc dark:bg-slate-800 dark:text-white">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
