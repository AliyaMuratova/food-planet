import React from 'react';
import styles from './Banner.module.css'
import arrow from '../../assets/images/arrow.svg';
import burger from '../../assets/images/Burger.svg'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.desc}>
                <h2>Доставка вкусной еды до 30 минут + напиток в подарок!</h2>
                <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                <button>Перейти в меню <img src={arrow}/></button>
            </div>
            <img src={burger} alt="" className={styles.burger} />
        </div>

    );
};

export default Banner;