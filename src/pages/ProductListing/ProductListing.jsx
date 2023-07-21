import React from "react";
import { useParams } from "react-router-dom";
import "./ProductListing.css";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";
import { FeaturedSection } from "./components/FeaturedSection/FeaturedSection";

export const ProductListing = () => {
  const { category } = useParams();
  return (
    <>
      <FeaturedSection />
      <h1 className="product-heading">All Apps</h1>
      <div className="page-container">
        <ProductListingSection
          className="products-container"
          category={category}
        />
      </div>
    </>
  );
};
