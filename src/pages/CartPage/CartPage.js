import React, {useState, useEffect} from 'react';
import styles from './CartPage.module.css';
import plus from '../../assets/images/cart/plus.svg';
import minus from '../../assets/images/cart/minus.svg';
import cart from '../../assets/images/cart.svg';
import clear from '../../assets/images/cart/delete.svg';
import trashcan from '../../assets/images/cart/trash-can-regular.svg'


const CartPage = ({setModalActive}) => {

    const [productsFromStorage, setProductsFromStorage] = useState([]);

    const parseProducts = () => JSON.parse(localStorage.getItem('cart'));
    const addToStorage = (key, data) => localStorage.setItem(key, data)

    const getProducts = () => {

        let storageData = parseProducts();

        if(!storageData){
            return;
        }

        storageData = Object.values(storageData)
        setProductsFromStorage(storageData)
    }

    const deleteProduct = (product) => {
        let productsFromStorage = parseProducts();
        delete productsFromStorage[product.id]
        addToStorage('cart', JSON.stringify(productsFromStorage))
        getProducts();
    }

    const removeAllProducts = () => {
        const updatedCart = {}
        addToStorage('cart', JSON.stringify(updatedCart))
        getProducts();
    }


    const increaseProduct = (product) => {
        if (!product.quantity) {
            product.quantity = 2;
        } else {
            let count = product.quantity;
            product.quantity = ++count
        }

        let productsFromStorage = parseProducts();
        productsFromStorage[product.id] = product;
        addToStorage('cart', JSON.stringify(productsFromStorage))

        getProducts();
    }

    const decreaseProduct = (product) => {
        if (!product.quantity) {
            deleteProduct(product)
            return;
        } else {
            let count = product.quantity;
            product.quantity = --count

            if (product.quantity === 0) {
                deleteProduct(product)
                return;
            }
        }

        let productsFromStorage = parseProducts();
        productsFromStorage[product.id] = product;
        addToStorage('cart', JSON.stringify(productsFromStorage))

        getProducts();
    }

    const totalPrice = productsFromStorage.reduce(
        (price, product) => {
            if (!product.quantity) {
                return (
                    price + (1 * product.price)
                )
            } else {
                return (
                    price + (product.quantity * product.price)
                )
            }
        }, 0
    );


    useEffect(getProducts, [])

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(productsFromStorage))
    // }, [productsFromStorage])


    return (
        <div className={styles.shopping_cart}>
            <div className={styles.title}>
                <div className={styles.cart}>
                    <span><img src={cart} alt=""/></span>
                    <p>Корзина</p>
                </div>
                <div onClick={removeAllProducts} className={styles.clear_cart}>
                    <span><img src={trashcan} alt=""/></span>
                    <p>Очистить корзину</p>
                </div>
            </div>
            {
               productsFromStorage.length === 0 ?
                    (<div className={styles.empty_cart}>В корзине пусто</div>) :
                    (
                        <>
                            {
                                productsFromStorage.map((product, index) => {
                                    return (
                                        <div key={index} className={styles.item}>
                                            <div className={styles.buttons}>
                                                 <span onClick={() => deleteProduct(product)}
                                                       className={styles.delete_btn}>
                                                     <img src={clear} alt=""/>
                                                 </span>
                                            </div>
                                            <div className={styles.image}>
                                                <img src={product.img} alt=""/>
                                            </div>
                                            <div className={styles.description}>
                                                <p>{product.name}</p>
                                            </div>
                                            <div className={styles.quantity}>
                                                <span onClick={() => increaseProduct(product)}
                                                      className={styles.plus_btn}>
                                                    <img src={plus} alt=""/>
                                                </span>
                                                <p>{product.quantity ? product.quantity : 1}</p>
                                                <span onClick={() => decreaseProduct(product)}
                                                      className={styles.minus_btn}>
                                                    <img src={minus} alt=""/>
                                                </span>
                                            </div>
                                            <div className={styles.total_price}>
                                                <p>{product.quantity ? product.quantity : 1} * {product.price} сом</p>
                                            </div>
                                            <div className={styles.total_item_price}>
                                                <p>{(product.quantity ? product.quantity : 1) * product.price} сом</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
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
                <button onClick={() => setModalActive(true)} className={styles.checkout}>Оформить заказ</button>
            </div>
        </div>

    );
};

export default CartPage;