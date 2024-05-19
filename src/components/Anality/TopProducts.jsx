import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
function TopProducts() {
  const [TopP, setTopP] = useState({});
  return (
    <div className="border-2 min-h-[200px]">
      <h2 className=" text-3xl text-center lg:text-start mb-5">
        Top Selling Products
      </h2>
      {/* <Chart options={TopP} series={TopP.series} type={TopP.chart.type} /> */}
    </div>
  );
}

export default TopProducts;
