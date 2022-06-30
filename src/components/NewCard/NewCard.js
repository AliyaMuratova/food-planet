import React from 'react';
import styles from "../NewCard/NewCard.module.css";
import minus from "../../assets/images/Minus.svg";
import plus from "../../assets/images/Plus.svg";
import AddButton from "../AddButton/AddButton";


const NewCard = (props) => {

    let addToCart = () => {
        let productsFromLocalStorage = {};
        if (localStorage.getItem('cart')) {
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        const product = {}
        product[props.id] = {
            ...props
        };

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}))

    };

    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img}/>
            <h4>{props.name}</h4>
            <p className={styles.desc}>{props.desc}</p>
            <h4>{props.price} сом</h4>
            <div className={styles.count}>
                <span><img src={minus} alt=""/></span>
                <p className={styles.count_number}>{props.quantity}</p>
                <span><img src={plus} alt=""/></span>
            </div>
            <AddButton
                id={props.id}
                addToCart={addToCart}
            />
        </div>
    );
};

export default NewCard;