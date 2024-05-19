import axios from "axios";

export const FormDataApi = axios.create({
  withCredentials: true,
  baseURL: "https://dnk-backend.onrender.com/api/",
  headers: {
    "Content-Type": "application/multipart/form-data",
    Authorization: "Bearer " + localStorage.getItem("_user_access_token"),
  },
});

export const api = axios.create({
  withCredentials: true,
  baseURL: "https://dnk-backend.onrender.com/api/",
  Authorization: "Bearer " + localStorage.getItem("_user_access_token"),
});
