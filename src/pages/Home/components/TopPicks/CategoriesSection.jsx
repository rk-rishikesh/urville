import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopPicksSection.css";

export const CategoriesSection = () => {
  var [appID, setAppID] = useState([]);
  var [appImages, setAppImages] = useState([]);
  var [appName, setAppName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(true);
      // Fetch appIDList from smart contract
      var appIDList = [
        "wildcard.app",
        "mintify.app",
        "sparkball.app",
        "surfaceboard.app",
      ];
      var appImagesList = [];
      var appNameList = [];
      let i = 0;
      for (i = 0; i < 4; i++) {
        const response = await fetch(
          `https://api.meroku.store/api/v1/dapp/search/${appIDList[i]}`
        );
        const data = await response.json();
        appImagesList.push(data.data[0].images);
        appNameList.push(data.data[0].name);
      }
      setAppID(appIDList);
      setAppImages(appImagesList);
      setAppName(appNameList);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="featured-loading">
        <img
          style={{ width: "200px" }}
          src="https://investuttarakhand.uk.gov.in/backoffice/themes/swcsNewTheme/img/straight-loader.gif"
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="TopPicks-heading">Top Pick</h1>
        <div className="TopPicks-container-one">
          <Link to="/product-details/wildcard.app" className="toppick-card">
            <h3>{appName[0]}</h3>

            <img className="logo" src={appImages[0].logo} />

            <img className="img-cont" src={appImages[0].banner} alt={"NFT"} />
          </Link>
          <Link to="/product-details/mintify.app" className="toppick-card">
            <h3>{appName[1]}</h3>
            <img className="logo" src={appImages[1].logo} />

            <img className="img-cont" src={appImages[1].banner} alt={"Game"} />
          </Link>
        </div>
        <div className="TopPicks-container-two">
          <Link to="/product-details/sparkball.app" className="toppick-card">
            <h3>{appName[2]}</h3>

            <img className="logo" src={appImages[2].logo} />

            <img className="img-cont" src={appImages[2].banner} alt={"DeFi"} />
          </Link>
          <Link to="/product-details/surfaceboard.app" className="toppick-card">
            <h3>{appName[3]}</h3>

            <img className="logo" src={appImages[3].logo} />

            <img className="img-cont" src={appImages[3].banner} alt={"DeFi"} />
          </Link>
        </div>
      </div>
    );
  }
};
