import { api } from ".";

export const DeleteOrder = (data) => {
  api.delete(" order/delete", data);
};

export const FindParticularOrder = (data) => {
  api.get(" order/find", data);
};
export const createorders = async (data) => {
  const Data = await api.post("/order", data);
  return Data?.data?.data;
};
export const GetOrder = async (data) => {
  const Data = await api.get(`order${data ? "?isAdmin=true" : ""}`);
  return Data?.data?.data;
};
