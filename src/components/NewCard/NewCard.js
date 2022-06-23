import React, {useEffect, useState} from 'react';
import styles from "../NewCard/NewCard.module.css";
import minus from "../../assets/images/Minus.svg";
import plus from "../../assets/images/Plus.svg";
import classNames from 'classnames';


const NewCard = (props) => {
    const [style, setStyle] = useState("card_button");


    let addToCart = () => {
        let productsFromLocalStorage = {};
        if (localStorage.getItem('cart')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        const product = {}
        product[props.id]={
            ...props
        };

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}))

        setStyle("card_button_added");

    };

        return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img}/>
            <h4>{props.name}</h4>
            <p className={styles.desc}>{props.desc}</p>
            <h4>{props.price} сом</h4>
            <div className={styles.count}>
                <span ><img src={minus} alt=""/></span>
                <p className={styles.count_number}>{props.quantity}</p>
                <span ><img src={plus} alt=""/></span>
            </div>
            <button onClick={addToCart} className={styles.card_button}>В корзину</button>
        </div>
    );
};

export default NewCard;