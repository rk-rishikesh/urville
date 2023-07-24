import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SponsorForm.css";

export const SponsorForm = () => {
  return (
    <div>
      <div className="sponsor-container">
        <h1 className="sponsor-heading">Create $ponsored Ad</h1>

        <form className="sponsor-body">
          <div className="input-box">
            <div className="sponsor-text-container">
              <label>Your App ID</label>
              <input required id="appID" placeholder="myapp.app" type="text" />
            </div>
            <div className="sponsor-text-container">
              <label>Sponsored Message</label>
              <input required id="appID" placeholder="Your Sponsored Ad Content" type="text" />
            </div>
          </div>
          <div className="sponsor-btn-container">
            <input value="Create Ad" type="submit" />
          </div>
          <hr style={{marginTop:"4%"}}/>
          <div className="sponsor-ad-body">
            <label>Thank you for choosing Urville to promote your app through sponsored ads on our decentralized app store.</label>
            <br/>
            <label>Sponsored ads allow apps to reach their target audience more effectively and significantly enhance the visibility of your app within the app store. </label>
            <label>We are committed to fostering a fair and transparent advertising environment for all developers and users on our decentralized app store.</label>
          </div>


        </form>
      </div>
    </div>
  );
};
