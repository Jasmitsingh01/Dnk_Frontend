import React from "react";


function SideBarProduct({setprice,setname}) {
  
  return (
    <div className=" bg-transparent w-full ">
      <form>
        <div className=" flex flex-col mb-10">
        <label htmlFor="name" className=" text-4xl mb-3">
            Filter by Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Search product..."
            className=" p-2 w-full shadow outline-none me-3"
            onChange={(e)=>setname(e.target.value)}
          />
          
        
        </div>
        <div className=" mb-3">
          <label htmlFor="range" className=" text-4xl">
            Filter by Price
          </label>
        </div>
        <div className=" mb-10">
          <input type="range" className=" w-1/2" min={10} max={1000} onChange={(e)=>setprice(e.target.value)} />
        </div>
        <button
          type="button"
          className=" py-1 px-3 text-white w-1/3 mb-5 bg-blue-600"
        >
          FILTER
        </button>
      </form>
    </div>
  );
}

export default SideBarProduct;
