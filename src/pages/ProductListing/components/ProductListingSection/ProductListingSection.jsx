import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { nft, defi, game, social } from "../../../../data";

export const ProductListingSection = (category) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1); // track the current page
  const [pageCount, setPageCount] = useState(0);
  const [apps, setApps] = useState([]);

  const loadMoreCards = async () => {
    const nextPage = page + 1;
    const response = await fetch(
      `https://api.meroku.store/api/v1/dapp?page=${nextPage}`
    );
    const data = await response.json();
    console.log(data);
    const newCards = data.response || [];
    console.log(newCards);

    setPage(nextPage);
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const truncDesc = (desc) => {
    const truncatedDescription =
      desc.length > 22
        ? desc.substring(0, 22) + "..." // Truncate description if it exceeds 22 characters
        : desc; // Use the full description if it's shorter

    return truncatedDescription;
  };

  useEffect(() => {
    console.log(category.category);

    const fetchDataById = async (category) => {

      var i = 0;
      console.log(category.length)
      for(i = 0; i < category.length; i ++) {
        console.log(category[i])
        const response = await fetch(
          `https://api.meroku.store/api/v1/dapp/search/${category[i]}`
        );
        const data = await response.json();
        console.log(data.data)
        const newCards = data.data
        setCards((prevCards) => [...prevCards, ...newCards]);
      }

    };

    if (category.category == "nft") {
      fetchDataById(nft);
      console.log(nft.length)
    } else if (category.category == "finance") {
      fetchDataById(defi);
    } else if (category.category == "games") {
      fetchDataById(game);
    } else {
      fetchDataById(social);
    }

  }, []);

  return (
    <>
      <div className="product-card-container">
        {cards.map((app) => (
          <div>
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={false}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="product-card">
                <div className="product-card-image">
                  <Tilt
                    transitionSpeed={2000}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.18}
                  >
                    <img src={app.images.logo} />
                  </Tilt>
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product-details/${app.dappId}`}
                >
                  <div className="product-card-buttons">
                    <button className="cart-btn">{truncDesc(app.name)}</button>
                  </div>
                </Link>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};
