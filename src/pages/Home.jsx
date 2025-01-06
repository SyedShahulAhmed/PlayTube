import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

const Home = ({ Show }) => {
  const [cat, setCat] = useState(0); // Rename to lowercase to avoid conflict with props

  return (
    <div>
      <SideBar Show={Show} cat={cat} setCat={setCat} />
      <div
        className={`${
          Show ? "pl-3 md:pl-[16%]" : "pl-[8%]"
        } bg-[#f9f9f9] pr-[2%] py-[20px]`}
      >
        <Feed cat={cat} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
