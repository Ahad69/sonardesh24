import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 bg-gray-100 text-base-content">
        <div>
          <p>Copyright © {date} - All right reserved by Sonar Desh 24 Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
