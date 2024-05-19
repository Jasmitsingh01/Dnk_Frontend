import React from "react";

import { FaArrowRight } from "react-icons/fa";
import SideBarProduct from "../../components/Dyaamic/sideBarProduct";
import ProductCard from "../../components/Dyaamic/ProductCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetProduct } from "../../services/Product";
import { toast } from "react-toastify";
function Productpage() {
  const [Current, setCurrent] = useState("");
  const [data, setdata] = useState([]);
  const [pages_total, setpages_total] = useState(0);
  const [current_Page, setcurrent_Page] = useState(0);
  const [next, setnext] = useState(true);
  const [prve, setprve] = useState(true);

  const Location = useLocation();
  useEffect(() => {
    setCurrent(Location.pathname.substring(7).toUpperCase());
    if (
      Location.pathname.substring(7).toUpperCase() !== "EVERYTHING" &&
      Location.pathname.substring(7).toUpperCase() !== "ACCESORIES"
    ) {
      const Data = useGetProduct({ gender: Current, category: "" });
      Data.then((data) => {
        console.log(data);
        setdata(data?.product);
      }).catch((error) => {
        setdata([]);
        setpages_total(data?.Total_number_pages);

        toast.error(error?.response?.data?.message);
      });
    } else if (Location.pathname.substring(7).toUpperCase() === "EVERYTHING") {
      const Data = useGetProduct({});
      Data.then((data) => {
        console.log(data);
        setpages_total(data?.Total_number_pages);
        setdata(data?.product);
      }).catch((error) => {
        setdata([]);
        toast.error(error?.response?.data?.message);
      });
    } else {
      const Data = useGetProduct({
        gender: "",
        category: Location.pathname.substring(7).toUpperCase(),
      });
      Data.then((data) => {
        setpages_total(data?.Total_number_pages);

        setdata(data?.product);
      }).catch((error) => {
        setdata([]);
        toast.error(error?.response?.data?.message);
      });
    }
  }, [Location.pathname, Current, Location]);
  let PAGES = [];
  for (let index = 0; index < pages_total; index++) {
    PAGES.push(index);
  }
  return (
    <div className=" bg-slate-300 flex flex-col lg:flex-row py-10 relative m-h-[100vh]  ">
      <div className="w-full p-5  lg:w-1/3">
        <SideBarProduct />
      </div>

      <div className="bg-white w-full  p-5 ">
        <h3 className=" text-5xl font-normal lg:ms-10  mb-20">{Current}</h3>
        <p className=" text-xl lg:mx-5  text-balance mb-10">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit sed ut.
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-3  gap-y-3   md:gap-5  justify-items-center mb-10">
          {data.map((Product) => {
            return (
              <ProductCard
                key={Product?._id}
                data={Product}
                _id={Product._id}
                product_name={Product.product_name}
                product_category={Product?.product_for_gender}
                product_price={Product?.product_price}
                product_discount_price={Product?.product_discount_price}
                product_image={Product?.product_image[0]}
                product_rating={Product?.product_rating}
              />
            );
          })}
        </div>
        <div className="md:ms-5 flex justify-center ">
          <button className=" bg-black text-white border-2 border-black py-3 px-5 mx-2">
            {PAGES[current_Page] + 1}
          </button>
          {PAGES.length > PAGES[current_Page + 1] ? (
            <button className=" bg-black text-white border-2 border-black py-3 px-5 mx-2">
              {PAGES[current_Page] + 2}
            </button>
          ) : null}
          {PAGES.length > PAGES[current_Page + 2] ? (
            <button className=" bg-black text-white border-2 border-black py-3 px-5 mx-2">
              {PAGES[current_Page] + 3}
            </button>
          ) : null}
          <button
            className=" bg-transparent border-2 border-black text-black hover:bg-black hover:text-white py-3 px-5 text-2xl me-2"
            onClick={() => {
              PAGES.length > current_Page + 3
                ? setcurrent_Page(current_Page + 1)
                : setnext(false);
            }}
            disabled={!next}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
