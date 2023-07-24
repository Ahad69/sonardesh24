import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-full shadow-md shadow-green-500/50 sticky top-0 z-50 capitalize">
      <nav className={style.navbar}>
        <li>
          {" "}
          <Link href={"/"}>সর্বশেষ</Link>{" "}
        </li>
        <li>
          <Link href={"/জাতীয়"}>জাতীয়</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/আন্তর্জাতিক"}>আন্তর্জাতিক</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/রাজনীতি"}>রাজনীতি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/অর্থনীতি"}>অর্থনীতি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/আইন আদালত"}>আইন আদালত</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/তথ্য প্রযুক্তি"}>তথ্য প্রযুক্তি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/শিক্ষা"}>শিক্ষা</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/বিনোদন"}>বিনোদন</Link>
        </li>
        <li>
          {" "}
          <Link href={"/লাইফস্টাইল"}>লাইফস্টাইল</Link>
        </li>
        <li>
          {" "}
          <Link href={"/খেলাধুলা"}>খেলাধুলা</Link>
        </li>
        <li>
          {" "}
          <Link href={"/চাকরি"}>চাকরি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/রাশিফল"}>রাশিফল</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
