import React from "react";
import logo from "/Navbar/Amul.png";
import logo2 from "/product/5.png";
import logo3 from "/product/6.png";
import logo4 from "/product/7.png";
import logo5 from "/product/8.png";
import logo6 from "/product/9.png";
import logo7 from "/product/10.png";

export default function Section1() {
  return (
    <>
      <div className="sm:px-10 lg:px-40 flex justify-between">
        <div className=" hidden sm:grid gap-3 grid-cols-3 mt-[100px]">
          <div className="pt-28 sm:h-[300px] w-[100px] lg:h-[500px] lg:w-[200px] ">
            <div className="">
              <img
                src={logo}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-20 sm:h-40"
              />
            </div>
            <div className="h-[200px] w-[200px]">
              <img
                src={logo2}
                alt="Amul logo"
                className="w-auto flex justify-center border-4 px-8 py-8 bg-white shadow-2xl h-40"
              />
            </div>
          </div>
          <div className="h-[500px] w-[200px]">
            <div className="">
              <img
                src={logo3}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-40"
              />
            </div>
            <div className="">
              <img
                src={logo4}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-40"
              />
            </div>
            <div className="">
              <img
                src={logo5}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-40"
              />
            </div>
          </div>
          <div className="pt-28 h-[500px] w-[200px]">
            <div className="">
              <img
                src={logo6}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-40"
              />
            </div>
            <div className="">
              <img
                src={logo7}
                alt="Amul logo"
                className="w-auto border-4 px-4 py-8 bg-white shadow-2xl h-40"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-right sm:pt-[150px] sm:mt-[100px]">
          <h1 className="text-5xl pb-5 font-bold">
            Empowering Brands <br /> Across the Globe
          </h1>
          <p className="lg:hidden text-lg">
            StoreHippo ecommerce platform builds extraordinary solutions to
            power brands across 15 countries and 30+ industries. Add your brand
            to the long list of brands that trust StoreHippo.
          </p>
          <p className="hidden lg:flex text-lg">
            StoreHippo ecommerce platform builds <br /> extraordinary solutions
            to power brands across 15 <br /> countries and 30+ industries. Add
            your brand to <br />
            the long list of brands that trust StoreHippo.
          </p>
        </div>
      </div>
      <div className="lg:hidden flex-col">
        <div className="flex justify-center">
        <div className="">
            <img
              src={logo}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
          <div className="">
            <img
              src={logo2}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
          <div className="">
            <img
              src={logo3}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
          <div className="">
            <img
              src={logo4}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <img
              src={logo5}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
          <div className="">
            <img
              src={logo6}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
          <div className="">
            <img
              src={logo7}
              alt="Amul logo"
              className="w-auto border-4 px-2 py-6 bg-white shadow-2xl h-20 sm:h-40"
            />
          </div>
        </div>
      </div>
    </>
  );
}
