

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen overflow-x-hidden text-gray-50">
      <Navbar />
      <main className="min-h-full w-screen">{children}</main>
    </div>
  );
};

export default Layout;