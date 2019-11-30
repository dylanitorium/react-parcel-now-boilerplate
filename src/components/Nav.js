import React from "react";
import useAuth0 from "../auth/useAuth0";

const Nav = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <nav className="flex justify-between items-center px-4">
        <div className="p-4">
          <h1 className="uppercase tracking-widest text-xl">Scoot</h1>
        </div>
        <div className="p-4">
          <button
            onClick={() => logout()}
            className="border-2 border-gray-900 w-auto block p-2 transition-bg hover:bg-gray-200 uppercase tracking-widest text-sm mx-auto"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
