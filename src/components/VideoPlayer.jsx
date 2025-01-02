import React from "react";
import like from "../assets/SampleVideo/like.png";
import dislike from "../assets/SampleVideo/dislike.png";
import save from "../assets/SampleVideo/save.png";
import share from "../assets/SampleVideo/share.png";
import sample from "../assets/SampleVideo/sample.png";
import Sampleuser from "../assets/SampleVideo/Sampleuser.png";
import video from "../assets/SampleVideo/sample.mp4";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col basis-[69%]">
      <video src={video} controls autoPlay muted className="w-full"></video>
      <h3 className="mt-[10px] font-semibold text-[22px]">Lorem ipsum dolor sit amet.</h3>
      <div className="flex  items-center justify-between flex-wrap mt-3 text-sm text-[#5a5a5a]">
        <p>3333 Views &bull; 2 days ago</p>
        <div className="flex">
          <span className="inline-flex items-center ml-4">
            <img src={like} alt="" className="cursor-pointer w-[20px] mr-2" /> 125
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={dislike} alt="" className="cursor-pointer w-[20px] mr-2" /> 9
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={share} alt="" className="cursor-pointer w-[20px] mr-2" /> Share
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={save} alt="" className="cursor-pointer w-[20px] mr-2" /> Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#ccc] my-3 mx-0"/>
      <div className="flex items-center mt-5">
        <img src={sample} alt="" className="w-10 rounded-full mr-4"/>
        <div className=" flex-1 leading-4">
          <p className="text-black font-semibold text-[18px]">ChannelName</p>
          <span className="text-sm text-[#5a5a5a]">1M Subscribers</span>
        </div>
        <button className="bg-red-500 text-white py-2 px-8 border-0 outline-0 rounded-lg cursor-pointer">Subscribe</button>
      </div>
      <div className="pl-[55px] my-4 mx-0 ">
        <p className="text-sm mb-1 text-[#5a5a5a]">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm mb-1 text-[#5a5a5a]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, enim?</p>
        <hr />
        <h3 className="text-md text-[#5a5a5a] mt-4 font-bold">150 Comments</h3>
        <div className="flex items-start my-5 mx-0">
          <img src={Sampleuser} alt="" className="w-[40px] rounded-full mr-4"/>
          <div>
            <h3 className="text-sm mb-1">Username <span className="text-xs text-[#5a5a5a] font-medium ml-2">1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugit soluta deserunt explicabo praesentium asperiores.</p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img src={like} alt="" className="rounded-none w-5 mr-1"/>
              <span className="mr-5 text-[#5a5a5a]">250</span>
              <img src={dislike} alt="" className="rounded-none w-5 mr-1"/>
              <span className="mr-5 text-[#5a5a5a]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
