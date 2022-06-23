import React, {useEffect, useState} from 'react';
import MenuCard from "../MenuCard/MenuCard";
import styles from './MenuCards.module.css';
import {BASE_URL} from "../../constants";


const MenuCards = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/pizza';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, [])

    return (
        <>
            <ul className={styles.cards}>
                {
                    products.map((item, index) => {
                        return(
                            <li key={index}>
                                <MenuCard
                                key={index}
                                img={item.img}
                                title={item.name}
                                desc={item.desc}
                                price={item.price}
                                id={item.id}
                            /></li>
                        )
                    })
                }
            </ul>
            <div className={styles.btn}>
                <button className={styles.button}>Показать еще</button>
            </div>
        </>
    );
};

export default MenuCards;