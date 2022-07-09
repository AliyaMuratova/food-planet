import React, {useEffect, useState} from 'react';
import styles from './MenuCards.module.css';
import {BASE_URL} from "../../constants";
import toast from "react-hot-toast";
import ProductCard from "../ProductCard/ProductCard";


const MenuCards = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/pizza';

        fetch(url)
            .then(response => {
                if (response.status === 200){
                    return response.json()
                }else {
                    throw new Error(response.status)
                }
            })
            .then(data => setProducts(data))
            .catch(err => toast.error(`Ошибка. Статус ошибки: ${err.message}`))
    }

    useEffect(getProducts, [])

    return (
        <>
            <ul className={styles.cards}>
                {
                    products.map((item, index) => {
                        return(
                            <li key={index}>
                                <ProductCard
                                    key={index}
                                    img={item.img}
                                    name={item.name}
                                    desc={item.desc}
                                    price={item.price}
                                    id={item.id}
                                    card={styles.card}
                                    cardImg={styles.card_img}
                                    description={styles.desc}
                                    count={styles.count}
                                    countNumber={styles.count_number}
                                    button={styles.button}
                            /></li>
                        )
                    })
                }
            </ul>
            <div className={styles.btn}>
                <button className={styles.button_showmore}>Показать еще</button>
            </div>
        </>
    );
};

export default MenuCards;