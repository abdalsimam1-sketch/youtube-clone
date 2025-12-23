import React from "react";
import { VideoCard } from "./VideoCard";

export const VideoList = ({ videos }) => {
  return (
    <>
      <div className="row">
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video}></VideoCard>;
        })}
      </div>
    </>
  );
};
