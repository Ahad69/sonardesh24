import React from "react";
import BanglaDate from "@/components/banglaDate/bangladate";
import DatePickers from "@/components/datePicker/datePicker";
import Link from "next/link";
import style from "./header.module.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = ({ open, setOpen }) => {
  return (
    <div className={`${style.container} header`}>
      <div className="hidden sm:block">
        <BanglaDate />
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineMenuUnfold
          className="block sm:hidden text-xl"
          onClick={() => setOpen(!open)}
        />
        <Link href={"/"}>
          <img className="w-44 sm:w-64 mt-2" src="/logo.png" />
        </Link>
      </div>
      <div className="text-end">
        <DatePickers />
        <div className="block sm:hidden">
          <BanglaDate />
        </div>
      </div>
    </div>
  );
};

export default Header;
