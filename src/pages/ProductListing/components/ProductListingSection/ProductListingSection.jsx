import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProductListingSection = (category) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1); // track the current page
  const [pageCount, setPageCount] = useState(0);

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
    const fetchData = async () => {
      const response = await fetch(
        "https://api.meroku.store/api/v1/dapp?page=0"
      );

      const data = await response.json();
      const initialCards = data.response || [];
      const pageCount = data.pageCount || 0;
      // var i = 0;
      //   for (i = 0; i < 10; i++) {
      //     console.log(initialCards[i].category);
      //     if (initialCards[i].category == category.category) {
      //       nftApps.push(initialCards[i]);
      //       nftAppsCount = nftAppsCount + 1;
      //     }
      //   }
      // console.log(initialCards);
      setCards(initialCards);
      console.log(initialCards[0]);
      setPageCount(pageCount);
    };

    fetchData();
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
