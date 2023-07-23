"use client";
import "./Header.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiTaichilang } from "react-icons/si";
import { SlArrowLeft } from "react-icons/sl";
import { Web3Button } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { Card } from "antd";
import logo from "./logo.png"
import sponsored from "./sponsored.png"

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
            <img style={{marginLeft:"10%", width:"120px"}} src={logo}/>
          </NavLink>
        </div>
      </nav>
      <nav>
        {/* Notification Drawer */}
        {!open && (
          <div className="nav-input-search">
            <Web3Button />
            <img
              onClick={showDrawer}
              style={{ paddingLeft: "8%", width: "60px" }}
              src="https://cdn3d.iconscout.com/3d/premium/thumb/notification-3994308-3307642.png?f=webp"
            />
          </div>
        )}
        {open && (
          <div className="drawer">
            <div className="drawer-heading">
              <SlArrowLeft onClick={onClose}/>
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

            {notification.map((item) => {
              return (
                <div >
                  <img className="sponsored" src={sponsored}/>
                  <img
                        className="sponsor"
                        src="data:image/png;base64,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"
                      />
                  <div className="card-container">
                    
                    <div>Unstoppable Domains
                      
                    </div>
                    <div>
                      <a>
                      Get 30%* off .polygon domains through August 13th.
                      </a>

  
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};
