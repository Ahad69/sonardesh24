import React from "react";
import BanglaDate from "@/components/banglaDate/bangladate";
import DatePickers from "@/components/datePicker/datePicker";
import Link from "next/link";
import style from "./header.module.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { ImSearch } from "react-icons/im";

const Header = ({ open, setOpen, modalOpen, setModalOpen }) => {
  return (
    <div className={`${style.container}`}>
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
      <div className="text-end header">
        <DatePickers />
        <ImSearch
          onClick={() => setModalOpen(!modalOpen)}
          className=" sm:block hidden text-xl ml-auto mt-2 cursor-pointer"
        />
        <div className="block sm:hidden">
          <BanglaDate />
        </div>
      </div>
    </div>
  );
};

export default Header;
