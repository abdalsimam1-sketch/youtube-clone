import React, { useState, useEffect } from "react";
import { getPopularVideos } from "../api/api";
import { VideoList } from "../components/VideoList";
export const HomePage = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = getPopularVideos();
      setVideos(videoData);
    };
    fetchVideos;
  }, []);
  return (
    <>
      <VideoList videos={videos}></VideoList>
    </>
  );
};
