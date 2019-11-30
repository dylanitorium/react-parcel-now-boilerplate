import React from "react";

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="border-2 border-gray-900 w-64 block p-3 transition-bg hover:bg-gray-200 uppercase tracking-widest text-sm mx-auto"
  >
    {children}
  </button>
);

export default Button;
