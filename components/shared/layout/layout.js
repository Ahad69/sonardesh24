import React, { useState } from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import NavDrawer from "../drawer/drawer";
import { FloatButton } from "antd";
import { AiOutlineArrowUp } from "react-icons/ai";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <NavDrawer open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <hr />
      <Navbar />
      {children}
      <hr />
      <Footer />
      <FloatButton.BackTop
        shape="circle"
        className="shadow-lg shadow-cyan-500/50 border-0 bg-gray-200"
        visibilityHeight={0}
        icon={<AiOutlineArrowUp className="text-xl" />}
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default Layout;
