import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Footer({ top, display }) {
  return (
    <div className={` relative lg:top-[${top}vh] ${display}`}>
      <div className=" p-10 text-center md:text-left  border-b-2">
        <p className=" text-2xl">
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </p>
      </div>
      <div className="grid p-10 text-center md:text-left md:grid-cols-4 xl:justify-items-center md:items-center  lg:px-0 md:px-10 border-b-2">
        <div>
          <img
            src={"/black_logo.png"}
            alt="logo"
            className="w-[100px] h-[50px] md:w-[100px] md:h-[50px] object-contain mb-5 mx-auto md:mx-0"
          />
          <p className=" font-semibold  text-xl">
            The best look anytime, anywhere.
          </p>
        </div>
        <nav>
          <h5 className=" text-3xl mb-3">For Her</h5>
          <ul>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Women Jeans</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Tops and Shirts</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Women Jackets</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Heels and Flats</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Women Accessories</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 className=" text-3xl mb-3"> For Him</h5>
          <ul>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Men Jeans</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Men Shirts</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Men Shoes</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Men Accessories</Link>
            </li>
            <li className="mb-2">
              <Link className=" text-slate-400 ">Men Jackets</Link>
            </li>
          </ul>
        </nav>
        <form>
          <label htmlFor="subscribe" className=" text-3xl mb-10 inline-block">
            Subscribe
          </label>
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            placeholder="Enter Your email adress..."
            className=" block py-3 border-2  outline-none mb-10 mx-auto md:mx-0 w-full"
          />
          <button className=" bg-blue-500 p-3 text-white font-semibold hover:bg-blue-700">
            SUBSCRIBE
          </button>
        </form>
      </div>
      <div className="p-2 pb-4">
        <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
      </div>
    </div>
  );
}

export default Footer;
