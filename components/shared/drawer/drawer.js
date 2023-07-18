import { Drawer } from "antd";
import React from "react";
import { ImCross } from "react-icons/im";

const NavDrawer = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        title="Menu"
        placement={"left"}
        closable={false}
        open={open}
        onClose={onClose}
        extra={
          <button
            className="bg-red-400 p-2 text-white shadow-lg shadow-gray-500/50 rounded"
            onClick={onClose}
          >
            <ImCross />
          </button>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
