import React from "react";

function About() {
  return (
    <div>
      <div className=" relative lg:absolute lg:bg-fixed top-0 w-full bg-banner-3 min-h-[30vh] min-[545px]:min-h-[50vh] lg:min-h-[80vh] bg-cover before:absolute before:h-full before:w-full before:top-0 before:-left-0 before:bg-banner-overlay before:z-10 z-0 mb-20  ">
        <h2 className=" absolute text-white text-3xl md:text-5xl font-semibold z-20 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About US
        </h2>
      </div>
      <div className="flex flex-col justify-center  xl:flex-row text-center md:text-left relative lg:top-[70vh] xl:h-[500px] p-5 md:p-10 lg:p-20 bg-slate-200 ">
        <div className="  bg-white xl:w-1/2 p-10">
          <h3 className=" text-4xl font-semibold mb-3">Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit.
          </p>
        </div>
        <div>
          <img src={"/memeber.jpg"} alt="comapny" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
