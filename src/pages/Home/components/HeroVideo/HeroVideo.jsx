import "./HeroVideo.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Web3Button } from "@web3modal/react";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";

export const HeroVideo = () => {
  const Navigate = useNavigate();
  const { isConnected, address } = useAccount();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://cdn.pixabay.com/vimeo/365890980/abstract-27726.mp4?width=640&hash=d45867f83b48e0a39f8102d2a97e668e658f6f6f"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
        {/* <img style={{width:"100%", height:"100%"}} src="https://img.freepik.com/premium-photo/3d-render-blue-background-text-blue-pink-balloons-side-view_589961-246.jpg?w=360"/> */}
      </div>

      <div className="hero-text">
        <h1>Sneak into Next Gen Apps</h1>
        <h2>Where Innovation Meets Decentralization</h2>
      </div>
      {isConnected && (
        <button
          onClick={() => (window.location.href = "/")}
          className="shop-now-btn"
        >
          Explore Now
        </button>
      )}
    </div>
  );
};
