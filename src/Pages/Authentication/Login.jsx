import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/black_logo.png";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/auth";
export default function Login() {
  const { handleSubmit, register } = useForm();
  const Active = useSelector((state) => state.Location.AdminSide);
  const sumbit = (logindata) => {
    if (Active) {
      const data = {
        isAdmin: true,
        admin_email: logindata.email,
        admin_password: logindata.password,
      };
      useLogin(data);
    } else {
      useLogin(logindata);
    }
  };
  window.addEventListener('keyup', (e) => {
    if (e.getModifierState('CapsLock')) {
        alert("Caps Lock is on");
    } else {
        console.log("Caps Lock is off");
    }
});
  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your {Active ? "Admin" : null} account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(sumbit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                {...register("email")}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                autoComplete="current-password"
                required
                {...register("password")}
                className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to={Active ? "/admin/singup" : "/singup"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a seller?
          <Link
            to={Active ? "/signin" : "/admin/singup"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Become a {Active ? "buyer" : "seller"}
          </Link>
        </p>
      </div>
    </section>
  );
}
