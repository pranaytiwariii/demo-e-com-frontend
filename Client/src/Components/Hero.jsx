import React from "react";
import img from "/Navbar/log.png";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="flex px-5 sm:py-40 relative lg:pl-40">
      <div className="z-[-20] bg-white gap-5">
        <header className="text-center sm:py-[-40px] lg:text-left py-16">
          <h1 className="text-3xl lg:text-6xl font-bold pb-3">
            Leading Enterprise <br /> Ecommerce Platform in India
          </h1>
          <div className="flex text-2xl bold text-black mt-4">
            <div className="">Build whitelabelled. </div>
            <div className="text-lime-400">
              <Typewriter
                options={{
                  strings: ["B2B Marketplaces","Hyperlocal Marketplaces","Multicountry marketplaces"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <p className="text-gray-600 text-2xl mt-4">
            Designed for diverse B2B and B2C business models
          </p>
          <button className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white text-lg font-bold py-4 px-6 mt-8">
            SCHEDULE A DEMO
          </button>
        </header>
      </div>
      <img
        src={img}
        className="hidden lg:block lg:absolute z-[-10] lg:h-[800px] lg:top-[-20px] lg:right-0"
        alt=""
      />
    </div>
  );
}
