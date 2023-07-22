import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { CategoriesSection } from "./components/TopPicks/CategoriesSection";
import { VideosSection } from "./components/VideosSection/VideosSection";
import { HeroVideo } from "./components/HeroVideo/HeroVideo";
import { Welcome } from "./components/Welcome/Welcome";
import { useAccount, useDisconnect } from "wagmi";
import { UrvilleContract, UrvilleABI } from "../../contracts/urville";
const ethers = require("ethers");

export const Home = () => {
  
  const { isConnected, address } = useAccount();
  const [first, setFirstTimeUser ] = useState(false);

  console.log(address);

  useEffect(() => {
    if (isConnected) {
      checkUserHasNFT();
    }
  }, []);

  const checkUserHasNFT = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      console.log(signer);
      const urvilleNFT = new ethers.Contract(
        UrvilleContract,
        UrvilleABI,
        signer
      );

      console.log(urvilleNFT);

      console.log(address);
      const balance = await urvilleNFT.balanceOf(address, 1);
      console.log(balance)
      if(balance == 0) {
        console.log("First Time User")
        setFirstTimeUser(true);
      }
      
      
    }
  };

  return (
    <div>
      <div>
        {isConnected && first && <Welcome />}
        {!first && (
          <>
            <HeroVideo />
            <CategoriesSection />
            <HeroSection />
            <VideosSection />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};
