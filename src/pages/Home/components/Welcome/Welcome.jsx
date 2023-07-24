import React from "react";
import { useState } from "react";
import "./Welcome.css";
import { UrvilleContract, UrvilleABI } from "../../../../contracts/urville";
import { useAccount } from "wagmi";
import Benefits from "./Benefits.png";
const ethers = require("ethers");


export const Welcome = () => {
  const { address } = useAccount();

  const [first, setFirstTimeUser ] = useState(false);

  var [img, setImg] = useState(
    "https://cdn.pixabay.com/photo/2022/04/04/16/24/futuristic-7111766_1280.jpg"
  );
  var [boxImg, setBoxImg] = useState(
    "https://cdn3d.iconscout.com/3d/premium/thumb/nft-mistery-box-4731026-3934285.png"
  );
  var [claim, setClaim] = useState(false);

  const [claimed, setClaimed] = useState(false);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const handleClick = (event) => {
    setImg(
      "https://gifdb.com/images/high/flashing-lights-blinding-white-0padu0xw36mg8d7p.gif"
    );

    sleep(1500).then(() => {
      setBoxImg(
        "https://bafybeifdhfx5obbfplj2lwos2kvt45y3sql45xaiveijtyjytergc3ffsa.ipfs.nftstorage.link/"
      );
      setClaim(true);
      setImg(
        "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl0Y2glMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      );
    });
  };

  const claimWelcomeNFT = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      console.log(signer);
      // const urvilleNFT = new ethers.Contract(
      //   UrvilleContract,
      //   UrvilleABI,
      //   signer
      // );

      // console.log(urvilleNFT);

      // console.log(address);
      // const claim = await urvilleNFT.mint();

      // console.log(claim);
      setClaimed(true);
    }
  };

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

  const explore = async () => {
    await checkUserHasNFT()
    if(!first){
      window.location.href = '/'
    }

  }

  return (
    <div>
      {!claimed && (
        <div>
          <img onClick={handleClick} class="box" src={boxImg} />
          <img class="bg" src={img} />
          {claim && (
            <button onClick={claimWelcomeNFT} className="claim-btn">
              Claim Now
            </button>
          )}
        </div>
      )}
      {claimed && (
        <div>
          <img
            class="benefits-bg"
            src={Benefits}
          />
         <button onClick={explore} className="home-btn">
              Explore Urville
            </button>
        </div>
      )}
    </div>
  );
};
