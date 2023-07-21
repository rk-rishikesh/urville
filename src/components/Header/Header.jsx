"use client";
import "./Header.css";
import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiTaichilang } from "react-icons/si";
import { Web3Button } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";

export const Header = () => {
  const { isConnected, address } = useAccount();
  const [showWallet, setShowWallet] = useState(false);

  const handleClick = () => {
   setShowWallet(true)
  };


  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink to="/">
          <SiTaichilang />
          <span className="brand-name">&nbsp;&nbsp;&nbsp;Urville</span>
        </NavLink>
      </div>
      {!isConnected && (
        <div className="nav-input-search">
          <Web3Button/>
        </div>
      )}
      {isConnected && !showWallet && <div onClick={handleClick} className="nav-show-wallet">👋</div>}
      {isConnected && showWallet &&  <div className="nav-input-search">
          <Web3Button />
        </div>}
    </nav>
  );
};
