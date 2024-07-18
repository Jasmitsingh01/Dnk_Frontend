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
  const [loading,setloading]=useState(true);

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
      }).finally(()=>{
        setloading(false);
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
      setloading(true)
      //Update the rating  of the product
      updateProduct({ product_rating: index + 1 }, ids,setloading);
    }
    setindex(index + 1);
  };
  const RemoveRatingHandler = (index) => {
    setindex(index);
  };

  return (
    loading ? <div className=" flex justify-center text-2xl min-h-screen items-center">  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only">Loading...</span></div> :<>
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
