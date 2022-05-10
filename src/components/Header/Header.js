import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import vector from '../../assets/images/Vector-1.svg';
import phone from '../../assets/images/Vector.svg';
import cart from '../../assets/images/cart.svg';


const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logotype" className={styles.svg}/>
                    <div>
                        <h3>food planet</h3>
                        <p>Планета вкусной еды</p>
                    </div>
                </div>
                <ul>
                    <li>Главная</li>
                    <li className={styles.header_menu}><span className={styles.menu}>Меню</span><img
                        src={vector} alt=""/></li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li><img src={phone} alt=""
                             className={styles.svg}/><span>+996500405988</span></li>
                    <li><img src={cart} alt="" className={styles.svg}/><span
                        className={styles.items}>1</span></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;