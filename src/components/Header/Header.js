import React, {useContext} from 'react';
import {MyContext} from "../../App";
import {NavLink, Link} from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import vector from '../../assets/images/Vector-1.svg';
import phone from '../../assets/images/Vector.svg';
import basket from '../../assets/images/cart.svg';
import HomePage from "../../pages/HomePage/HomePage";


const Header = () => {
    const {productCount} = useContext(MyContext);

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
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><span className={styles.menu}>Меню</span><img
                        src={vector} alt=""/></li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li><img src={phone} alt=""
                             className={styles.svg}/><span>+996500405988</span></li>
                    <NavLink to="/cart">
                        <li className={styles.last_child}><img src={basket} className={styles.svg}/><span
                            className={styles.items}>{productCount}</span></li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;