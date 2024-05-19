import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Banner() {
  useGSAP(() => {
    gsap.from(".mian", {
      y: 100,
      duration: "1",
    });
  }, []);
  return (
    <section className="  relative  w-full bg-center bg-banner-1 bg-cover px-2 min-h-[80vh] lg:min-h-[100vh] before:absolute before:h-full before:w-full before:top-0 before:-left-0 before:bg-banner-overlay before:z-10 z-0  flex  items-center  lg:bg-fixed lg:w-full ">
      <div className=" text-center md:text-left z-20 mx-auto md:mx-20">
        <h1 className="mian text-4xl w-full min-[545px]:w-[500px] min-[545px]:text-5xl md:text-8xl md:w-[600px] lg:w-[800px] md:leading-normal	md:mb-1	 text-white font-semibold mb-4 line ">
          Raining Offers For Hot Summer!
        </h1>
        <p className="mian text-xl text-white min-[500px]:text-3xl md:mb-5 font-semibold mb-10 line">
          25% Off On All Products
        </p>
        <div className="mian">
          <button className=" py-3 w-full bg-white mb-4  hover:bg-black hover:text-white z-20 md:w-1/6 font-semibold md:me-5">
            SHOP NOW
          </button>
          <button className="  bg-transparent w-full  py-3 text-sm font-semibold border-2 border-white hover:border-transparent transition duration-75	ease-in-out hover:bg-white md:w-1/6	 hover:text-black text-white">
            FIND MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
