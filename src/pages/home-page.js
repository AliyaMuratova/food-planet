import React from 'react';
import Banner from "../components/Banner/Banner";
import New from "../components/New/New";
import Menu from "../components/Menu/Menu";
import Advantages from "../components/Advantages/Advantages";
import Reviews from "../components/Reviews/Reviews";

const HomePage = ({cartItems,onAddItem}) => {
    return (
        <>
            <Banner/>
            <New
                cartItems={cartItems}
                onAddItem={onAddItem}
            />
            <Menu/>
            <Advantages/>
            <Reviews />
        </>
    );
};

export default HomePage;