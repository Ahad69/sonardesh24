import Link from "next/link";
import React from "react";
import { GrFacebook, GrPinterest, GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsReddit } from "react-icons/bs";
import { FaDigg } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center ">
        <Link href={"/"}>
          <img className="w-64 sm:w-64 mt-2" src="/logo.png" />
        </Link>
      </div>
      <footer className="flex sm:flex-row  sm:justify-between items-center flex-col sm:p-10 p-0  text-black sm:w-[1200px] m-auto sm:gap-10 w-full ">
        <div className="text-center sm:w-6/12 w-full">
          <p>
            সম্পাদক ও প্রকাশকঃ জিয়াউল হক
            <br />
            নির্বাহী সম্পাদকঃ মোস্তাক আহম্মেদ নওশাদ
          </p>
        </div>
        <br className="sm:hidden block" />
        <div className="text-center  sm:w-6/12 w-full">
          যোগাযোগ- মুজিব সড়ক, কমিউনিটি হাসপাতাল ৫ তলা, সিরাজগঞ্জ
          <br />
          ইমেইল- admin@sonardesh24.com
          <br />
          মোবাইল : 01324 977 175, 01716-076444
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-gray-100 text-base-content">
        <div>
          <div className=" flex justify-around items-center w-full m-auto mt-4">
            <GrFacebook className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border" />

            <GrTwitter className="text-3xl  cursor-pointer bg-cyan-400 text-white border hover:text-cyan-400 hover:bg-white p-1 " />
            <BsLinkedin className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border" />

            <BsReddit className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />

            <FaDigg className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border px-1" />

            <GrPinterest className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />
          </div>
          <br className="sm:hidden block" /> <br className="sm:hidden block" />{" "}
          <br className="sm:hidden block" />
          <p>Copyright © {date} - All right reserved by Sonar Desh 24 Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
