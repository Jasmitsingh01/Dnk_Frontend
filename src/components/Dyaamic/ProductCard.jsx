/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useDeleteProduct } from "../../services/Product";
import { AddProduct } from "../../Slices/AllProducts";
import { useNavigate } from "react-router-dom";
import { addTowhislist } from "../../Slices/Cart.slice";

function ProductCard({
  _id,
  product_name,
  product_category,
  product_price,
  product_discount_price,
  product_image,
  product_quantity,
  product_sold,
  product_rating,

  data,
}) {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const stars = [1, 2, 3, 4, 5];
  const ActiveLocation = useSelector((state) => state.Location.AdminSide);
  let rating = [];
  for (let i = 0; i < product_rating; i++) {
    rating.push(i);
  }
  const Edithandler = (e) => {
    e.stopPropagation();
    dispacth(AddProduct(data));
    navigate("/admin/addProduct");
  };
  const NavigateHandler = () => {
    navigate(`/product/${_id}`);
  };
  const AddToWhislists = () => {
    dispacth(addTowhislist(data));
  };
  return (
    <div className="px-3" onClick={ActiveLocation ? null : NavigateHandler}>
      <div className=" relative mb-2">
        <img
          src={product_image}
          alt="Product"
          className="object-cover w-[120px] h-[120px]  min-[545px]:w-[250px] min-[545px]:h-[250px]"
        />
        <span className=" absolute  bg-white rounded-full px-2 py-1 top-1 md:top-[10px] md:left-[10px] text-sm border-0 shadow-md">
          Sale !
        </span>
      </div>
      <div>
        <div>
          <div className=" flex justify-between items-center pe-5">
            <h4 className="font-semibold mb-2 text-xs md:text-lg">
              {product_name}
            </h4>
            {ActiveLocation ? null : (
              <button
                className=" ms-2  text-red-500 "
                onClick={(e) => {
                  e.stopPropagation();
                  AddToWhislists();
                }}
              >
                <FaRegHeart className=" active:bg-red-500" />
              </button>
            )}
          </div>
          {ActiveLocation ? (
            <>
              <p className=" text-green-400 font-bold">
                {" "}
                Available : {product_quantity}{" "}
              </p>
              <p className=" text-red-400 font-bold">
                Already sold : {product_sold}{" "}
              </p>
            </>
          ) : (
            <p className=" text-gray-400">{product_category}</p>
          )}
          <p className=" font-semibold mb-3">
            <span
              className={` ${
                ActiveLocation ? `block ` : `line-through text-gray-400`
              }`}
            >
              {" "}
              {ActiveLocation ? "Actual Price :" : null}${product_price}
            </span>
            {ActiveLocation ? "Sale Price :" : null} $
            {product_price - product_discount_price}
          </p>

          {ActiveLocation ? (
            <>
              <button
                className="text-blue-500 border-blue-400 border-2 px-3 rounded-xl mx-3"
                onClick={(e) => Edithandler(e)}
              >
                Edit
              </button>
              <button
                className=" text-red-500 border-red-400 border-2 px-3  rounded-xl"
                onClick={() => useDeleteProduct(_id)}
              >
                Delete
              </button>
            </>
          ) : (
            <div className="flex gap-1  w-[80px]">
              {stars?.map((rating, index) => (
                <div key={index} className=" w-fit h-fit ">
                  {index >= product_rating ? (
                    <FaRegStar size={20} className=" text-yellow-400" />
                  ) : (
                    <FaStar size={20} className=" text-yellow-400" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
