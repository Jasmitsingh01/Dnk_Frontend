/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_white.png";
import logo1 from "../../assets/black_logo.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { BsBagHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import NavsideBar from "../static/NavsideBar";
import Whislist from "./Whislist";
import { useSelector } from "react-redux";

function Navbar({ color, Data }) {
  const Show = (id) => {
    document.getElementById(`${id}`).style.right = "0%";
  };
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("_user_access_token");
    if (token !== null && token !== undefined && token !== "") {
      setlogged(true);
    } else {
      setlogged(false);
    }
  });
  const Hide = (id) => {
    document.getElementById(`${id}`).style.right = "-100%";
  };
  const { count } = useSelector((seletor) => seletor.Cart);
  return (
    <header
      className={`flex items-center justify-between py-5 px-3 relative ${
        color === "transparent" ? "bg-transparent" : "bg-sky-800"
      }   lg:before:absolute  lg:before:w-full lg:before:h-full lg:before:bg-nav lg:before:top-0 lg:before:left-0 lg:before:z-10`}
    >
      <div className="z-20 flex ">
        <Link to={"/"}>
          {" "}
          <picture className=" py-3 ">
            <source media="(min-width:1024px)" srcSet={logo} />
            <img
              src={logo1}
              alt="logo"
              className="w-[100px] h-[50px] md:w-[100px] md:h-[50px] object-contain"
            />
          </picture>
        </Link>

        <ul className="flex  items-center px-2 ">
          {Data?.map((items, index) => (
            <li className="z-20 hidden lg:block lg:me-3" key={index}>
              <Link to={`/store/${items}`} className=" text-xl text-white ">
                {items.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="flex  items-center px-2 ">
          {Data?.length > 0 ? (
            <li className="z-20 hidden lg:block lg:me-2">
              <Link to="/" className=" text-xl text-white ">
                Home
              </Link>
            </li>
          ) : null}
          <li className="z-20 hidden lg:block lg:me-2">
            <Link to="/about" className=" text-xl text-white">
              About us
            </Link>
          </li>
          <li className="z-20 hidden lg:block lg:me-2">
            <Link to="/contact" className="text-xl  text-white">
              Contact us
            </Link>
          </li>
          {logged ? (
            <li className="z-20 hidden lg:block lg:me-2">
              <Link to="/profile" className=" text-xl text-white ">
                <FaUser />
              </Link>
            </li>
          ) : (
            <li className="z-20 hidden lg:block lg:me-2">
              <Link to="/signin" className=" text-xl text-white ">
                Login
              </Link>
            </li>
          )}

          {Data?.length > 0 ? (
            <>
              <li className=" z-20 hidden lg:block lg:me-2 ">
                <Link
                  to={"/cart"}
                  className=" text-lg lg:text-xl ms-3 me-6 relative lg:text-white"
                >
                  <GiShoppingBag />{" "}
                  <span className="absolute block  rounded-full bg-black lg:bg-white lg:text-black text-white text-sm  top-[10px] px-2 right-[-20px] ">
                    {count}
                  </span>
                </Link>
              </li>
              <li className=" self-end mb-1 lg:self-center lg:m-0 z-20 ">
                <button
                  className=" text-lg lg:text-xl ms-3 me-6 relative lg:text-white"
                  onClick={() => Show("whislist")}
                >
                  <BsBagHeartFill />{" "}
                </button>
              </li>
            </>
          ) : null}

          <li>
            <button
              className="bg-black text-white p-2 text-2xl lg:hidden "
              onClick={() => Show("sideNav")}
            >
              <IoMenuSharp />
            </button>
          </li>
          <li
            id="sideNav"
            className=" fixed w-full h-screen md:w-1/2 shadow-xl lg:hidden   top-0  -right-full transition-[right] ease-in-out duration-[5] z-30"
          >
            <NavsideBar />
            <button
              className=" absolute top-0 right-0 p-3 m-2 rounded shadow text-xl font-semibold"
              onClick={() => {
                Hide("sideNav");
              }}
            >
              X
            </button>{" "}
          </li>
          <li
            id="whislist"
            className=" fixed w-full h-screen  md:w-1/2 lg:w-1/4 shadow-xl bg-white     top-0   -right-full transition-[right] ease-in-out duration-[5] z-30"
          >
            <Whislist />{" "}
            <button
              className=" absolute top-0 right-0 p-3 m-2 rounded shadow text-xl font-semibold"
              onClick={() => {
                Hide("whislist");
              }}
            >
              X
            </button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
