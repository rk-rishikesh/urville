import "./ProductDescription.css";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useEffect, useState } from 'react';

export const ProductDescription = ({ appID }) => {

  const [description, setDescription] = useState("");
  const [url, setAppURL] = useState("");
  const [name, setName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.meroku.store/api/v1/dapp/search/${appID}`);
      const data = await response.json();
      console.log(data)
      setName(data.data[0].name)
      setDescription(data.data[0].description)
      setAppURL(data.data[0].appUrl)
    };

    fetchData();
  }, []);

  return (
    <div className="product-details-description">
      <h1 className="product-name">{name}</h1>

      <div className="ratings-reviews">
        <span></span>
        <span>5</span>{" "}
        <BsFillStarFill color={"orange"} />
        <span>
          <span className="review">(23) reviews </span>
        </span>
      </div>

      <p className="description-container">
        {description}
      </p>

      <div className="product-card-buttons-container">


        <a  target="_blank" href={url}>
        <button 
          className="add-to-cart-btn"
        >
          Visit DApp
          </button>
    </a>
        <button 
          className="add-to-wishlist-btn"
        >
         Add to wall
        </button>
      </div>
    </div>
  );
};
