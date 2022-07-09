import React, {useState, useContext, useEffect} from 'react';
import minus from '../../assets/images/Minus.svg';
import plus from '../../assets/images/Plus.svg';
import {MyContext} from "../../App";
import AddButton from "../AddButton/AddButton";


const ProductCard = (props) => {
    const {changeProductCount} = useContext(MyContext);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1)
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
        }
    }

    let addToCart = () => {
        let productsFromLocalStorage = {};
        if (localStorage.getItem('cart')) {
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        const product = {}
        product[props.name] = {
            ...props,
            quantity
        };

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}))
        changeProductCount();

    };

    const checkProductQty = () => {
        const parseProducts = () => JSON.parse(localStorage.getItem('cart'));
        let storageData = parseProducts();

        if (!storageData) {
            return;
        }
        if (Object.values(storageData).find(x => x.id === props.id)) {
                setQuantity(storageData[props.name].quantity)
            }
    };

    useEffect(checkProductQty, [])


    return (
        <div className={props.card}>
            <img src={props.img} alt="" className={props.cardImg}/>
            <h4>{props.name}</h4>
            <p className={props.description}>{props.desc}</p>
            <h4>{props.price} сом</h4>
            <div className={props.count}>
                <span onClick={handleDecrement}><img src={minus} alt=""/></span>
                <p className={props.countNumber}>{quantity}</p>
                <span onClick={handleIncrement}><img src={plus} alt=""/></span>
            </div>
            <AddButton
                className={props.button}
                id={props.id}
                addToCart={addToCart}
                checkProductQty={checkProductQty}
            />
        </div>
    );
};

export default ProductCard;