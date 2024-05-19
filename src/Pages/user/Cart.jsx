import React, { useState } from "react";
import { useEffect } from "react";
import { user_Authencation } from "../../utils/authencation";
import { useNavigate } from "react-router-dom";
import CartCard from "../../components/Dyaamic/CartCard";
import CartList from "../../components/Dyaamic/CartList";
import { useSelector } from "react-redux";
import { FaSadTear } from "react-icons/fa";
function Cart() {
  const { Cart_items } = useSelector((selector) => selector.Cart);

  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user_Authencation()) {
      setLogged(true);
    } else {
      navigate("/signin");
    }
  }, []);
  if (logged) {
    return Cart_items.length > 0 ? (
      <section className="flex flex-col min-[1090px]:flex-row justify-between border-2 m-4">
        <div className="min-[1090px]:w-1/2">
          {Cart_items.map((product, indx) => (
            <CartList
              key={indx}
              id={product?._id}
              index={indx}
              Product_name={product?.product_name}
              Product_Price={product?.product_price}
              Cart_quantity={product?.cart_quantity}
              image={product?.product_image[0]}
            />
          ))}
        </div>
        <div className="min-[1090px]:w-1/3  min-w-[200px] ms-4 ">
          <CartCard />
        </div>
      </section>
    ) : (
      <div className="flex flex-col min-h-screen items-center  pt-5">
        <FaSadTear size={200} className=" text-red-500 mb-10" />
        <h5 className=" text-5xl font-semibold">Your Cart is Empty</h5>
      </div>
    );
  }
}
export default Cart;
