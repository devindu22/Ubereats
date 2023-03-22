import React from "react";
import ThreeColCarousel from "./ThreeColCarousel";

const YourFavourites = ({ restaurants }) => {

    const heading =
        <h1>Your Favourites</h1>;

    var isFavouriteArray = [];

    restaurants.forEach(restaurant => {
        if (restaurant.isCustomerFavourite === true) {
            isFavouriteArray.push(restaurant)
        }
    })

    return (
        <ThreeColCarousel restaurants={isFavouriteArray} heading={heading} />
    )
}

export default YourFavourites;