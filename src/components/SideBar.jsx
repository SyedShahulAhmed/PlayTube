import React from "react";
import { Channels, SideLinks } from "../assets/index";

const SideBar = ({ Show, cat, setCat }) => {
  return (
    <div
      className={`${
        Show ? "w-[5%]" : "w-[15%]"
      } hidden md:block fixed pt-[20px] md:pl-[2%] h-screen`}
    >
      {/* Side Links */}
      <div className="flex flex-col gap-4 mb-5">
        {SideLinks.map((item) => (
          <div
            key={item.id}
            className={`flex justify-start items-center gap-4 cursor-pointer ${
              cat === item.Cate ? "text-red-600 font-semibold " : "text-gray-700"
            }`}
            onClick={() => setCat(item.Cate)} // Update category
          >
            <img
              src={item.img}
              alt={item.name}
              className={`${Show ? "w-5" : "w-6"}`}
            />
            {Show ? <p>{item.name}</p> : ""}
          </div>
        ))}
      </div>

      <hr className="w-[80%] mx-auto" />

      {/* Subscriptions */}
      {Show && <h1 className="font-semibold my-2 mb-4">Subscriptions</h1>}
      <div className="flex flex-col justify-start items-start gap-2">
        {Channels.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-4 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.channel}
              className={`${
                Show ? "w-5" : "w-6 mt-2"
              } rounded-full`}
            />
            {Show ? (
              <p className="text-[#5a5a5a] text-sm font-semibold">{item.channel}</p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
