import React from "react";
import Categorycard from "../../components/static/Categorycard";
import ProductCard from "../../components/Dyaamic/ProductCard";
import Banner from "../../components/static/Banner";
import BannerSecond from "../../components/static/BannerSecond";
import { useGetProduct } from "../../services/Product";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [Freautred, setFreautred] = useState([]);
  useEffect(() => {
    const Data = useGetProduct({});
    Data.then((data) => setFreautred(data?.product));
  }, []);
  return (
    <div>
      <div className="lg:absolute lg:top-0 w-full">
        <Banner />
      </div>
      <div className=" relative lg:top-[100vh] mb-[10%]">
        <Categorycard />
      </div>
      <div className="relative lg:top-[100vh] bg-slate-100 py-20">
        <h3 className=" text-center text-6xl font-semibold  mb-5">
          Featured Products
        </h3>
        <div className=" border-2 border-blue-500 w-[100px] mx-auto mb-20"></div>
        <div className=" grid  grid-cols-2  md:grid-cols-3  lg:grid-cols-4  justify-items-center gap-y-10 mb-16">
          {Freautred.map((Product) => (
            <ProductCard
              key={Product._id}
              data={Product}
              _id={Product._id}
              product_name={Product.product_name}
              product_category={Product?.product_for_gender}
              product_price={Product?.product_price}
              product_discount_price={Product?.product_discount_price}
              product_image={Product?.product_image[0]}
              product_rating={Product?.product_rating}
            />
          ))}
        </div>
      </div>
      <div className="relative lg:top-[100vh] ">
        <BannerSecond />
      </div>
    </div>
  );
}

export default Home;
