import React from "react";

const Loader = () => {
  return (
    <div className="loader-dots relative w-20 h-5">
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
      <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
    </div>
  );
};

export default Loader;
