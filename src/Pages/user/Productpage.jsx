import React from "react";

import { FaArrowRight } from "react-icons/fa";
import SideBarProduct from "../../components/Dyaamic/sideBarProduct";
import ProductCard from "../../components/Dyaamic/ProductCard";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useGetProduct } from "../../services/Product";
function Productpage() {
  const [Current, setCurrent] = useState("");
  const [data, setdata] = useState([]);
  const [pages_total, setpages_total] = useState(0);
  const [current_Page, setcurrent_Page] = useState(0);
  const [next, setnext] = useState(true);
  const [name,setnameFilter]=useState('')
  const [price,setpriceFilter]=useState(undefined)
  const Location = useLocation();
    const [loading,setloading]=useState(true);

  useLayoutEffect(() => {
    setloading(true)
    setCurrent(Location.pathname.substring(7).toUpperCase());
    if (
      Location.pathname.substring(7).toUpperCase() !== "EVERYTHING" &&
      Location.pathname.substring(7).toUpperCase() !== "ACCESORIES"
    ) {
      const Data = useGetProduct({ gender: Current, category: "" });
      Data.then((data) => {
        console.log(data);
        setdata(data?.product);
      }).catch(() => {
        setdata([]);
        setpages_total(0);

     
      }).finally(()=>{
        setloading(false)
      });
    } else if (Location.pathname.substring(7).toUpperCase() === "EVERYTHING") {
      const Data = useGetProduct({});
      Data.then((data) => {
        setpages_total(data?.Total_number_pages);
        setdata(data?.product);
      }).catch(() => {
        setdata([]);
     setpages_total(0)
      }).finally(()=>{
        setloading(false)
      });
    } else {
      const Data = useGetProduct({
        gender: "",
        category: Location.pathname.substring(7).toUpperCase(),
      });
      Data.then((data) => {
        setpages_total(data?.Total_number_pages);

        setdata(data?.product);
      }).catch(() => {
        setdata([]);
        setpages_total(0)

     
      }).finally(()=>{
        setloading(false)
      });
      
    }
  }, [Location.pathname, Current, Location]);
  let PAGES = [];
  for (let index = 0; index < pages_total; index++) {
    PAGES.push(index);
  }
  return (
    
      loading?
      <div className=" flex justify-center text-2xl min-h-screen items-center">  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <span className="sr-only">Loading...</span></div>
  :<div className=" bg-slate-300 flex flex-col lg:flex-row py-10 relative m-h-[100vh]  ">
      <div className="w-full p-5  lg:w-1/3">
        <SideBarProduct setname={setnameFilter} setprice={setpriceFilter} />
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
          {data.filter((Product)=>Product.product_name.toLowerCase().includes(name.toLowerCase())).filter((Product)=>{if(price==undefined || price==0)return Product
          return Product.product_price <= price}).map((Product) => {
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
