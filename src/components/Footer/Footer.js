import React from 'react';
import {Link} from "react-router-dom";
import styles from './Footer.module.css';
import logo from '../../assets/images/logo_footer.svg';
import phone from '../../assets/images/Phone_footer.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <Link to="/">
                    <div className={styles.logo_footer}>
                        <img src={logo} alt="Logotype" className={styles.svg_footer} />
                        <div>
                            <h3>food planet</h3>
                            <p>Планета вкусной еды</p>
                        </div>
                    </div>
                </Link>
                <ul>
                    <Link to="/"><li>Главная</li></Link>
                    <li>Меню</li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li className={styles.last_child}><img src={phone} alt="" className={styles.svg_footer} /><span>+996500405988</span></li>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;