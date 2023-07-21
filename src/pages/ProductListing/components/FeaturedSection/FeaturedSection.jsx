import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedSection.css";

export const FeaturedSection = () => {
  var [appID, setAppID] = useState([]);
  var [appImages, setAppImages] = useState([]);
  var [appName, setAppName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch appIDList from smart contract
      var appIDList = [
        "opensea.app",
        "mintify.app",
        "rarible.app",
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
        <h1 className="featured-heading">Featured Apps</h1>

        <div className="featured-container">
          <Link to="/product-details/opensea.app" className="feature-card">
            <h3>{appName[0]}</h3>

            <img
              className="logo"
              src="https://i0.wp.com/sangkrit.net/wp-content/uploads/2013/12/sangkrit.net_featured.png?fit=203%2C205&ssl=1"
            />

            <img className="img-cont" src={appImages[0].logo} alt={"NFT"} />
          </Link>
          <Link to="/product-details/mintify.app" className="feature-card">
            <h3>{appName[1]}</h3>
            <img
              className="logo"
              src="https://i0.wp.com/sangkrit.net/wp-content/uploads/2013/12/sangkrit.net_featured.png?fit=203%2C205&ssl=1"
            />

            <img className="img-cont" src={appImages[1].logo} alt={"Game"} />
          </Link>
          <Link to="/product-details/rarible.app" className="feature-card">
            <h3>{appName[2]}</h3>

            <img
              className="logo"
              src="https://i0.wp.com/sangkrit.net/wp-content/uploads/2013/12/sangkrit.net_featured.png?fit=203%2C205&ssl=1"
            />

            <img className="img-cont" src={appImages[2].logo} alt={"DeFi"} />
          </Link>
          <Link to="/product-details/surfaceboard.app" className="feature-card">
            <h3>{appName[3]}</h3>

            <img
              className="logo"
              src="https://i0.wp.com/sangkrit.net/wp-content/uploads/2013/12/sangkrit.net_featured.png?fit=203%2C205&ssl=1"
            />

            <img className="img-cont" src={appImages[3].logo} alt={"DeFi"} />
          </Link>
        </div>
      </div>
    );
  }
};
