import React, {useEffect, useState} from 'react';
import styles from './MenuCards.module.css';
import {BASE_URL} from "../../constants";
import toast from "react-hot-toast";
import ProductCard from "../ProductCard/ProductCard";


const MenuCards = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(8)

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

    const showMoreProducts = () => {
        setVisible(prevValue => prevValue + 4)
    }

    useEffect(getProducts, [])

    return (
        <>
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

            <div className={styles.select_option}>
                <div className={styles.select}>
                    <label htmlFor="select">Сортировать  по:</label>
                    <select name="select" id="select">
                        <option value="value1">По умолчанию</option>
                    </select>
                </div>
            </div>

            <ul className={styles.cards}>
                {
                    products.slice(0, visible).map((item, index) => {
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
                <button onClick={showMoreProducts} className={styles.button_showmore}>Показать еще</button>
            </div>
        </>
    );
};

export default MenuCards;