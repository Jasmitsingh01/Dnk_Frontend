import React from "react";

function Contact() {
  return (
    <div>
      <div className=" relative lg:absolute lg:bg-fixed top-0 w-full bg-banner-5 min-h-[30vh] min-[545px]:min-h-[50vh] lg:min-h-[80vh] bg-cover before:absolute before:h-full before:w-full before:top-0 before:-left-0 before:bg-nav before:z-10 z-0 mb-20  ">
        <h2 className=" absolute text-white text-3xl md:text-5xl font-semibold z-20 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact US
        </h2>
      </div>
      <div className="relative lg:top-[70vh] px-2 flex flex-col md:flex-row justify-between p-20 bg-slate-100">
        <div className="text-center md:text-left p-20 md:w-1/2">
          <h5 className=" font-semibold mb-3 text-xl">
            Don&#x27;t be a stranger!
          </h5>
          <h3 className=" text-3xl font-semibold">You tell us. We listen.</h3>
          <p>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend
            magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <div className="md:w-1/2">
          <form className="bg-white p-10 shadow">
            <div>
              <input
                type="text"
                placeholder="NAME"
                className=" w-full py-3 px-2 border-2 mb-5 outline-none shadow"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="SUBJECT"
                className=" w-full py-3 px-2 border-2 mb-5 outline-none shadow"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="EMAIL"
                className=" w-full py-3 px-2 border-2 mb-5 outline-none shadow"
              />
            </div>
            <div>
              <textarea
                placeholder="MESSAGE"
                cols="30"
                rows="10"
                className=" w-full py-3 px-2 border-2 mb-5 outline-none shadow"
              ></textarea>
            </div>
            <button className=" bg-blue-500 p-3 text-white font-semibold hover:bg-blue-700">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
