import React from "react";

function Categorycard() {
  return (
    <section className="flex flex-wrap md:flex-nowrap md:gap-10 lg:justify-around flex-col sm:flex-row  justify-center px-3    ">
      <div className=" bg-card-1 bg-cover  bg-right-top w-full	md:w-[300px] h-[400px] lg:w-[400px] mb-5 flex flex-col ite justify-end px-3 py-5 relative before:absolute before:w-full before:h-full before:bg-nav before:top-0 before:left-0">
        <div className="z-[1]">
          <h3 className="text-white text-2xl font-semibold mb-2">
            20% Off On Tank Tops
          </h3>
          <p className="text-white text-sm font-semibold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            dictum.
          </p>
          <button className="py-3 w-full bg-white md:w-1/2  text-sm font-semibold hover:bg-black hover:text-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className=" bg-card-2 bg-cover  w-full lg:w-[400px]	md:w-[300px] h-[400px] mb-5 flex flex-col ite justify-end px-3 py-5 relative before:absolute before:w-full before:h-full before:bg-nav before:top-0 before:left-0">
        <div className="z-[1]">
          <h3 className="text-white text-2xl font-semibold mb-2">
            Latest Eyewear For You
          </h3>
          <p className="text-white text-sm font-semibold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            dictum.
          </p>
          <button className="py-3 w-full bg-white text-sm  md:w-1/2  font-semibold hover:bg-black hover:text-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className=" bg-card-3 bg-cover  w-full bg-right-top lg:w-[400px]	md:w-[300px] h-[400px] mb-5 flex flex-col ite justify-end px-3 py-5 relative before:absolute before:w-full before:h-full before:bg-nav before:top-0 before:left-0">
        <div className="z-[1]">
          <h3 className="text-white text-2xl font-semibold mb-2">
            Let&#x27;s Lorem Suit Up!
          </h3>
          <p className="text-white text-sm font-semibold mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            dictum.
          </p>
          <button className="py-3 w-full md:w-1/2 bg-white text-sm font-semibold hover:bg-black hover:text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categorycard;
