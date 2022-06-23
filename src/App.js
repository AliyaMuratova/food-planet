import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';
import CartPage from "./pages/CartPage/CartPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

const App = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={
                    <CartPage
                        modalActive={modalActive}
                        setModalActive={setModalActive}
                    />}
                />
            </Routes>
            <CheckoutForm modalActive={modalActive} setModalActive={setModalActive}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
