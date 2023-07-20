import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <img className="w-44 sm:w-64 mt-2" src="/logo.png" />
        </Link>
      </div>
      <footer className="footer footer-center p-4 bg-gray-100 text-base-content">
        <div>
          <p>Copyright © {date} - All right reserved by Sonar Desh 24 Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
