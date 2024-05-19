import { api } from "./index";
import { toast } from "react-toastify";

export const useLogin = (data) => {
  api
    .post("user/login", data)
    .then((response) => {
      toast.success("User Logged In Successfully");
      localStorage.setItem(
        "_user_access_token",
        response.data?.data?.AccessToken
      );

      localStorage.setItem(
        "_user_refresh_token",
        response.data?.data?.RefreshToken
      );
      if (response.data?.data?.Admin) {
        localStorage.setItem("_Admin_address", response.data?.data?.address);
        localStorage.setItem(
          "__Admin_contact_number",
          response.data?.data?.contact
        );
      } else {
        localStorage.setItem("_user_address", response.data?.data?.address);
        localStorage.setItem("_contact_number", response.data?.data?.contact);
      }
      if (response.data?.data?.Admin) {
        localStorage.setItem(
          "Admin",
          JSON.stringify(response.data?.data?.Admin)
        );
        setTimeout(() => (window.location.href = "/admin/"), 2000);
      } else {
        setTimeout(() => (window.location.href = "/"), 2000);
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data);
    });
};

export const useSignUp = (data) => {
  api
    .post("user/singup", data)
    .then((response) => {
      toast.success("User Registered Successfully");
      localStorage.setItem(
        "_user_access_token",
        response.data?.data?.AccessToken
      );
      localStorage.setItem(
        "_user_refresh_token",
        response.data?.data?.RefreshToken
      );
      if (response.data?.data?.Admin) {
        localStorage.setItem("_Admin_address", response.data?.data?.address);
        localStorage.setItem(
          "__Admin_contact_number",
          response.data?.data?.contact
        );
      } else {
        localStorage.setItem("_user_address", response.data?.data?.address);
        localStorage.setItem("_contact_number", response.data?.data?.contact);
      }
      if (response.data?.data?.Admin) {
        localStorage.setItem(
          "Admin",
          JSON.stringify(response.data?.data?.Admin)
        );
        setTimeout(() => (window.location.href = "/admin/"), 2000);
      } else {
        setTimeout(() => (window.location.href = "/"), 2000);
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data);
    });
};

export const useLogout = () => {
  api
    .post("user/logout")
    .then(() => {
      toast.success("User Logged Out Successfully");
    })
    .catch((err) => {
      toast.error(err?.response?.data);
    });
};
export const useUpdateuser = (data) => {
  api
    .post("user/update", data)
    .then(() => {
      toast.success("User Updated Successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err?.response?.data?.message);
    });
};
export const useUserDeatils = async () => {
  const Data = await api.get("user/detils");
  return Data?.data?.data;
};
