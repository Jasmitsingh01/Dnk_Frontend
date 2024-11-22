import { FormDataApi, api } from "./index.js";
import { toast } from "react-toastify";
export const useCreateProduct = (data) => {
  FormDataApi.post("/product/?isAdmin=true", data)
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
    .put(`/product/single/${id}?isAdmin=true`, data)
    .then((product) => {
      console.log(product);
      toast.success("Product updated successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.data.data.message || "Something went wrong");
    })
};

export const useDeleteProduct = (id) => {
  api.delete(`/product/single/${id}?isAdmin=true`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useGetProduct = async (url,isAdmin) => {
  const Data = await api.get(
    `/product/all?${url?.gender ? `product_for_gender=${url?.gender}`:''}${url?.category?`&product_category=${url?.category}`:''}${isAdmin ? `&isAdmin=${isAdmin}` :''}`
  );
  return Data.data?.data;
};    

export const useAdminGetAllProducts = async () => {
  const data = await api.get(`/product/admin/all?isAdmin=true`);
  return data.data?.data;
};

export const useFindParticularProduct = async (id) => {
  const data = await api.get(`/product/single/${id}`);
  return data.data?.data;
};
