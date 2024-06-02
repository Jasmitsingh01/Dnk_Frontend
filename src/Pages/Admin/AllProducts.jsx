import React, { useEffect, useState } from "react";

import ProductCard from "../../components/Dyaamic/ProductCard";
import AdminPageHeader from "../../components/static/AdminPageHeader";
import { useGetProduct } from "../../services/Product";
import { useNavigate } from "react-router-dom";
import Authencation from "../../utils/authencation";
function AllProducts() {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    useGetProduct('',true).then((data) => {
      setproduct(data?.product);
    });
    if (!Authencation) {
      navigate("/admin/signin");
    }
  }, []);
  return (
    <div className="w-full">
      <AdminPageHeader value={"Product Grid"} />
      <div className=" text-right me-5 mb-5 text-xl font-bold">
        Select Product Category
      </div>
      <div className=" flex justify-end me-5 mb-5">
        <select className="rounded border-2 outline-none p-2 w-1/6">
          <option>Men</option>
          <option>Women</option>
          <option>child</option>
        </select>
      </div>
      <div className=" grid grid-cols-2 justify-center gap-y-8 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {product?.map((Product) => (
          <ProductCard
            onClick={(id) => alert(id)}
            key={Product._id}
            data={Product}
            _id={Product._id}
            product_name={Product.product_name}
            product_category={Product?.product_for_gender}
            product_price={Product?.product_price}
            product_discount_price={Product?.product_discount_price}
            product_image={Product?.product_image[0]}
            product_quantity={Product?.product_quantity}
            product_sold={Product?.product_sold}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
