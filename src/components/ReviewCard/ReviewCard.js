import React from 'react';
import pen from '../../assets/images/Pen1.svg';
import pen1 from '../../assets/images/Pen.svg';
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={pen} alt="" className={styles.pen} />
            <div className={styles.review}>
                <img src={props.img} alt="" className={styles.avatar} />
                <p className={styles.name}>{props.name} <img src={pen1} alt="" /></p>
                <p className={styles.text}>{props.text}</p>
                <p className={styles.date}>{props.date}</p>
            </div>
        </div>
    );
};

export default ReviewCard;