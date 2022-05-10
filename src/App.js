import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";
import New from "./components/New/New";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import './App.css';

const App = () => {
  return (
      <>
        <Header/>
        <Banner/>
        <New/>
        <Menu/>
        <Advantages/>
        <Reviews />
        <Footer/>
      </>
  );
}

export default App;
