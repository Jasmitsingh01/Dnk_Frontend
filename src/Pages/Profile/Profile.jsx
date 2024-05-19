import React, { useEffect, useState } from "react";
import { user_Authencation } from "../../utils/authencation";
import { useNavigate } from "react-router-dom";
import {
  useLogout,
  useUpdateuser,
  useUserDeatils,
} from "../../services/auth.js";
import { useForm } from "react-hook-form";
function Profile() {
  const [edit, setEdit] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (user_Authencation()) {
      setLogged(true);
      useUserDeatils()
        .then((users) => {
          setuser(users);
          localStorage.setItem("_user_address", users?.address);
          localStorage.setItem("_contact_number", users?.contact);
        })
        .catch((err) => {
          setuser(null);
          console.log(err);
        });
    } else {
      navigate("/signin");
    }
  }, [edit]);
  const { handleSubmit, register } = useForm();
  const updateUserHandler = (data) => {
    useUpdateuser(data);
  };
  const logouthandler = () => {
    localStorage.clear();
    useLogout();
  };
  if (logged) {
    return (
      <div className="grid grid-cols-12 px-5 py-10 items-start min-h-screen">
        <div className="w-[300px] h-[300px] relative col-span-3">
          <img
            src="/men.jpg"
            alt="profile-image"
            className="  flex justify-center w-full h-full rounded-full mb-10 "
          />
          {edit ? (
            <input
              type="file"
              name="avtar"
              id="avtar"
              className=" opacity-0   absolute w-full h-full rounded-full top-0 "
              {...register("avatar")}
            />
          ) : null}
        </div>
        {edit ? (
          <div className=" col-span-9 ">
            <form
              className=" grid grid-cols-2 gap-5"
              onSubmit={handleSubmit(updateUserHandler)}
            >
              <input
                type="text"
                placeholder="User Name"
                className=" p-2 outline-none border-2 rounded-md"
                {...register("name")}
              />
              <input
                type="email"
                placeholder="User email"
                className=" p-2 outline-none border-2 rounded-md"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="User Password"
                className=" p-2 outline-none border-2 rounded-md"
              />

              <input
                type="number"
                placeholder=" User Contact number"
                className=" p-2 outline-none border-2 rounded-md"
                {...register("contact")}
              />
              <textarea
                placeholder="User comopelet Address"
                className=" col-span-2 p-2 outline-none border-2 rounded-md"
                {...register("address")}
                cols="10"
                rows={10}
              ></textarea>
              <button
                className="bg-blue-500 text-white w-1/2 py-2 px-5 rounded-full"
                type="submit"
              >
                Update Deatils
              </button>
              <button
                className=" bg-gray-400 text-white w-1/2  py-2 px-5 rounded-full"
                onClick={() => setEdit(false)}
              >
                Back
              </button>
            </form>
          </div>
        ) : (
          <div className=" col-span-9">
            <p className=" text-5xl mb-5">Name: {user?.name}</p>
            <p className=" text-2xl mb-5">email : {user?.email}</p>
            <p className=" text-2xl mb-5">contact : {user?.contact}</p>
            <p className=" text-2xl mb-5">Address: {user?.address}</p>
            <p className=" text-3xl mb-3">Bio</p>
            <p className=" text-xl  font-semibold mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta
              quisquam deleniti, nisi, aliquam unde corrupti et, fuga magnam
              incidunt magni accusamus illum sint. Officiis dolorem minima vitae
              tempore blanditiis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Veniam aliquam quaerat, cum laboriosam
              repellendus accusamus maxime quas sapiente cupiditate eos saepe
              consectetur, officiis pariatur iure. Quae a, perferendis ea
              cupiditate vitae distinctio enim magnam dicta quis, cumque cum
              fugit blanditiis, tenetur provident minima sequi voluptates
              nesciunt. Dolores eum voluptate quo illum minima exercitationem
              minus fugiat adipisci quia nobis rem officia suscipit at tempora
              sapiente commodi fugit, sequi veniam ex enim repudiandae nemo
              architecto reiciendis aliquam.
            </p>
            <button
              className="  border p-3 rounded-full w-1/4 text-green-400 border-green-400 border-dashed hover:bg-green-400 hover:text-white mx-3 "
              onClick={() => setEdit(true)}
            >
              Edit Info
            </button>
            <button
              className="  border p-3 rounded-full w-1/4 text-red-400 border-red-400 border-dashed hover:bg-red-400 hover:text-white me-3 "
              onClick={() => logouthandler()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
