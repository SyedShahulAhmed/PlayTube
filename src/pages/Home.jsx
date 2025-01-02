import React from "react";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

const Home = ({ Show }) => {
  return (
    <div>
      <SideBar Show={Show} />
      <div
        className={`${
          Show ? "pl-3 md:pl-[16%]" : "pl-[8%]"
        } bg-[#f9f9f9] pr-[2%] py-[20px]`}
      >
        <Feed />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
