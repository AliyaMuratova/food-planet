import React from 'react';
import styles from './AdvantagesCard.module.css'

const AdvantagesCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="" />
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    );
};

export default AdvantagesCard;