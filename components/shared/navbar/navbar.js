import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-full shadow-md shadow-green-500/50 sticky top-0 z-50 capitalize">
      <nav className={style.navbar}>
        <li>
          {" "}
          <Link className="text-3xl" href={"/"}>
            <IoHomeOutline />
          </Link>{" "}
        </li>
        <li>
          <Link href={"/জাতীয়"}>জাতীয়</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href={"/রাজনীতি"}>রাজনীতি</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href={"/অর্থনীতি"}> অর্থ ও বানিজ্য</Link>{" "}
        </li>{" "}
        <li>
          <Link href={"/সারাদেশ "}>সারাদেশ</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/আন্তর্জাতিক"}>আন্তর্জাতিক</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/আইন আদালত"}>আইন ও অপরাধ</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/তথ্য প্রযুক্তি"}>তথ্যপ্রযুক্তি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/শিক্ষা"}>শিক্ষাঙ্গন</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/বিনোদন"}>বিনোদন</Link>
        </li>
        <li>
          {" "}
          <Link href={"/খেলাধুলা"}>খেলাধুলা</Link>
        </li>
        <li>
          {" "}
          <Link href={"/অন্যান্য"}>অন্যান্য</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;


