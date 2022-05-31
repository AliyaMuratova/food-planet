import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home-page";
import './App.css';
import CartPage from "./pages/cart-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const onAddItem = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map(
                    (item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item
                )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }


    const onRemoveItem = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(
                cartItems.filter(
                    (item) => item.id !== product.id
                )
            );
        } else {
            setCartItems(
                cartItems.map(
                    (item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item
                )
            );
        }
    }

    const onRemoveFromCart = (productToRemove) => {
        setCartItems(
            cartItems.filter((product) => product !== productToRemove)
        )
    }


    return (
        <BrowserRouter>
            <Header cartItems={cartItems}/>
            <Routes>
                <Route path="/" element={
                    <HomePage
                        onAddItem={onAddItem}
                        cartItems={cartItems}
                    />
                }
                />
                <Route path="/cart" element={
                    <CartPage
                        onRemoveFromCart={onRemoveFromCart}
                        onRemoveItem={onRemoveItem}
                        onAddItem={onAddItem}
                        cartItems={cartItems}
                    />
                }
                />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
