import React from 'react';
import styles from "../NewCard/NewCard.module.css";
import minus from "../../assets/images/Minus.svg";
import plus from "../../assets/images/Plus.svg";

const NewCard = ({onAddItem, item}) => {
    return (
        <div className={styles.card}>
            <img src={item.img} alt="" className={styles.card_img}/>
            <h4>{item.name}</h4>
            <p className={styles.desc}>{item.desc}</p>
            <h4>{item.price} сом</h4>
            <div className={styles.count}>
                <span><img src={minus} alt=""/></span>
                <p className={styles.count_number}>{item.quantity = 1}</p>
                <span><img src={plus} alt=""/></span>
            </div>
            <button onClick={() => onAddItem(item)} className={styles.card_button}>В корзину</button>
        </div>
    );
};

export default NewCard;