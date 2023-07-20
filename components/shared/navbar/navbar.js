import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-full shadow-md shadow-green-500/50 sticky top-0 z-50 capitalize">
      <nav className={style.navbar}>
        <li>
          {" "}
          <Link href={"/latest"}>সর্বশেষ</Link>{" "}
        </li>
        <li>
          <Link href={"/national"}>জাতীয়</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/international"}>আন্তর্জাতিক</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/politics"}>রাজনীতি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/economics"}>অর্থনীতি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/laws"}>আইন আদালত</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/information-technology"}>তথ্য প্রযুক্তি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/education"}>শিক্ষা</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/entertainment"}>বিনোদন</Link>
        </li>
        <li>
          {" "}
          <Link href={"/life-style"}>লাইফস্টাইল</Link>
        </li>
        <li>
          {" "}
          <Link href={"/sports"}>খেলাধুলা</Link>
        </li>
        <li>
          {" "}
          <Link href={"/job"}>চাকরি</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/horoscope"}>রাশিফল</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
