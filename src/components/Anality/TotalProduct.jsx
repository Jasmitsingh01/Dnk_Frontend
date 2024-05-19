import React from "react";
import { useState } from "react";
import Chat from "react-apexcharts";
function TotalProduct() {
  const [Pie, setPie] = useState();

  return (
    <section className=" border-2 min-h-[200px]">
      <h2 className=" text-3xl text-center mb-5 ">Total live Products</h2>
      <Chat
        options={Pie?.options}
        series={Pie?.series}
        type={Pie?.options.chart.type}
        width={300}
      />
    </section>
  );
}

export default TotalProduct;
