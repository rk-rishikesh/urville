import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeatureYourAppSection.css";

export const FeatureYourAppSection = () => {
  return (
    <div>
      <div className="login-container">
        <h1 className="featureapp-heading">Feature Your App</h1>

        <form
          // onSubmit={(e) => loginHandler(e, email, password)}
          className="login-body"
        >
          <div className="input-box">
            <div className="text-container">
              <label>Your App ID</label>
              <input
                // value={loginCredential.email}
                required
                // onChange={(e) =>
                //   setLoginCredential({
                //     ...loginCredential,
                //     email: e.target.value,
                //   })
                // }
                id="appID"
                placeholder="myapp.app"
                type="text"
              />
            </div>
            <div className="text-container">
              <label style={{ marginLeft: "6%" }}>
                Upload featured content
              </label>
              <label>
                <div>
                  <a className="upload">
                    Upload featured content
                    <input type="file" style={{ display: "none" }} />
                  </a>
                </div>
              </label>
            </div>
          </div>

          <div className="feature-btn-container">
            <input value="Feature" type="submit" />
          </div>
        </form>
        
        <h1 className="lootbox-heading">Create LootBox</h1>

        <form
          // onSubmit={(e) => loginHandler(e, email, password)}
        
        >
        
          <div className="input-box">
            <div className="text-container">
              <img
                style={{ width: "60%" }}
                src="https://t3.ftcdn.net/jpg/05/81/96/18/360_F_581961887_UMLpEZjYjvieMoV8EbF2pzPb3rqBxyZS.jpg"
              />
            </div>

            <div style={{ marginLeft: "-8%", marginTop: "7%" }}>
              <div className="loot-container">
                <label>NFT Contract Address </label>
                <input
                  // value={loginCredential.email}
                  required
                  // onChange={(e) =>
                  //   setLoginCredential({
                  //     ...loginCredential,
                  //     email: e.target.value,
                  //   })
                  // }
                  id="appID"
                  placeholder="0x0000....000"
                  type="text"
                />
              </div>
              <div className="loot-container">
                <label>Token ID</label>
                <input
                  // value={loginCredential.email}
                  required
                  // onChange={(e) =>
                  //   setLoginCredential({
                  //     ...loginCredential,
                  //     email: e.target.value,
                  //   })
                  // }
                  id="appID"
                  placeholder="00"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="lootbox-btn-container">
            <input value="Create Lootbox" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
