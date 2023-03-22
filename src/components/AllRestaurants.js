import React from "react";
import ResponsiveCardDeck from "./ResponsiveCardDeck";
import RestaurantCard from "./RestaurantCard";

const AllRestaurants = ({ restaurants }) => {
    return (
        <ResponsiveCardDeck>
            {restaurants.map(restaurant => {
                return <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
            })}
        </ResponsiveCardDeck>
    )
}




export default AllRestaurants;