import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const Feed = ({ cat }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const videolist = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${cat}&key=${API_KEY}`;

    try {
      const response = await fetch(videolist);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const result = await response.json();
      setData(result.items || []);
    } catch (err) {
      setError(err.message);
    }
  };
  const Converter = (val) => {
    if(val >= 1000000){
      return Math.floor(val/1000000)+"M"
    }
    else if(val >= 1000){
      return Math.floor(val/1000)+"K" 
    }
    else{
      return val
    }
  }
  useEffect(() => {
    fetchVideos();
  }, [cat]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-[16px] gap-y-[30px] mt-[15px]">
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        data.map((item) => (
          <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <div>
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                className="w-full rounded-xl"
              />
              <h2 className="text-[16px] font-medium text-black my-1 mx-0">
                {item.snippet.title}
              </h2>
              <h3 className="text-sm font-semibold text-[#555] my-[6px] mx-0">
                {item.snippet.channelTitle}
              </h3>
              <p className="text-sm">
                {Converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Feed;
