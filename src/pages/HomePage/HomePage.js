import React from 'react';
import Banner from "../../components/Banner/Banner";
import New from "../../components/New/New";
import Menu from "../../components/Menu/Menu";
import Advantages from "../../components/Advantages/Advantages";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => {
    return (
        <>
            <Banner/>
            <New/>
            <Menu/>
            <Advantages/>
            <Reviews />
        </>
    );
};

export default HomePage;