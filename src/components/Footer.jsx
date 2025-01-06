import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full bg-gray-200   bottom-0 shadow-inherit">
      <div className="max-w-[1240px] flex flex-col justify-between items-center mx-auto  px-2 p-3 lg:flex-row text-black gap-1">
        <h1 className="font-semibold">Developed by <span className="text-red-500">Shahul Ahmed</span></h1>
        <p className="font-semibold">Copyright © 2024 SA</p>
        <ul className="flex justify-center items-center gap-5">
          {/* <Link to={'https://github.com/SyedShahulAhmed'}> */}
            <li className="hover:text-[#171515] transition-colors duration-300">
              <AiFillGithub size={20} />
            </li>
          {/* </Link> */}
          {/* <Link to={'https://x.com/ShahulAhmed17?t=Kk665GXRLquOrucnSvkTew&s=09'}> */}
            <li className="hover:text-[#1DA1F2] transition-colors duration-300">
              <FaXTwitter size={20}/>
            </li>
          {/* </Link> */}
          {/* <Link to={'https://www.linkedin.com/in/shahul-ahmed/'}> */}
            <li className="hover:text-[#0077B5] transition-colors duration-300">
              <AiFillLinkedin size={20} />
            </li>
          {/* </Link>
          <Link to={'https://www.instagram.com/vincenzo_773/'}> */}
            <li className="hover:text-[#E1306C] transition-colors duration-300">
              <AiFillInstagram size={20} />
            </li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;