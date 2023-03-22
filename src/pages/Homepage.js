import React from "react";
import HeaderBody from "../components/HeaderBody"
import FoodCategories from '../components/FoodCategories';
import NarrowBy from "../components/NarrowBy"
import ZeroDollarDeliveryFee from '../components/ZeroDollarDeliveryFee';
import AllRestaurants from "../components/AllRestaurants";
import YourFavourites from "../components/YourFavourites";
import RestaurantSkeletonCardDeck from "../components/RestaurantSkeletonCardDeck";

const Homepage = ({ restaurants, isLoading, updateSearchText }) => {
    return (
        <>
            {isLoading && <RestaurantSkeletonCardDeck />}
            <HeaderBody />
            <FoodCategories updateSearchText={updateSearchText} />
            <NarrowBy restaurants={restaurants} />
            <ZeroDollarDeliveryFee restaurants={restaurants} />
            <YourFavourites restaurants={restaurants} />
            <AllRestaurants restaurants={restaurants} />
        </>
    )
}

export default Homepage;