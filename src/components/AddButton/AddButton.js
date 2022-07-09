import React, {useEffect, useState} from 'react';
import styles from './AddButton.module.css';

const AddButton = (props) => {
    const [style, setStyle] = useState(false);

    const checkProduct = () => {
        const parseProducts = () => JSON.parse(localStorage.getItem('cart'));
        let storageData = parseProducts();

        if (!storageData) {
            return;
        }
        if (Object.values(storageData) === null) {
            setStyle(false)
        } else {
            if (Object.values(storageData).find(x => x.id === props.id)) {
                setStyle(true)
            }
        }
    };

    const handleClick = () => {
        props.addToCart();
        checkProduct();
        props.checkProductQty()
    }

    useEffect(checkProduct, [])

    return (
        <button
            onClick={handleClick}
            className={style ? styles.button_added : `${props.className}`}>
            {style ? 'В корзине' : 'В корзину'}
        </button>
    );
};


export default AddButton;