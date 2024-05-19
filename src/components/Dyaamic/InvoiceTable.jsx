import React from "react";

function InvoiceTable() {
  return (
    <div className=" overflow-x-auto mb-3">
      <table className=" w-full">
        <thead className="  ">
          <tr className=" py-3 w-full">
            <th className=" border-2">ITEM NAME</th>
            <th className=" border-2">QUANTITY</th>
            <th className=" border-2">PRICE</th>
            <th className=" border-2">DISCOUNT </th>
            <th className=" border-2">TAX </th>
            <th className=" border-2">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="  flex flex-col  border-2 px-2">
              <input
                type="text"
                placeholder="Item Name"
                className="w-full outline-none border-2 py-2 mb-2 rounded"
              />
              <input
                type="text"
                placeholder="Product discription (option)"
                className=" outline-none border-2 py-2 mb-2 rounded"
              />
            </td>
            <td className="w-1/6 border-2 px-2">
              <div className=" flex  items-center justify-center">
                <button className=" border-2 px-5 py-2 rounded mb-2 mx-1">
                  -
                </button>
                <input
                  type="number"
                  className=" outline-none border-2 py-2 mb-2 rounded"
                />
                <button className=" border-2 px-5 py-2 rounded mb-2 mx-1">
                  +
                </button>
              </div>
              <button className="block mx-auto  text-red-400 border-2 p-2 rounded border-red-400">
                Delete
              </button>
            </td>
            <td className="w-1/6  border-2 px-2">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                className=" outline-none border-2 py-2 mb-2 rounded ms-3"
              />
            </td>
            <td className=" w-1/6 border-2 px-2">
              <input
                type="number"
                name="discount"
                id="discount"
                placeholder="Discount"
                className=" outline-none border-2 py-2 mb-2 rounded ms-3"
              />
            </td>
            <td className="w-1/6  border-2 px-2">
              <input
                type="number"
                name="tax"
                id="tax"
                placeholder="Tax"
                className=" outline-none border-2 py-2 mb-2 rounded ms-3"
              />
            </td>
            <td className="w-1/6  border-2 px-2">
              <p>$0</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;
