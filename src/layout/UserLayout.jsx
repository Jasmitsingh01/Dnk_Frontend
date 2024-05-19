import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Dyaamic/Navbar";
import Footer from "../components/static/Footer";
import TopNavAdmin from "../components/Dyaamic/TopNavAdmin";
import SidebarAdmin from "../components/Dyaamic/SidebarAdmin";
import { useDispatch } from "react-redux";
import { SetLocation, RemoveLocation } from "../Slices/Admin.slice";
function Layout() {
  const Location = useLocation();
  const [Top, setTop] = useState();
  const [NavColor, setNavColor] = useState();
  const [NavData, setNavData] = useState([]);
  const [FooterView, setFooterView] = useState("");
  const Dispacth = useDispatch();
  useEffect(() => {
    const Data = ["everything", "women", "men", "accesories"];

    if (
      (!Location.pathname.includes("admin") &&
        Location.pathname === "/about") ||
      Location.pathname === "/contact" ||
      Location.pathname === "/"
    ) {
      setTop("100");
      setNavColor("transparent");
      setNavData(Data);
      setFooterView("");
      Dispacth(RemoveLocation());
    } else if (Location.pathname.includes("admin")) {
      setNavData([]);
      setNavColor("sky-blue-300");
      setFooterView("hidden");
      Dispacth(SetLocation());
    } else {
      setNavColor("sky-blue-300");
      setNavData(Data);
      setTop("0");
      setFooterView("");
      Dispacth(RemoveLocation());
    }
  }, [Location, Dispacth]);

  return (
    <>
      <Navbar Data={NavData} color={NavColor} />
      {Location.pathname.includes("admin") &&
      Location.pathname !== "/admin/signin" &&
      Location.pathname !== "/admin/singup" ? (
        <>
          <TopNavAdmin />
          <div className=" relative">
            <SidebarAdmin />
          </div>
        </>
      ) : null}
      <Outlet />

      {!Location.pathname.includes("admin") ? ( // if not admin then show the Footer
        <Footer top={Top} display={FooterView} />
      ) : null}
    </>
  );
}

export default Layout;

// <Navbar Data={NavData} color={NavColor} />;
// {
//   Location.pathname.includes("admin") ? ( // If user is on Admin Side
//     Location.pathname != "/admin/singup" &&
//     Location.pathname != "/admin/signin" ? ( // If Login and singup page Of Admin is active
//       <div className="relative">
//         <TopNavAdmin />
//         <SidebarAdmin />
//       </div>
//     ) : null
//   ) : null;
// }
// <Outlet />;
// {
//   !Location.pathname.includes("admin") ? (
//     <Footer top={Top} display={FooterView} />
//   ) : null;
// }
