import React from 'react';
import styles from './MenuCard.module.css';
import minus from '../../assets/images/Minus.svg';
import plus from '../../assets/images/Plus.svg';


const MenuCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4>{props.title}</h4>
            <p className={styles.desc}>{props.desc}</p>
            <h4>{props.price}</h4>
            <div className={styles.count}>
                <span><img src={minus} alt="" /></span>
                <p className={styles.count_number}>1</p>
                <span><img src={plus} alt="" /></span>
            </div>
            <button className={styles.card_button}>В корзину</button>
        </div>
    );
};

export default MenuCard;