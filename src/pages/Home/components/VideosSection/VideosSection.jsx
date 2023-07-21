import React from "react";
import ReactPlayer from "react-player";
import "./VideosSection.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export const VideosSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-listing/nft")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-1.mp4`}
            url="https://cdn.pixabay.com/vimeo/420236861/circuit-39350.mp4?width=1280&hash=d36c7b3deaf1bfa7516a0c21a396ad593869046c"
            playing
            playbackRate={1.15}
            muted
            loop
            controls={false}
            width="100%"
            height="119.9%"
          />

          <h3>NFT</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-listing/finance")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-2.mp4`}
            url="https://cdn.dribbble.com/users/30229/screenshots/16975390/media/1e67d4621d3a7159925c36a064baf53a.mp4"
            playing
            playbackRate={1.6}
            muted
            loop
            controls={false}
            width="100%"
            height="112.65%"
          />

          <h3>DeFi</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          {" "}
          <ReactPlayer
            onClick={() => navigate("/product-listing/social-networking")}
            // url={`${process.env.PUBLIC_URL}/assets/videos/hero-video-4.mp4`}
            url="https://cdn.pixabay.com/vimeo/449623784/web-46961.mp4?width=640&hash=d1c3292fe2a318f29aeaa8bda4db395f34f34866"
            playing
            playbackRate={1}
            muted
            loop
            controls={false}
            width="100%"
            height="119.8%"
          />
          <h3>Social</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-listing/games")}
            url="https://cdn.pixabay.com/vimeo/616430996/video-games-89894.mp4?width=640&hash=41468641351a64a084a3d62bfd43ee5ff2474608"
            playing
            playbackRate={2.8}
            muted
            loop
            controls={false}
            width="100%"
            margin="0px"
            padding="0px"
            height="119.9%"
          />

          <h3>Game</h3>
          <span className="notch"></span>
        </Tilt>
        
      </div>
    </>
  );
};
