import React, {useState, useEffect} from 'react';
import NewCard from "../NewCard/NewCard";
import styles from './NewCards.module.css';
import {BASE_URL} from "../../constants";

const NewCards = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/burgers';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, [])

    return (
        <div className={styles.cards}>
            {
                products.map((item, index) => {
                    return(
                        <NewCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            quantity={1}
                            id={item.id}
                        />
                    )
                })
            }
        </div>
    );
};

export default NewCards;