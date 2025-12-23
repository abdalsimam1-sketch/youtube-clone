import React from "react";

export const VideoCard = ({ video }) => {
  return (
    <>
      <div className="col-10 mx-auto col-md-7 col-sm-4">
        <div className="card ">
          <div className="card-img-top">
            <img src={video.snippet.thumbnails.default.url} alt="" />
          </div>
          <footer className="d-flex flex-column">
            <h3>{video.snippet.title}</h3>
          </footer>
        </div>
      </div>
    </>
  );
};
