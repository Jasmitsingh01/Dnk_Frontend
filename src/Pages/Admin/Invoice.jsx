import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InvoiceTable from "../../components/Dyaamic/InvoiceTable.jsx";
import AdminPageHeader from "../../components/static/AdminPageHeader";
import { useForm } from "react-hook-form";
import Authencation from "../../utils/authencation.js";
import { useSelector } from "react-redux";

function Invoice() {
  const { register, handleSubmit, setValue } = useForm();
  const { Address, OrderItems, orderItemQunatity, Price } = useSelector(
    (state) => state.Invoice
  );
  const [items, setItem] = useState([1]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Authencation()) {
      navigate("/admin/signin");
    }
    if (Address) {
      setValue("address", Address);
      setItem(OrderItems);
      setValue("OrderItems", OrderItems);
      setValue("orderItemQunatity", orderItemQunatity);
      setValue("Price", Price);
    }
  }, []);
  const ReMoveItems = () => {
    items.pop();

    setItem([...items]);
  };
  return (
    <div className="w-full">
      <AdminPageHeader value={"Create Invoice"} />
      <form className="  px-3 w-full" onSubmit={handleSubmit}>
        <div className=" grid  md:grid-cols-2 md:gap-3 mb-3">
          <h3 className=" text-blue-950 underline font-bold text-lg mb-3 md:col-span-2">
            General
          </h3>
          <div className=" flex flex-col">
            <label
              htmlFor="invoiceNumber"
              className="text-blue-950 font-bold mb-2"
            >
              Invoice No.
            </label>
            <input
              type="text"
              placeholder=" invoice Number"
              name="invoiceNumber"
              id="invoiceNumber"
              {...register("Invoice_number")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="date" className="text-blue-950 font-bold mb-2">
              Invoice Date
            </label>
            <input
              type="date"
              className=" outline-none border-2 py-2 rounded"
              name="date"
              id="date"
              {...register("Invoice_date")}
            />
          </div>
          <div className=" flex flex-col">
            <label
              htmlFor="emailCompany"
              className="text-blue-950 font-bold mb-2"
            >
              Email
            </label>

            <input
              type="email"
              name="emailCompany"
              id="emailCompany"
              {...register("company_name")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="contactCompany"
              className="text-blue-950 font-bold mb-2"
            >
              Contact US
            </label>

            <input
              type="number"
              name="contactCompany"
              id="contactCompany"
              {...register("company_contact_number")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="paymentStatus"
              className="text-blue-950 font-bold mb-2"
            >
              Payment Status
            </label>
            <select
              name="paymentStatus"
              id="paymentStatus"
              {...register("payment_status")}
              className=" outline-none border-2 py-2 rounded"
            >
              <option value="Paid">Paid</option>
              <option value="unpaid">unpaid</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-3 mb-3">
          <h3 className=" text-blue-950 underline font-bold text-lg mb-3 md:col-span-2">
            Shipping
          </h3>
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-blue-950 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              id="fullName"
              {...register("customer_name")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-blue-950 font-bold mb-2"
            >
              Phone No.
            </label>
            <input
              type="number"
              placeholder="Phone number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("phone_number")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-blue-950 font-bold mb-2">
              Eamil
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="address" className="text-blue-950 font-bold mb-2 ">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="10"
              {...register("address")}
              className=" outline-none border-2 py-2 rounded"
            ></textarea>
          </div>

          <div className=" flex items-center">
            <input type="checkbox" name="sameAddress" id="sameAddress" />
            <label
              htmlFor="sameAddress"
              className="text-blue-950 font-bold mb-2 mx-2"
            >
              Will your Shipping & Billing address same?
            </label>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-3 mb-3">
          <h3 className=" text-blue-950 underline font-bold text-lg mb-3 md:col-span-2">
            Billing
          </h3>
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-blue-950 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              id="fullName"
              {...register("billing_name")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-blue-950 font-bold mb-2"
            >
              Phone No.
            </label>
            <input
              type="number"
              placeholder="Phone number"
              name="phoneNumber"
              id="phoneNumber"
              {...register("billing_phone")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-blue-950 font-bold mb-2">
              Eamil
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("billing_email")}
              className=" outline-none border-2 py-2 rounded"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="address" className="text-blue-950 font-bold mb-2">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="10"
              {...register("billing_address")}
              className=" outline-none border-2 py-2 rounded"
            ></textarea>
          </div>
        </div>
        <div className=" mb-5">
          <h3 className=" text-blue-950 underline font-bold text-lg mb-3">
            Product info
          </h3>
          {items.map((item, indx) => (
            <InvoiceTable key={indx} />
          ))}
          <div className=" flex justify-between items-start ">
            <button
              type="button"
              className=" border-2 border-dashed border-blue-400 text-blue-400 rounded-lg p-2"
              onClick={() => setItem([...items, 1])}
            >
              Add Item
            </button>
            <button
              type="button"
              className=" border-2 border-dashed border-red-400 text-red-400 rounded-lg p-2"
              onClick={() => {
                items.length > 1 ? ReMoveItems() : null;
              }}
            >
              Remove Item
            </button>
            <ul className=" items-end">
              <li className=" border-b-2 mb-2">Sub Total :</li>
              <li className=" border-b-2 mb-2">Estimated Tax (18%) : </li>
              <li className=" border-b-2 mb-2">Item Discounts : -$0</li>
              <li className=" border-b-2 mb-2">Shipping Charge:</li>
              <li className=" border-b-2 mb-2">Total Amount:</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-end mb-3 ">
          <div className=" flex items-start flex-wrap">
            <button
              type="reset"
              className=" border-2 p-2 mx-3  rounded-lg text-slate-300 "
            >
              Reset
            </button>
            <button className=" border-2 p-2 mx-3  border-green-400 rounded-lg text-green-400 mb-3 ">
              Create
            </button>
            <button className=" border-2 p-2 mx-3  border-blue-400 rounded-lg text-blue-400 ">
              Preview & Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Invoice;
