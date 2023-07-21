import "./ProductImage.css";
import Tilt from "react-parallax-tilt";


import React from "react";
import { useEffect, useState } from 'react';

export const ProductImage = ({ appID }) => {

  const [img, setImg] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch(`https://api.meroku.store/api/v1/dapp/search/${appID}`);
      const data = await response.json();
      console.log(data)
      setImg(data.data[0].images.logo)
    };

    fetchData();
  }, []);

  return (
    <Tilt
      tiltEnable={false}
      scale={1.05}
      transitionSpeed={1000}
      className="product-details-image"
    >
      {" "}
      <img src={img} alt={"Open Sea"}/>
    </Tilt>
  );
};
