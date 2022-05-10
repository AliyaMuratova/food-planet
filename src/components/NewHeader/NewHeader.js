import React from 'react';
import styles from './NewHeader.module.css'

const NewHeader = () => {
    return (
        <div className={styles.header}>
            <p>Новинки</p>
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

export default NewHeader;