import React from "react";

const FullSizeCentered = ({ children }) => (
  <div className="w-full h-full flex justify-center items-center">
    <div>{children}</div>
  </div>
);

export default FullSizeCentered;
