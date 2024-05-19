import React, { useEffect } from "react";
import { useState } from "react";
import AdminPageHeader from "../../components/static/AdminPageHeader";
import { MdDriveFolderUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "../../services/Product";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Authencation from "../../utils/authencation";

function AddProduct() {
  const [size, setsize] = useState("");
  const navigate = useNavigate();

  const [product_image, setProduct_image] = useState([]);
  const editData = useSelector((selector) => selector.AllProducts.Product);

  const { handleSubmit, register, setValue } = useForm();
  const Images = (e) => {
    for (let i = 0; i < e?.target?.files?.length; i++) {
      const element = e?.target?.files[i];

      setProduct_image([...product_image, element]);
    }
  };
  const sumbit = (FormDatas) => {
    const formData = new FormData();
    for (const key in FormDatas) {
      if (Object.hasOwnProperty.call(FormDatas, key)) {
        formData.append(`${key}`, FormDatas[key]);
      }
    }
    for (let i = 0; i < product_image?.length; i++) {
      formData.append("product_image", product_image[i]);
    }
    if (!editData) {
      useCreateProduct(formData);
    }
  };
  useEffect(() => {
    for (const key in editData) {
      setValue(key, editData[key]);
    }
    if (!Authencation) {
      navigate("/admin/signin");
    }
  }, []);
  return (
    <div className="w-full">
      <AdminPageHeader value={"Add Product"} />
      <div>
        <form
          className=" grid md:gap-3 md:grid-cols-2 px-2"
          onSubmit={handleSubmit(sumbit)}
        >
          <div className=" mb-3 px-2">
            <label
              htmlFor="title"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Title
            </label>
            <input
              type="text"
              placeholder="Product Title"
              id="title"
              name="title"
              {...register("product_name")}
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
            />
            <p className=" text-sm text-slate-500 font-semibold">
              Do not exceed 20 Character while entering the product name
            </p>
          </div>
          <div className=" mb-3 ">
            <label
              htmlFor="code"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Code
            </label>

            <input
              type="text"
              placeholder="Product Code"
              id="code"
              name="code"
              {...register("product_Code")}
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
            />
            <p className=" text-sm text-slate-500 font-semibold">
              Code will generate automatically
            </p>
          </div>
          <div className=" mb-3">
            <label
              htmlFor="qunatity"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Qunatity
            </label>

            <input
              type="number"
              placeholder="Product Qunatity"
              id="qunatity"
              name="qunatity"
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
              {...register("product_quantity")}
            />
          </div>

          <div className=" mb-3">
            <label
              htmlFor="Brand"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Brand
            </label>

            <input
              type="text"
              placeholder="Product Brand"
              id="Brand"
              name="Brand"
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
              {...register("product_brand")}
            />
          </div>

          <div className=" mb-3">
            <label
              htmlFor="Catogaries"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Catogaries{" "}
            </label>
            <select
              name="Catogaries"
              id="Catogaries"
              className=" border-2 p-2 rounded outline-none w-full"
              {...register("product_category")}
            >
              <option value="Clothes">Clothes</option>
              <option value="ACCESORIES">ACCESORIES</option>
              <option value="Personal care">Personal care</option>
            </select>
          </div>
          <div className=" mb-3">
            <label
              htmlFor="Gender"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Gender
            </label>
            <select
              name="Gender"
              {...register("product_for_gender")}
              id="Gender"
              className=" border-2 p-2 rounded outline-none w-full"
            >
              <option value="men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className=" mb-5 ">
            <label className=" text-blue-950 mb-3 font-bold block">Sizes</label>
            <div className=" flex gap-2">
              <label
                htmlFor="xs"
                className={` border-2 p-2 rounded ${
                  size === "xs" ? "bg-blue-400" : null
                } `}
              >
                XS
              </label>
              <input
                type="radio"
                name="Sizes"
                id="xs"
                className="hidden"
                value={"xs"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="s"
                className={` border-2 p-2 rounded ${
                  size === "s" ? "bg-blue-400" : null
                }  `}
              >
                S
              </label>
              <input
                type="radio"
                name="Sizes"
                id="s"
                {...register("product_size")}
                className=" hidden"
                value={"s"}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="M"
                className={` border-2 p-2 rounded ${
                  size === "M" ? "bg-blue-400" : null
                }  `}
              >
                M
              </label>

              <input
                type="radio"
                name="Sizes"
                id="M"
                className=" hidden"
                value={"M"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="L"
                className={` border-2 p-2 rounded ${
                  size === "L" ? "bg-blue-400" : null
                } `}
              >
                L
              </label>

              <input
                type="radio"
                name="Sizes"
                id="L"
                className=" hidden"
                value={"L"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="xl"
                className={` border-2 p-2 rounded ${
                  size === "xl" ? "bg-blue-400" : null
                } `}
              >
                XL
              </label>

              <input
                type="radio"
                name="Sizes"
                id="xl"
                className=" hidden"
                value={"xl"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="2xl"
                className={` border-2 p-2 rounded ${
                  size === "2xl" ? "bg-blue-400" : null
                }`}
              >
                2XL
              </label>

              <input
                type="radio"
                name="Sizes"
                id="2xl"
                className=" hidden"
                value={"2xl"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
              <label
                htmlFor="3xl"
                className={` border-2 p-2 rounded ${
                  size === "3xl" ? "bg-blue-400" : null
                }`}
              >
                3XL
              </label>

              <input
                type="radio"
                name="Sizes"
                id="3xl"
                className=" hidden"
                value={"3xl"}
                {...register("product_size")}
                onClick={(e) => setsize(e.target.value)}
              />
            </div>
          </div>
          <div className=" mb-3">
            <label
              htmlFor="visibilty"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Visibilty
            </label>
            <select
              name="visibilty"
              id="visibilty"
              {...register("product_status")}
              className=" border-2 p-2 rounded outline-none"
            >
              <option value="hidden">hidden</option>
              <option value="public">public</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Price
            </label>

            <input
              type="number"
              name="price"
              id="price"
              {...register("product_price")}
              placeholder="price"
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="Discount"
              className=" text-blue-950 mb-2 font-bold block"
            >
              Product Discount <span className=" text-black">(in % )</span>
            </label>

            <input
              type="number"
              name="Discount"
              id="Discount"
              placeholder="Discount Price"
              className=" border-2 outline-none rounded p-2 mb-2 w-full"
              {...register("product_discount_price")}
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="discription"
              className=" text-blue-950 mb-3 font-bold block"
            >
              Product Discription
            </label>
            <textarea
              name="discription"
              id="discription"
              cols="30"
              rows="10"
              {...register("product_description")}
              placeholder="Discription...."
              className=" outline-none border-2 w-full rounded p-2"
            ></textarea>
          </div>

          <div className="md:col-span-2 ">
            <div className=" border-2 relative border-dashed rounded flex items-center justify-center min-h-[300px]  mb-5">
              <div className=" flex flex-col justify-center items-center w-fullh-full ">
                <MdDriveFolderUpload
                  size={100}
                  className=" mb-5 text-slate-600"
                />
                <p className=" text-slate-400">
                  Drag and Drop Your Product Image
                </p>
              </div>
              <input
                type="file"
                name="product_image"
                id="prpductImage"
                multiple
                onChange={(e) => Images(e)}
                className=" opacity-0  w-full h-full absolute top-0 left-0"
              />
            </div>
          </div>

          <div className=" mb-3 flex gap-3 justify-end w-full md:col-span-2">
            <button
              type="reset"
              className=" border-2  border-red-500 px-3 py-2  rounded-lg text-red-500 "
            >
              Reset
            </button>
            <button
              type="submit"
              className=" border-2  border-green-500 px-3 py-2 rounded-lg text-green-500 "
            >
              Create & Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
