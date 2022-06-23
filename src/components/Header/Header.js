import React from 'react';
import {NavLink,Link} from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import vector from '../../assets/images/Vector-1.svg';
import phone from '../../assets/images/Vector.svg';
import basket from '../../assets/images/cart.svg';


const Header = () => {

    const storageData = JSON.parse(localStorage.getItem('cart'));
    const countProducts =  Object.values(storageData  ? storageData : {});


    return (
        <header>
            <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src={logo} alt="Logotype" className={styles.svg}/>
                        <div>
                            <h3>food planet</h3>
                            <p>Планета вкусной еды</p>
                        </div>
                    </div>
                </Link>
                <ul>
                    <NavLink to="/"><li>Главная</li></NavLink>
                    <li><span className={styles.menu}>Меню</span><img
                        src={vector} alt=""/></li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li><img src={phone} alt=""
                             className={styles.svg}/><span>+996500405988</span></li>
                    <NavLink to="/cart"><li className={styles.last_child}><img src={basket} alt="" className={styles.svg}/><span
                        className={styles.items}>{countProducts.length}</span></li></NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;