

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="min-h-full w-screen">{children}</main>
    </div>
  );
};

export default Layout;