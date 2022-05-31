import React from 'react';
import styles from './NewCards.module.css';
import NewCard from "../NewCard/NewCard";
import data from '../../services/data';

const NewCards = ({cartItems,onAddItem}) => {
    return (
        <div className={styles.cards}>
            {
                data.burgers.map((item, index) => {
                    return(
                        <NewCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            cartItems={cartItems}
                            onAddItem={onAddItem}
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
};

export default NewCards;