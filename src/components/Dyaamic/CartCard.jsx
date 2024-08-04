import React from "react";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { toast } from "react-toastify";
import { createorders } from "../../services/order";

const Styles = { shape: "rect", layout: "vertical", label: "buynow" };
 
function CartCard() {
  const { product_to_buy, total_price, Cart_items } = useSelector(
    (selector) => selector.Cart
  );
  const initialOptions = {
    clientId: import.meta.env.VITE_client_id_papyal,
    currency: "USD",
    intent: "capture",
    // Add other options as needed
  };
  const createOrder = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_order_url}/payment/create-paypal-order`,
        { cart: Cart_items, price: total_price }
      );

      const orderData = response.data;
      if (orderData.data.id) {
        return orderData.data.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  const Approve = async (data, actions) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_order_url}/payment/order/${data.orderID}/capture`
      );
      console.log(response);
      const orderData = await response.data?.data;
      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        return actions.restart();
      } else if (errorDetail) {
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else {
        const transaction = orderData.purchase_units[0].payments.captures[0];
        toast.success(`Transaction ${transaction.status}: ${transaction.id}.`);

        const Datas = {
          cart: JSON.stringify(Cart_items),
          Address: localStorage.getItem("_user_address"),
        };
        const Data = createorders(Datas);
        console.log(Data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const checkAddress = () => {
    const Address = localStorage.getItem("_user_address");
    if (
      Address !== "" &&
      Address !== undefined &&
      Address !== null &&
      Address !== "undefined"
    ) {
      return createOrder();
    } else {
      toast.error("Please Update Your Address");
    }
  };

  return (
    <div className="p-5">
      <ol className="list-decimal px-5 border-b-2 py-3">
        {product_to_buy.map((product, indx) => (
          <li className="mb-5" key={indx}>
            <div className=" flex justify-between">
              <p className=" text-xl">{product?.product_name}</p>
              <p className=" text-xl"> ${product?.product_price}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className=" flex flex-col  min-[475px]:flex-row justify-between mb-4 min-[1025px]:flex-col border-b py-3">
        <p className=" text-xl min-[425px]:text-2xl text-nowrap mb-3">
          Sub Total: ${total_price}
        </p>
        <p className=" text-xl min-[425px]:text-2xl text-nowrap mb-3">
          Shipping Price : $5
        </p>
      </div>
      <p className=" text-2xl min-[425px]:text-3xl mb-3">
        Total Payable : ${total_price + 5}
      </p>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={Styles}
          createOrder={checkAddress}
          onApprove={Approve}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default CartCard;
