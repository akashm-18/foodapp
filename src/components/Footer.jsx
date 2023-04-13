import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="flex justify-between border-2 px-5 py-5 items-center">
         <div>
            <p>Best Eats -All Rights Reserved &copy;2022-By AKASH M</p>
         </div>
         <div className="flex gap-2">
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
         </div>
      </div>
   );
};

export default Footer;
