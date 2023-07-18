import React, { useState } from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import NavDrawer from "../drawer/drawer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <NavDrawer open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <hr />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
