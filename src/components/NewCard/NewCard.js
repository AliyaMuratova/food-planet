import React, {useState} from 'react';
import styles from "../NewCard/NewCard.module.css";
import minus from "../../assets/images/Minus.svg";
import plus from "../../assets/images/Plus.svg";

const NewCard = (props) => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(oldCount => oldCount + 1)
    }
    const decrease = () => {
        setCount(oldCount => oldCount - 1)
    }

    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4>{props.title}</h4>
            <p className={styles.desc}>{props.desc}</p>
            <h4>{props.price}</h4>
            <div className={styles.count}>
                <span><img onClick={decrease} src={minus} alt="" /></span>
                <p className={styles.count_number}>{count}</p>
                <span><img onClick={increase} src={plus} alt="" /></span>
            </div>
            <button className={styles.card_button}>В корзину</button>
        </div>
    );
};

export default NewCard;