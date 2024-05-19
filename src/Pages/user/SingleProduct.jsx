import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  updateProduct,
  useFindParticularProduct,
} from "../../services/Product";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Slices/Cart.slice";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

import { addTowhislist } from "../../Slices/Cart.slice";

function SingleProduct() {
  const Location = useLocation();
  const dispacth = useDispatch();
  const [Product, setProduct] = useState(null);
  const [indexes, setindex] = useState(0);
  const [ids, setId] = useState("");
  const rating = [1, 2, 3, 4, 5];
  useEffect(() => {
    const id = Location.pathname.split("/")[2];
    setId(id);
    useFindParticularProduct(id)
      .then((data) => {
        setProduct(data);
        setindex(data?.product_rating);
        console.log(data);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, []);

  const AddtoCartHandler = () => {
    dispacth(addToCart(Product));
  };
  const AddToWhislists = () => {
    dispacth(addTowhislist(Product));
  };
  const AddRatingHandler = (index, update) => {
    if (update) {
      //Update the rating  of the product
      updateProduct({ product_rating: index + 1 }, ids);
    }
    setindex(index + 1);
  };
  const RemoveRatingHandler = (index) => {
    setindex(index);
  };

  return (
    <>
      <div className=" flex flex-col lg:flex-row px-5 my-10">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={Product?.product_image[0]}
            alt="Product image"
            className="w-full  lg:w-[400px] h-[400px] object-cover"
          ></img>
        </div>
        <div className=" w-full px-5">
          <h3 className="  font-semibold mb-3">
            {Product?.product_for_gender}
          </h3>
          <h2 className=" text-3xl mb-3">{Product?.product_name}</h2>
          <h3 className=" text-2xl mb-3">${Product?.product_price}</h3>
          <h3 className="  mb-10">
            {Product?.product_description?.substring(0, 499)}.
          </h3>
          <div className=" flex">
            <button
              className=" bg-blue-400 w-1/4 py-2 text-white active:bg-blue-300"
              onClick={AddtoCartHandler}
            >
              Add to cart
            </button>
            <button
              className=" w-1/4 ms-4 text-white   flex items-center  justify-around bg-green-600 "
              onClick={(e) => {
                e.stopPropagation();
                AddToWhislists();
              }}
            >
              whislist
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 ">
        <h2 className=" font-semibold text-3xl"> Additional information</h2>
        <div className="mb-5">
          <h4 className=" text-xl my-4 ">
            Product Catogary :{" "}
            <span className="text-gray-500">{Product?.product_category}</span>
          </h4>
          <h4 className=" text-xl my-4 ">
            {" "}
            Product Brand :{" "}
            <span className="text-gray-500">
              {Product?.product_brand.toUpperCase()}
            </span>
          </h4>
          <h4 className=" text-xl my-4 ">
            {" "}
            Product size :{" "}
            <span className="text-gray-500">{Product?.product_size}</span>
          </h4>

          <h4 className=" text-xl my-4 ">
            {" "}
            Product qunatity :{" "}
            <span className="text-gray-500">{Product?.product_quantity}</span>
          </h4>
          <h4 className=" text-xl my-4 ">
            {" "}
            Product Code :{" "}
            <span className="text-gray-500">{Product?.product_Code}</span>
          </h4>
        </div>
        <h2 className=" font-semibold text-3xl mb-5">Product discription</h2>
        <div className=" text-lg mb-10">{Product?.product_description}</div>

        <h2 className=" font-semibold text-3xl mb-5">Product Rating</h2>
        <div className=" text-lg flex gap-2">
          {rating.map((rating, index) => (
            <div
              key={index}
              onClick={() => AddRatingHandler(index, "update")}
              onMouseOver={() => AddRatingHandler(index)}
              onMouseOut={() => RemoveRatingHandler(index)}
              className=" w-fit h-fit "
            >
              {index >= indexes ? (
                <FaRegStar size={50} className=" text-yellow-400" />
              ) : (
                <FaStar size={50} className=" text-yellow-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
