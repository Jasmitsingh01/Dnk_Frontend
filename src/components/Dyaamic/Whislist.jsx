import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clear, deletestoWhislist } from "../../Slices/Cart.slice";

function Whislist() {
  const dispacth=useDispatch()
const{whislist_items,whislist_TotalPrice}=  useSelector((selector)=>selector.Cart)
const MoveToCartHandler=()=>{
dispacth(addToCart(whislist_items))
dispacth(clear())
}
const DeleteFormWhislist=(id)=>{
  
dispacth(deletestoWhislist({id:id}))
}
return (
    <div>
      <h2 className=" text-xl p-5 border-b-2">WhisList</h2>
      <div>
  <div  className=" overflow-y-scroll min-h-[600px] max-h-[600px] py-5 ">
  {
        whislist_items?.map((item,indx)=> 
        <div key={item?._id} >
        <div className=" flex p-3 justify-between items-center">
        <div className=" flex">
          <div className="flex">
            <img
              src={item?.product_image[0]}
              alt="Product"
              className=" w-[50px] h-[50px] me-2"
            />
            <div>
              <h3 className=" text-lg">{item?.product_name}</h3>
              <p>${ item?.product_price}</p>
            </div>
          </div>
        </div>
        <button className=" border-2 border-black w-[30px] h-[30px] rounded-full " onClick={()=>DeleteFormWhislist(indx)}>
          X
        </button>
      </div>
     
      </div>)
      }
  </div>
       <div className="w-full p-3 absolute bottom-[50px] z-10 bg-white border-2 flex justify-between mb-5">
        <p className="text-lg font-semibold">Subtotal</p>
        <p>${whislist_TotalPrice}</p>
      </div>
        <button className=" absolute bottom-0 p-5 w-full bg-blue-700 text-white font-semibold hover:bg-blue-500 uppercase" onClick={MoveToCartHandler}>
          Move To Cart
        </button>
      </div>
    </div>
  );
}

export default Whislist;
