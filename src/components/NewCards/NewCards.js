import React, {useState, useEffect} from 'react';
import styles from './NewCards.module.css';
import {BASE_URL} from "../../constants";
import toast from 'react-hot-toast';
import ProductCard from "../ProductCard/ProductCard";

const NewCards = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/burgers';

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
                            />
                            </li>
                        )
                    })
                }
            </ul>

        </>
    );
};

export default NewCards;