import React, { useEffect, useState } from "react";
import like from "../assets/VideoPlayer/like.png";
import dislike from "../assets/VideoPlayer/dislike.png";
import save from "../assets/VideoPlayer/save.png";
import share from "../assets/VideoPlayer/share.png";

import moment from "moment";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [apidata, setApidata] = useState(null);
  const [error, setError] = useState(null);
  const [Channel, setChannel] = useState(null);
  const [comment, setComments] = useState([]);

  // Fetch video data
  const fetchVideoData = async () => {
    const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await fetch(videourl);
      if (!response.ok) {
        throw new Error("Failed to fetch video data.");
      }
      const data = await response.json();
      setApidata(data.items[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch channel data
  const FetchChannelData = async () => {
    if (apidata && apidata.snippet && apidata.snippet.channelId) {
      try {
        const ChannelData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${
          apidata.snippet.channelId
        }&key=${import.meta.env.VITE_API_KEY}`;

        const response = await fetch(ChannelData);
        if (!response.ok) {
          throw new Error("Error fetching channel data.");
        }

        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setChannel(data.items[0]);
        } else {
          console.error("No channel data found.");
          setChannel(null);
        }
      } catch (error) {
        console.error("Failed to fetch channel data:", error);
        setChannel(null);
      }
    }
  };
  const fetchComments = async () => {
    const apiKey = import.meta.env.VITE_API_KEY; // Make sure you store your API key in the .env file
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;

    try {
      const response = await fetch(commentUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch comments data.");
      }
      const data = await response.json();
      setComments(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  // Helper function to convert large numbers (views, subscribers)
  const Converter = (val) => {
    if (val >= 1000000) {
      return Math.floor(val / 1000000) + "M";
    } else if (val >= 1000) {
      return Math.floor(val / 1000) + "K";
    }
    return val;
  };

  // Fetch video data on component mount
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  // Fetch channel data whenever apidata changes
  useEffect(() => {
    if (apidata) {
      FetchChannelData();
    }
  }, [apidata]);

  // Handle case when data or channel is loading
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apidata) {
    return <div>Loading video data...</div>;
  }

  return (
    <div className="flex flex-col md:basis-[69%]">
      {/* Embedded Video */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="Video Player"
        ></iframe>
      </div>

      {/* Video Title */}
      <h3 className="mt-[10px] font-semibold text-[22px]">
        {apidata ? apidata.snippet.title : "Exciting Content Coming Your Way!"}
      </h3>

      {/* Video Info */}
      <div className="flex items-center justify-between flex-wrap mt-3 text-xs md:text-sm text-[#5a5a5a]">
        <p>
          {apidata
            ? `${Converter(apidata.statistics.viewCount)} Views`
            : "16K Views"}{" "}
          &bull;{" "}
          {apidata && apidata.snippet && apidata.snippet.publishedAt
            ? moment(apidata.snippet.publishedAt).fromNow()
            : ""}
        </p>
        <div className="flex">
          <span className="inline-flex items-center ml-1 md:ml-4">
            <img
              src={like}
              alt="Like"
              className="cursor-pointer w-[20px] mr-1 md:mr-2"
            />{" "}
            {apidata ? Converter(apidata.statistics.likeCount) : "1M"}
          </span>
          <span className="inline-flex items-center ml-1 md:ml-4">
            <img
              src={dislike}
              alt="Dislike"
              className="cursor-pointer w-[20px] mr-1 md:mr-2"
            />{" "}
          </span>
          <span className="inline-flex items-center ml-1 md:ml-4">
            <img
              src={share}
              alt="Share"
              className="cursor-pointer w-[20px] mr-1 md:mr-2"
            />{" "}
            Share
          </span>
          <span className="inline-flex items-center ml-1 md:ml-4">
            <img
              src={save}
              alt="Save"
              className="cursor-pointer w-[20px] mr-1 md:mr-2"
            />{" "}
            Save
          </span>
        </div>
      </div>

      <hr className="border-0 h-[1px] bg-[#ccc] my-2 md:my-3 mx-0" />

      {/* Channel Info */}
      <div className="flex items-center mt-5">
        <img
          src={Channel ? Channel.snippet.thumbnails.default.url : ""}
          alt="Channel Avatar"
          className="w-10 rounded-full mr-2 md:mr-4"
        />
        <div className="flex-1 leading-4">
          <p className="text-black font-bold text-[18px]">
            {apidata ? apidata.snippet.channelTitle : "Channel-Name"}
          </p>
          <span className="text-sm text-[#5a5a5a]">
            {Channel ? Converter(Channel.statistics.subscriberCount) : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-red-500 text-white py-2 px-8 border-0 outline-0 rounded-lg cursor-pointer">
          Subscribe
        </button>
      </div>

      {/* Video Description and Comments */}
      <div className="pl-5 md:pl-[55px] my-4 mx-0">
        <p className="text-sm mb-1 text-[#5a5a5a]">
          {apidata
            ? apidata.snippet.description.slice(0, 250)
            : "Video description not available."}
        </p>
        <hr />
        <h3 className="text-md text-[#5a5a5a] mt-4 font-bold">
          {apidata ? Converter(apidata.statistics.commentCount) : 100} Comments
        </h3>
        {comment.map((item, index) => (
          <div className="flex items-start my-5 mx-0" key={index}>
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="User Avatar"
              className="w-[40px] rounded-full mr-4"
            />
            <div>
              <h3 className="text-sm mb-1">
                {item.snippet.topLevelComment.snippet.authorDisplayName}
                <span className="text-xs text-[#5a5a5a] font-medium ml-2">
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="flex items-center my-2 mx-0 text-sm">
                <img src={like} alt="Like" className="w-5 mr-1" />
                <span className="mr-5 text-[#5a5a5a]">
                  {Converter(item.snippet.topLevelComment.snippet.likeCount)}
                </span>
                <img src={dislike} alt="Dislike" className="w-5 mr-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
