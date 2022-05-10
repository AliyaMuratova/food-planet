import React from 'react';
import styles from './MenuHeader.module.css';


const MenuHeader = () => {
    return (
        <div className={styles.header}>
            <p>Меню</p>
            <ul>
                <li>Пицца</li>
                <li>Бургер</li>
                <li>Суши</li>
                <li>Роллы</li>
                <li>Салаты</li>
                <li>Десерты</li>
                <li>Напитки</li>
            </ul>
        </div>
    );
};

export default MenuHeader;