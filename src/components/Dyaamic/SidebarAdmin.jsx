import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidCartAlt } from "react-icons/bi";
import { BiSitemap } from "react-icons/bi";
import { AiFillContainer } from "react-icons/ai";
import logo1 from "../../assets/black_logo.png";
import { useState } from "react";
import { HideSideBar } from "/src/Slices/Admin.slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { DeleteProduct } from "../../Slices/AllProducts";

function SidebarAdmin() {
  const Dispacth = useDispatch();
  const Side = useSelector((state) => state.Location.AdminSidebar);
  const [Product, setProduct] = useState(false);
  const [order, setorder] = useState(false);
  const [billing, setbilling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.scrollY > 87) {
        document.getElementsByTagName("aside")[0].style.top = 0;
      } else if (e.currentTarget.scrollY <= 87) {
        document.getElementsByTagName("aside")[0].style.top = "88px";
      }
    });
  });

  return (
    <aside
      className={`fixed top-[91px] w-1/4 z-10 bg-white md:flex flex-col md:w-1/2 xl:w-1/6  py-2 px-2 h-[100vh] shadow-lg  ${
        Side ? "left-0" : "left-[-50%]"
      } transition-[left] duration-200 `}
    >
      <div
        className=" border-b-2 self-start pb-2 mx-auto w-full mb-5"
        onClick={() => Dispacth(HideSideBar())}
      >
        <img src={logo1} alt="company-logo" className=" mx-auto" />
        <p className="text-[20px] text-center">Your Favorite Store</p>
      </div>
      <div className=" flex flex-col ">
        <button className=" my-3 bg-blue-400 mb-7  py-2 rounded">
          <Link
            to={"/admin/"}
            className="flex items-center justify-center gap-3 "
          >
            <MdSpaceDashboard />
            Dashboard{" "}
          </Link>
        </button>
        <div className="mb-4">
          <button className="flex items-center my-3  bg-blue-400 justify-between gap-3 py-2 rounded w-full">
            <span
              className="flex items-center gap-3 mx-auto"
              onClick={() => setProduct(!Product)}
            >
              <BiSitemap />
              Product
            </span>{" "}
            <FaCaretRight />
          </button>
          <ul className={`${Product ? "" : "hidden"}`}>
            <li className=" border-b-2 py-2">
              <Link to={"/admin/allProduct"}>All Products</Link>
            </li>
            <li className=" border-b-2 py-2">
              <Link
                to={"/admin/addProduct"}
                onClick={() => Dispacth(DeleteProduct())}
              >
                Add Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <button
            className="flex items-center my-3 bg-blue-400 justify-between gap-3 py-2 rounded w-full"
            onClick={() => setorder(!order)}
          >
            <span className="flex items-center gap-3 mx-auto">
              <BiSolidCartAlt />
              Order
            </span>{" "}
            <FaCaretRight />
          </button>
          <ul className={`${order ? "" : "hidden"}`}>
            <li className=" border-b-2 py-2">
              <Link to={"/admin/allorder"}>All Orders</Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 ">
          <button className="flex items-center my-3 bg-blue-400 justify-between gap-3 py-2 rounded w-full">
            <span
              className="flex items-center gap-3 mx-auto"
              onClick={() => setbilling(!billing)}
            >
              <AiFillContainer />
              Billing
            </span>
            <FaCaretRight />
          </button>
          <ul className={`${billing ? "" : "hidden"}`}>
            <li>
              <Link to={"/admin/invoice"}>Create Invoice</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SidebarAdmin;
