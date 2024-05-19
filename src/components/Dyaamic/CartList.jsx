/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { deletes, updateprice } from "../../Slices/Cart.slice";

function CartList({Product_name,Product_Price,Cart_quantity,image,index}) {
 const dispacth= useDispatch()
 const deleteHandler=(index,Price)=>{
dispacth(deletes({id:index,product_price:Price}))
 }
 const updateQuantity=(option,index)=>{
dispacth(updateprice({option:option,id:index}))
 }
  return (
    <ul>
      <li className=" p-5 md:flex md:items-center">
        <img
          src={image}
          alt="product"
          className="  md:w-[100px] md:h-[100px] md:rounded-full"
        />
        <div className=" flex justify-between m-4 md:w-1/2 lg:w-full">
          <p className=" text-xl text-nowrap me-5">{Product_name}</p>
          <p className=" text-xl text-nowrap">Price :${Product_Price}</p>
        </div>
        <div className="flex justify-between m-4 md:w-1/2 lg:w-full ">
          <input
            type="text"
            value={Cart_quantity}
            readOnly
            className="w-1/2 outline-none shadow-lg"
          />
          <div className="w-1/2 flex">
            <button className="w-1/2 min-w-[50px] shadow-lg bg-slate-400 border-2 py-2 " onClick={()=>updateQuantity('add',index)}>
              +
            </button>
            <button className="w-1/2 min-w-[50px] shadow-lg bg-slate-400 border-2 py-2 " onClick={()=>updateQuantity('remove',index)}>
              -
            </button>
          </div>
        </div>
        <button className="w-full min-w-[200px] md:mx-10 bg-red-600 shadow-lg border-0 py-3 text-white" onClick={()=>deleteHandler(index,Product_Price)}>
          Delete
        </button>
      </li>
    </ul>
  );
}

export default CartList;
