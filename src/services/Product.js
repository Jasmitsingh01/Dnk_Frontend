import { FormDataApi, api } from "./index.js";
import { toast } from "react-toastify";
export const useCreateProduct = (data) => {
  FormDataApi.post("/product/", data)
    .then((response) => {
      console.log(response);
      toast.success("Product Created successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.data.data.message || "Something went wrong");
    });
};

export const updateProduct = (data, id) => {
  api
    .put(`/product/single/${id}`, data)
    .then((product) => {
      console.log(product);
      toast.success("Product updated successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.data.data.message || "Something went wrong");
    });
};

export const useDeleteProduct = (id) => {
  FormDataApi.delete(`/product/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useGetProduct = async (url,isAdmin) => {
  const Data = await api.get(
    `/product/all?product_for_gender=${url?.gender}&product_category=${url?.category}${isAdmin ? `&is_Admin=${isAdmin}` :''}`
  );
  return Data.data?.data;
};

export const useFindParticularProduct = async (id) => {
  const data = await api.get(`/product/single/${id}`);
  return data.data?.data;
};
