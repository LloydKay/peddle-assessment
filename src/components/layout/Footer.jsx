import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="container mx-auto items-center footer p-10 bg-twitter text-primary-content footer-center">
      <div className="flex flex-1 justify-center text-white">
        <FaYoutube size="30" className="m-3" />
        <FaFacebookSquare size="30" className="m-3" />
        <FaLinkedin size="30" className="m-3" />
        <FaInstagram size="30" className="m-3" />
        <FaTwitterSquare size="30" className="m-3" />
      </div>
      <div className="flex flex-1 justify-center text-sm">
        <p className="mx-6 text-white items-center">Terms of services</p>
        <p className="mx-6 text-white items-center">Privacy policy</p>
      </div>
      <div className="flex flex-1 justify-center my-5">
        <p className="text-white text-sm items-center">
          Copyright &copy; 2021 @ Peddle Technologies All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
