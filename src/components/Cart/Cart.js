import React from 'react';
import styles from './Cart.module.css';
import plus from '../../assets/images/cart/circle-plus-solid.svg';
import minus from '../../assets/images/cart/circle-minus-solid.svg';
import cart from '../../assets/images/cart.svg';
import clear from '../../assets/images/cart/circle-xmark-solid.svg';
import trashcan from '../../assets/images/cart/trash-can-regular.svg'


const Cart = ({cartItems, onRemoveItem, onAddItem, onRemoveFromCart}) => {

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );

    return (
        <div className={styles.shopping_cart}>
            <div className={styles.title}>
                <div className={styles.cart}>
                    <span><img src={cart} alt=""/></span>
                    <p>Корзина</p>
                </div>
                <div  className={styles.clear_cart}>
                    <span><img src={trashcan} alt=""/></span>
                    <p>Очистить корзину</p>
                </div>
            </div>
            {cartItems.length === 0 && <div className={styles.empty_cart}>В корзине пусто</div>}

            {/* Товар */}
                {
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <div className={styles.buttons}>
                    <span onClick={() => onRemoveFromCart(item)} className={styles.delete_btn}>
                        <img src={clear} alt=""/>
                    </span>
                                </div>
                                <div className={styles.image}>
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className={styles.description}>
                                    <p>{item.name}</p>
                                </div>
                                <div className={styles.quantity}>
                    <span onClick={()=> onAddItem(item)} className={styles.plus_btn}>
                        <img src={plus} alt=""/>
                    </span>
                                    <p>{item.quantity}</p>
                                    <span onClick={() => onRemoveItem(item)} className={styles.minus_btn}>
                        <img src={minus} alt=""/>
                    </span>
                                </div>
                                <div className={styles.total_price}><p>{item.quantity} * {item.price} сом</p></div>
                            </div>
                        )
                    })
                }


            {/* Купон */}
            <div className={styles.coupon}>
                <p>Введите код купона для скидки:</p>
                <input type="text"/>
                <button className={styles.coupon_button}>Ok</button>
            </div>

            {/* Итого */}
            <div className={styles.total}>
                Итого: {totalPrice} сом
            </div>

            <div className={styles.checkout_button}>
                <button className={styles.checkout}>Оформить заказ</button>
            </div>
        </div>

    );
};

export default Cart;