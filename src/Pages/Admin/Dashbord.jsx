import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminPageHeader from "../../components/static/AdminPageHeader";
import Authencation from "../../utils/authencation";
import Sale from "../../components/Anality/Sale";
function Dashbord() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Authencation()) {
      navigate("/admin/signin");
    }
  }, []);
  return (
    <section className=" relative  w-full">
      <AdminPageHeader value={"Sales Analaytics"} />
      <div className="flex flex-col min-[425px]:flex-row  items-center justify-between">
        <div className="w-1/2">
          <Sale />
        </div>
        <div className="w-full min-[425px]:w-1/2 md:w-1/4 bg-blue-300 me-5">
          <img src={"/Balance.webp"} alt="Price" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default Dashbord;
