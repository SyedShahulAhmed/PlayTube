import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SideVideo = ({ catId }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchMostPopularVideos = async () => {
    const apiKey = import.meta.env.VITE_API_KEY; 
    const mostPopularUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=0&key=${apiKey}`;
    
    try {
      const response = await fetch(mostPopularUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch popular videos.");
      }
      const data = await response.json();
      setVideos(data.items); // Ensure `items` is an array.
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
    fetchMostPopularVideos();
  }, [catId]); // Add `catId` as a dependency.

  return (
    <div className="hidden md:block basis-[30%]">
      {error && <p className="text-red-500">{error}</p>}
      {videos.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
             <div className="flex justify-between mb-2" key={index}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet?.title || 'Thumbnail'}
            className="basis-[49%] w-[50%]"
          />
          <div className="basis-[49%]">
            <h4 className="text-sm mb-1">{item.snippet?.title || 'No Title'}</h4>
            <p>{item.snippet?.channelTitle || 'Unknown Channel'}</p>
            <p>{item.statistics?.viewCount ? `${Converter(item.statistics.viewCount)} Views` : 'No Views'}</p>
          </div>
        </div></Link>
      ))}
    </div>
  );
};

export default SideVideo;
