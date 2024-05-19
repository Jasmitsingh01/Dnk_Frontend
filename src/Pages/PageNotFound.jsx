import React from "react";

function PageNotFound() {
  return (
    <div className="text-5xl flex flex-col items-center text-red-400 justify-center min-h-[50vh]">
      <div className=" mb-4"> Error Message</div>
      <div>
        PAGE NOT FOUND <span>404</span>
      </div>
    </div>
  );
}

export default PageNotFound;
