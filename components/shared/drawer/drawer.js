import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";
import style from "./drawer.module.css";

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
        <nav className={style.navbar}>
          <li onClick={onClose}>
            {" "}
            <Link href={"/"}>সর্বশেষ</Link>{" "}
          </li>

          <li onClick={onClose}>
            <Link href={"/জাতীয়"}>জাতীয়</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/আন্তর্জাতিক"}>আন্তর্জাতিক</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/রাজনীতি"}>রাজনীতি</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/অর্থনীতি"}>অর্থনীতি</Link>{" "}
          </li>
          <li onClick={onClose}>
            <Link href={"/সারাদেশ "}>সারাদেশ</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/আইন আদালত"}>আইন আদালত</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/তথ্য প্রযুক্তি"}>তথ্য প্রযুক্তি</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/শিক্ষা"}>শিক্ষা</Link>{" "}
          </li>
          <li onClick={onClose}>
            {" "}
            <Link href={"/বিনোদন"}>বিনোদন</Link>
          </li>

          <li onClick={onClose}>
            {" "}
            <Link href={"/খেলাধুলা"}>খেলাধুলা</Link>
          </li>

          <li onClick={onClose}>
            {" "}
            <Link href={"/অন্যান্য"}>অন্যান্য</Link>
          </li>
        </nav>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
