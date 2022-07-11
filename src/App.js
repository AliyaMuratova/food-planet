import React, {useEffect, useState} from "react";
import {Toaster} from 'react-hot-toast';
import {createContext} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import './App.css';
import ContactsPage from "./pages/ContactsPage/ContactsPage";

export const MyContext = createContext('Default Value');

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [productCount, setProductCount] = useState(0);

    const changeProductCount = () => {
        const storageData = (JSON.parse(localStorage.getItem('cart')))
        const countProducts = Object.values(storageData ? storageData : {});
        setProductCount(countProducts.length)
    }

    useEffect(changeProductCount, [])

    return (
        <BrowserRouter>
            <MyContext.Provider value={{productCount, changeProductCount, modalActive, setModalActive}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
                <CheckoutForm/>
                <Footer/>
                <Toaster/>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
