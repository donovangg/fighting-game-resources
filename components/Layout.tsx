

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-full">{children}</main>
    </>
  );
};

export default Layout;