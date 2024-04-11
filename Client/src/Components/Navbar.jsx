import React from "react";
import logo from "/Navbar/logo.png";
import { useState , userEffect } from "react";
import menu from "/Navbar/menu1.svg";
import close1 from "/Navbar/close1.svg";
import up from "/Navbar/up.png";
import down from "/Navbar/down.png";

const navLink = [
    {
      id: 0,
      header: "Examples",
      link: "/",
    },
    {
      id: 1,
      header: "Pricing",
      link: "/",
    }
  ];


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleClick = () => setToggle((prevToggle) => !prevToggle);
  const closeMenu = () => setToggle(false);

  const [navClick, setnavClick] = useState(false);
  const handleNav = () => setnavClick((prevNavClick) => !prevNavClick);

  const [navClick1, setnavClick1] = useState(false);
  const handleNav1 = () => setnavClick1((prevNavClick1) => !prevNavClick1);

  const [navClick2, setnavClick2] = useState(false);
  const handleNav2 = () => setnavClick2((prevNavClick2) => !prevNavClick2);

  return (
    <>
      <div className={`font-sans z-50 sm:px-32 py-5 ${
          isScrolled ? "bg-black" : "fixed w-full bg-white"
        }`}>
        <div className="z-30 pb-0 sm:px-6 ">
          <div className="flex items-center justify-between h-16 px-2 ">
            {/* Logo */}
            <div className="pb-5">
              <img src={logo} alt="" className="h-16" />
            </div>
            {/* Navlinks */}
            <div className="hidden md:flex">
              <div className="text-base 2xl:text-lg ml-10 flex items-baseline space-x-2">
                <div
                  className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                >
                  <ol className="text-[#505052] text-center px-2 py-10 rounded-md text-md font-medium">
                    <button onClick={handleNav} className="flex">
                      Solutions
                      {navClick ? (
                        <img className="h-5" src={up} alt="" />
                      ) : (
                        <img className="h-6" src={down} alt="" />
                      )}
                    </button>
                    {navClick && (
                      <div className="text-sm flex flex-col">
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          option 1
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          option 2
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          option3
                        </div>
                      </div>
                    )}
                  </ol>
                </div>
                <div
                  className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                >
                  <ol className="text-[#505052] text-center px-2 py-10 rounded-md text-md font-medium">
                    <button onClick={handleNav2} className="flex">
                      Develop
                      {navClick2 ? (
                        <img className="h-5" src={up} alt="" />
                      ) : (
                        <img className="h-6" src={down} alt="" />
                      )}
                    </button>
                    {navClick2 && (
                      <div className="text-sm flex flex-col">
                        <div
                          className="hover:text-[#6941C6]"
                          to=""
                        >
                          optoin1
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          option 2
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          optin 3
                        </div>
                      </div>
                    )}
                  </ol>
                </div>
                <div
                  className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                >
                  Examples
                </div>
                <div
                  className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                >
                  Pricing
                </div>
                <div
                  className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                >
                  <ol className="text-[#505052] text-center px-2 py-10 rounded-md text-md font-medium">
                    <button onClick={handleNav1} className="flex">
                      Resources
                      {navClick1 ? (
                        <img className="h-5" src={up} alt="" />
                      ) : (
                        <img className="h-6" src={down} alt="" />
                      )}
                    </button>
                    {navClick1 && (
                      <div className="text-sm flex flex-col">
                        <div
                          className="hover:text-[#6941C6]"
                          to="/"
                        >
                          option1
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/Riverside camping"
                        >
                          option 2
                        </div>
                        <div
                          className="hover:text-[#6941C6]"
                          to="/Mountaintop camping"
                        >
                          option 3
                        </div>
                      </div>
                    )}
                  </ol>
                </div>
              </div>
            </div>
            {/* lastlinks */}
            <div className="hidden  md:flex pb-5">
              <button className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white font-bold text-lg py-2 px-8 mt-8">
                SCHEDULE A DEMO
              </button>
            </div>

            {/* Hamburger */}
            <div className=" flex md:hidden">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white"
              >
                <span className="sr-only text-black">Open main menu</span>
                {toggle ? (
                  <img className="h-8 w-8" src={close1} alt="" />
                ) : (
                  <img className="h-8 w-8" src={menu} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        {toggle && (
          <div className="flex flex-col md:hidden">
            <ol className="text-[#505052]  px-2 py-1 rounded-md text-md font-medium">
              <button onClick={handleNav} className="flex pl-[30%] text-center">
                <p className="">Resources</p>
                {navClick ? (
                  <img className="h-5" src={up} alt="" />
                ) : (
                  <img className="h-6" src={down} alt="" />
                )}
              </button>
              {navClick && (
                <div className="flex flex-col text-center">
                  <div className="hover:text-[#6941C6]" to="/Lakeside camping">
                    option 1
                  </div>
                  <div className="hover:text-[#6941C6]" to="/Riverside camping">
                    option2
                  </div>
                  <div
                    className="hover:text-[#6941C6]"
                    to="/Mountaintop camping"
                  >
                    optoion 2
                  </div>
                </div>
              )}
            </ol>
            <div className="px-2 pt-1 space-y-1 sm:px-3">
              {navLink.map((step) => (
                <div
                  key={step.id}
                  to={step.link}
                  className="text-center cursor-pointer text-[#505052] hover:text-[#6941C6] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {step.header}
                </div>
              ))}
            </div>
            <button className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white font-bold text-lg py-2 px-8 mt-8">
                Start free trial
              </button>
              <button className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white font-bold text-lg py-2 px-8 mt-8">
                call 09999999999
              </button>
              <button className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white font-bold text-lg py-2 px-8 mt-8">
                SCHEDULE A DEMO
              </button>
          </div>
        )}
      </div>
    </>
  );
}
