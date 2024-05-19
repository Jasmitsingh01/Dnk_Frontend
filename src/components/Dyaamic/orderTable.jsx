import React from "react";

import { GoTriangleUp } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from "react";
import { GetOrder } from "../../services/order";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { setDetails } from "../../Slices/Invoice.slice";
import { useNavigate } from "react-router-dom";

function OrderTable() {
  const [Active, setActive] = useState(false);
  const [order, setorder] = useState([]);
  const [pop, setpop] = useState(false);
  const [select, setselect] = useState(null);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    GetOrder(true)
      .then((response) => {
        setorder(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(order);
  const Invoice = () => {
    dispacth(
      setDetails({
        Address: order?.[select]?.deliveredLocation,
        OrderItems: order?.[select]?.orderItem,
        orderItemQunatity: order?.[select]?.orderItemQuantity,
        Price: order?.[select]?.orderTotal,
      })
    );
    navigate("/admin/invoice");
  };
  const updateStatus = () => {};
  return (
    <div>
      <Popup open={pop} className=" relative w-screen">
        <button
          className=" bg-black text-white rounded-full px-3 py-2 absolute right-[-5px] top-[-20px]"
          onClick={() => setpop(false)}
        >
          &times;
        </button>
        <div className=" w-full bg-slate-300  p-5 ">
          <div className=" flex items-center text-2xl pb-2 mb-5 gap-10 border-b-2 border-white">
            <p>Product Name</p>
            <p>Product Price</p>
            <p>Product Qunatity</p>

            <p>Delviery Address</p>
          </div>
          {order?.[select]?.orderItem?.map((items, index) => (
            <div
              key={index}
              className=" flex items-center justify-between mb-5"
            >
              <p className=" text-lg">{items?.product_name}</p>
              <p className=" text-lg">${items?.product_price}</p>
              <p className=" text-lg">
                {order?.[select]?.orderItemQuantity[index]}
              </p>

              <p className=" text-lg">{order?.[select]?.deliveredLocation}</p>
            </div>
          ))}
          <div className=" flex gap-5">
            <input
              type="text"
              placeholder="enter Product status"
              className=" p-3 outline-none rounded-md"
            />
            <button
              className=" bg-blue-600  capitalize px-4 text-white rounded-md"
              onClick={() => updateStatus()}
            >
              update status
            </button>
            <button
              className=" bg-orange-600  capitalize px-4 text-white rounded-md"
              onClick={() => Invoice()}
            >
              Create Invoice
            </button>
          </div>
        </div>
      </Popup>
      <table className=" hidden lg:table w-full">
        <tr className="flex justify-between w-full">
          <th className="  border-b-2  py-2 w-full">#ORDER</th>
          <th className=" border-b-2   py-2 w-full">Product</th>
          <th className=" border-b-2   py-2 w-full">Payment</th>
          <th className=" border-b-2   py-2 w-full">Delviery location</th>

          <th className=" border-b-2   py-2 w-full">order Status</th>
          <th className=" border-b-2   py-2 w-full">Action</th>
        </tr>
        {order.map((order, indx) => (
          <tr className=" flex justify-between " key={order?._id}>
            <td className=" border-b-2 w-full flex justify-center items-center">
              <p className=" text-blue-800 font-bold ">#{order?._id}</p>
            </td>
            <td className=" border-b-2 w-full flex justify-center  p-3">
              <img
                src={order?.orderItem?.[0]?.product_image?.[0]}
                alt="product-image"
                className=" w-[100px] h-[100px] object-cover"
              />
            </td>

            <td className=" border-b-2 w-full flex flex-col justify-center items-center">
              <p className=" font-bold">${order?.orderTotal}</p>
              <p>Fully Paid</p>
            </td>
            <td className=" border-b-2 w-full flex flex-col justify-center items-center">
              <p className=" font-bold">{order?.deliveredLocation}</p>
            </td>
            <td className=" border-b-2 w-full flex justify-center items-center">
              {order?.orderSatuts}
            </td>
            <button
              className=" border-b-2 w-full flex justify-center items-center"
              onClick={() => {
                setpop(!pop);
                setselect(indx);
              }}
            >
              <FiEdit size={20} className=" mx-2" />
              <p className=" text-blue-950 font-bold">Edit</p>
            </button>
          </tr>
        ))}
      </table>
      {order?.map((orders, indx) => (
        <div
          className="lg:hidden px-2 flex flex-col shadow-xl  mb-3"
          key={indx}
        >
          <div className=" flex items-center justify-between px-2 mb-5">
            <p className=" text-blue-950 font-bold ">#{orders?._id}</p>
            <div>
              <button
                className={`${
                  Active == indx ? "rotate(-180deg)" : "rotate(0deg)"
                } mx-2`}
                id="rotate"
                onClick={() => {
                  setActive(!Active);
                  setselect(indx);
                  document.getElementById("rotate").style.transform = `${
                    Active && select == indx
                      ? "rotate(-180deg)"
                      : "rotate(0deg)"
                  }`;
                }}
              >
                <GoTriangleUp size={20} />
              </button>
            </div>
          </div>
          <div className={`${Active && select == indx ? "block" : "hidden"}`}>
            <p className=" border-2 py-3 rounded rounded-b-none px-3">
              Product{" "}
            </p>
            <div className=" border-2 border-t-0 p-3 flex justify-between">
              <img
                src={orders?.orderItem?.[0]?.product_image?.[0]}
                alt="product-image"
                className="w-[100px] h-[100px]"
              />
              <div className="ms-5">
                <p className=" text-blue-950 font-bold">Dnk Bule Shoes</p>
                <p className=" text-gray-400 font-bold ">
                  Total price :${orders?.orderTotal}
                </p>
                <p className=" text-gray-500 font-bold ">
                  Qunatity :
                  {orders?.orderItemQuantity?.reduce(
                    (prve, curr) => prve + curr,
                    0
                  )}
                </p>
              </div>
            </div>
            <table className="flex">
              <tr className=" w-1/2">
                <th className="block py-5  border-2 border-t-0">Payment</th>
                <th className="block py-5  border-2 border-t-0">
                  Delivery Address
                </th>

                <th className="block py-5  border-2 border-t-0">status</th>
              </tr>
              <tr className="flex flex-col w-full">
                <td className="block py-2  px-3  border-2 border-t-0 border-s-0">
                  <p className=" font-bold">${orders?.orderTotal}</p>
                  <p>Fully Paid</p>
                </td>
                <td className="block py-5 px-3 border-2 border-t-0 rounded-b border-s-0">
                  <p className=" font-bold">{orders?.deliveredLocation}</p>
                </td>
                <td className="block py-5 px-3 border-2 border-t-0 rounded-b border-s-0">
                  {orders?.orderSatuts}
                </td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderTable;
