import React from "react";
import { useState } from "react";
import "./Welcome.css";
import { UrvilleContract, UrvilleABI } from "../../../../contracts/urville";
import { useAccount } from "wagmi";
const ethers = require("ethers");

export const Welcome = () => {
  const { address } = useAccount();

  var [img, setImg] = useState(
    "https://cdn.pixabay.com/photo/2022/04/04/16/24/futuristic-7111766_1280.jpg"
  );
  var [boxImg, setBoxImg] = useState(
    "https://cdn3d.iconscout.com/3d/premium/thumb/nft-mistery-box-4731026-3934285.png"
  );
  var [claim, setClaim] = useState(false);

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
        "https://img.freepik.com/premium-vector/special-lens-flash-light-effect-flash-flashes-rays-searchlight-illust-white-glowing-light-beautiful-star-light-from-rays-sun-is-backlit-bright-beautiful-star-sunlight-glare_220217-3827.jpg"
      );
    });
  };

  const claimWelcomeNFT = async () => {
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
      const claim = await urvilleNFT.mint();

      console.log(claim);
      window.location.href = '/'
    }
  };

  return (
    <div>
      <div>
        <img onClick={handleClick} class="box" src={boxImg} />
        <img class="bg" src={img} />
        {claim && <button onClick={claimWelcomeNFT} className="claim-btn">Claim Now</button>}
      </div>
    </div>
  );
};
