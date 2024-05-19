import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderTable from "../../components/Dyaamic/orderTable";
import AdminPageHeader from "../../components/static/AdminPageHeader";
import Authencation from "../../utils/authencation";

function Orderhistory() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Authencation()) {
      navigate("/admin/signin");
    }
  }, []);
  return (
    <>
      <AdminPageHeader value={"Order"} />
      <OrderTable />
    </>
  );
}

export default Orderhistory;
