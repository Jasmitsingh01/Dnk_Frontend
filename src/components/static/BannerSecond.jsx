import React from "react";

function BannerSecond() {
  return (
    <div className="bg-banner-2 xl:min-h-[60vh]  min-h-[30vh] xl:bg-fixed  bg-cover  bg-right relative before:absolute before:h-full before:w-full before:top-0 before:-left-0 before:bg-banner-overlay before:z-10 z-0  flex  items-center">
      <div className="z-20 w-full text-center md:text-left md:w-1/2  px-3 md:ps-10 ">
        <h3 className="text-xl  lg:text-2xl  text-slate-200 font-semibold mb-4">
          Limited Time Offer
        </h3>
        <h3 className=" text-3xl lg:text-5xl text-white font-semibold mb-4">
          Special Edition
        </h3>
        <p className="text-slate-200 font-semibold mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vitae a
          illum quo, fugiat nesciunt voluptatum odit iure obcaecati ut.
        </p>
        <button className="py-3 w-full bg-white mb-4 hover:bg-black hover:text-white z-20 md:w-1/3 md:me-10">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default BannerSecond;
