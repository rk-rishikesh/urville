import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

export const CategoriesSection = () => {

    return (
      <div>
        <h1 className="categories-heading">Feature Your App</h1>
        <div className="categories-container-one">
          <Link to="/product-details/opensea.app" className="category-card">
            <h3>Your DApp Here</h3>

            <img
              className="featured"
              src="https://bafkreibq2jadfnm5d5hzv4fp3owa46uhg5spiklcvah6yatanr5jc7v234.ipfs.nftstorage.link/"
            />

         <img
              className="img-feature"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAdVBMVEX///8AAAD8/PyBgYH6+vqenp6srKzMzMzW1tbz8/PCwsL39/ebm5vh4eEXFxempqZXV1d6enpJSUnKysq8vLxjY2OEhISPj4/b29sODg4hISFTU1Pq6uqWlpZubm4vLy84ODhBQUGysrJvb28zMzMjIyNeXl5dIDGGAAADPElEQVR4nO3Wa5eaOhiGYd4YToIKiuKJzuiezv//iU0AIUFXq93d7epe9/VhDhGS95EcCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+HsppR42//hG5+/sVxXzSgHfodPdrLe7ZGNXVXlrLRJ/YF2Xs2jSVAydbK9jezYrS3uzyupZmTjfXtJ3Xq8WfjXNUMs6HUvM5v31eax09mJcHaxkkDo1jK2TgEEtMvdGUfowXu0EtFdm2s6MSiRwK7sMl9de524tY/fqPLRe9q8/zkiWsbXZNH7AqGuO9l4YlZpxTn7mrLxG0RdZRlHUXJ0KQll2/81NQNdaisT0Xa1FvGcYiWzaUuLcDWiGbGxzuHSDPx/wOPTkBeyC6enKzOVkyvAD2p+rLo3WTwX8p71Rm8kwCaj6Ssa1rIL0dtn5MHnkzzAB94vFIo5tFjdgZVoXuVLaC2hqSgtZB8613VfQp1HPPcEv7e9YJJ4EbGupvG5swMoGzYKdvP1EwI6/rm5rcDa9fCWlrWt+t+MOaR403Qd8NxtQWYh8PKzl6rX2AW3ElRxeXoSRHD632+3lLuDJtBZ3Ab/aVXCRt38ZsPOR+0vKBGxr8XfpIaD+yYDdGvT2EhuwXf6xypxVpezXsb6s3/oRH6YZ5bK081s9nKJZejSblT//o+46vVeZe572U9Ssy5m8v5au7fTYDqK9I3rYZAJvf9dvUpxOp+IoX6f9PAhY3TbJZrJ0bEBlZ/pky7htMiaMs1eNm8xCJH8q1Mg+k2P7jNR0itbRytq5z+oqxa30KnBreBjQnF8fUbLf7Mw2733QBmxP1Ngb1wQM20Gj7dmp0QSs5/OqqpdyePWY0KYwSe/fr+LxyHUCmhM9sSe3Do5yOPt5mrszSqnrrY9P/8t4l8/2t5nqZ+1tu4PxfFR6POjX51eXoM7CMJ/f37VpTHto1c6ncdMk7WGX5nlT+XeFeZNMOsl0Og93uyZK/FfUvbn7bJ9MmOcrN2DUDWmUTkC16ZtXSaB+1buu4/Er+H/t9w36R+L9oVF/n/97PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB/7BhfsHzCbqYOQAAAAAElFTkSuQmCC"
              alt={"NFT"}
            />
          </Link>
        </div>
      </div>
    );
  
};
