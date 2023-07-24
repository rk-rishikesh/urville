"use client";
import "./Header.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { Web3Button } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import logo from "./logo.png";
import sponsored from "./sponsored.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isConnected, address } = useAccount();
  const [showWallet, setShowWallet] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setShowWallet(true);
  };

  const showDrawer = () => {
    console.log(open);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const notification = ["Your"];

  return (
    <>
      <nav>
        <div className="nav-logo-home-button">
          <NavLink to="/">
            <img style={{ marginLeft: "10%", width: "120px" }} src={logo} />
          </NavLink>
        </div>
      </nav>
      <nav>
        {/* Notification Drawer */}
        {!open && (
          <div className="nav-input-search">
            <Web3Button />
            {/* <img 
            style={{ paddingLeft: "6%", width: "72px", marginTop:"-6px" }}
            src="https://cdn3d.iconscout.com/3d/premium/thumb/chat-group-6896117-5656080.png"/> */}
            <img
              onClick={showDrawer}
              style={{ paddingLeft: "8%", width: "60px", height:"45px" }}
              src="https://cdn3d.iconscout.com/3d/premium/thumb/notification-3994308-3307642.png?f=webp"
            />
          </div>
        )}
        {open && (
          <div className="drawer">
            <div className="drawer-heading">
              <SlArrowLeft onClick={onClose} />
              <h4
                style={{
                  color: "white",
                  marginLeft: "42%",
                  marginBottom: "6%",
                }}
              >
                Notifications Powered By Push
              </h4>
            </div>

            <Link to="/sponsor">
              <img className="sponsored" src={sponsored} />
              <img
                className="sponsor"
                src="https://mlkholgoi4sa.i.optimole.com/Cgj6y2Y-qikcYu5G/w:auto/h:auto/q:auto/https://ethanvaz.com/wp-content/uploads/2021/10/sponsor-logo-place-holder.png"
              />
              <div className="card-container">
                <div>Sponsor Title</div>
                <div>
                  <a>Your Sponsored Ad Content Here</a>
                </div>
              </div>
            </Link>
            <hr style={{ marginTop: "8%" }} />
            {notification.map((item) => {
              return (
                <a target="_blank" href="https://meroku.org/">
                  <img
                    className="sponsor"
                    src="https://avatars.githubusercontent.com/u/103726175?s=200&v=4"
                  />
                  <div className="notification-card-container">
                    <div>Meroku</div>
                    <div>
                      <a>Powering the Evolution of App Stores</a>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};
