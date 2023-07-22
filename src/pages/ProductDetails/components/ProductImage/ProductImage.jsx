import "./ProductImage.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

export const ProductImage = ({ appID }) => {
  const [img, setImg] = useState("");
  const [screenshotOne, setScreenshotOne] = useState("")
  const [screenshotTwo, setScreenshotTwo] = useState("")
  const [screenshotThree, setScreenshotThree] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.meroku.store/api/v1/dapp/search/${appID}`
      );
      const data = await response.json();
      console.log(data);
      setImg(data.data[0].images.logo);
      setScreenshotOne(data.data[0].images.screenshots[0])
      console.log(data.data[0].images.screenshots[1])
      setScreenshotTwo(data.data[0].images.screenshots[1])
      setScreenshotThree(data.data[0].images.screenshots[2])
    };

    fetchData();
  }, []);

  return (
    <div className="img-section">
      <div>
        <Tilt
          tiltEnable={false}
          scale={1.05}
          transitionSpeed={1000}
          className="product-details-image"
        >
          {" "}
          <img style={{borderRadius: "2%"}} src={img} alt={"Open Sea"} />
        </Tilt>
      </div>
      <div className="screenshots">
        <img src={screenshotOne} />
        {screenshotTwo!= undefined && <img src={screenshotTwo} />}
        {screenshotTwo!= undefined && <img src={screenshotThree} />}
      </div>
    </div>
  );
};
