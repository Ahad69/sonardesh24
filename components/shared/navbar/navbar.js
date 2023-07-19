import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-full shadow-md shadow-green-500/50 sticky top-0 z-50">
      <nav className={style.navbar}>
        <li> সর্বশেষ</li>
        <li> জাতীয়</li>
        <li>আন্তর্জাতিক </li>
        <li> রাজনীতি</li>
        <li>অর্থনীতি </li>
        <li>আইন আদালত </li>
        <li>তথ্য প্রযুক্তি </li>
        <li> শিক্ষা</li>
        <li> বিনোদন</li>
        <li> লাইফস্টাইল</li>
        <li> খেলাধুলা</li>
        <li>চাকরি </li>
        <li> রাশিফল</li>
      </nav>
    </div>
  );
};

export default Navbar;
