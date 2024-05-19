import React from "react";
import { useEffect, useState } from "react";

function AdminPageHeader({ value }) {
  const date = new Date();

  const [Time, setTime] = useState();

  useEffect(() => {
    setTimeout(() => {
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, [date]);

  return (
    <div className=" flex justify-between  items-center shadow-lg py-5 mb-5">
      <h3 className=" text-3xl font-bold text-blue-950 ms-5 ">{value}</h3>
      <p className=" p-2 ms-2 text-blue-950 md:flex font-bold bg-neutral-100 border-2  rounded">
        {date.toDateString()} <p>{Time}</p>
      </p>
    </div>
  );
}

export default AdminPageHeader;
