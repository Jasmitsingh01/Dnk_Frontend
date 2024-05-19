import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { MdAddShoppingCart } from "react-icons/md";

function NavsideBar() {
  const location = useLocation();
  const [Data, setData] = useState([]);
  useEffect(() => {
    if (!location.pathname.includes("admin")) {
      setData([
        {
          name: "login",
          icon: <FaUserPlus />,
          urls: "/signin",
        },
        {
          name: "EVERYTHING",
          urls: "/store/everything",
        },
        {
          name: "WOMEN",
          urls: "/store/WOMEN",
        },
        {
          name: "MEN",
          urls: "/store/MEN",
        },
        {
          name: "ACCESSORIES",
          urls: "/store/ACCESORIES",
        },
      ]);
    } else {
      setData([
        {
          name: "Dashboard",
          icon: <AiOutlineDashboard />,
          urls: "/admin/dashbord",
        },
        {
          name: "Add Product",
          icon: <MdAddShoppingCart />,
          urls: "/admin/addProduct",
        },
        {
          name: "Invoice",
          icon: <TbFileInvoice />,
          urls: "/admin/invoice",
        },
       
        {
          name: "Profile",
          icon: <FaUserCircle />,
          urls: "/profile",
        },
       
      ]);
    }
  }, [location]);

  return (
    <div className="w-full bg-slate-200 min-h-screen flex flex-col ">
      <ul>
        {Data.map((items, index) => (
          <li key={index} className=" p-3  border-b-[1px]   border-black my-5">
            <Link
              to={`${items?.urls}`}
              className=" text-xl flex justify-between font-semibold"
            >
              {items?.name}
              {items?.icon}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <li className=" p-3  border-b-[1px]  border-black my-5">
          <Link to="/cart" className=" text-xl  font-semibold">
            <GiShoppingBag />
          </Link>
        </li>
        <li className=" p-3  border-b-[1px]  border-black my-5">
          <Link to="/about" className=" text-xl  font-semibold">
            About us
          </Link>
        </li>

        <li className=" p-3  border-black">
          <Link to="/contact" className=" text-xl  font-semibold">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavsideBar;
