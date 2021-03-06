import React, {useState, useEffect, useContext} from 'react';
import styles from './CartPage.module.css';
import plus from '../../assets/images/cart/plus.svg';
import minus from '../../assets/images/cart/minus.svg';
import cart from '../../assets/images/cart.svg';
import clear from '../../assets/images/cart/delete.svg';
import trashcan from '../../assets/images/cart/trash-can-regular.svg'
import {MyContext} from "../../App";


const CartPage = () => {

    const [productsFromStorage, setProductsFromStorage] = useState([]);
    const {changeProductCount, setModalActive} = useContext(MyContext);

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
        delete productsFromStorage[product.name]
        addToStorage('cart', JSON.stringify(productsFromStorage))
        getProducts();
        changeProductCount();
    }

    const removeAllProducts = () => {
        const updatedCart = {}
        addToStorage('cart', JSON.stringify(updatedCart))
        getProducts();
        changeProductCount();
    }


    const increaseProduct = (product) => {
        if (!product.quantity) {
            product.quantity = 2;
        } else {
            let count = product.quantity;
            product.quantity = ++count
        }

        let productsFromStorage = parseProducts();
        productsFromStorage[product.name] = product;
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
        productsFromStorage[product.name] = product;
        addToStorage('cart', JSON.stringify(productsFromStorage))

        getProducts();
        changeProductCount();
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
                    <p>??????????????</p>
                </div>
                <div onClick={removeAllProducts} className={styles.clear_cart}>
                    <span><img src={trashcan} alt=""/></span>
                    <p>???????????????? ??????????????</p>
                </div>
            </div>
            {
               productsFromStorage.length === 0 ?
                    (<div className={styles.empty_cart}>?? ?????????????? ??????????</div>) :
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
                                                <p>{product.quantity ? product.quantity : 1} * {product.price} ??????</p>
                                            </div>
                                            <div className={styles.total_item_price}>
                                                <p>{(product.quantity ? product.quantity : 1) * product.price} ??????</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
            }

            {/* ?????????? */}
            <div className={styles.coupon}>
                <p>?????????????? ?????? ???????????? ?????? ????????????:</p>
                <input type="text"/>
                <button className={styles.coupon_button}>Ok</button>
            </div>

            {/* ?????????? */}
            <div className={styles.total}>
                ??????????: {totalPrice} ??????
            </div>

            <div className={styles.checkout_button}>
                <button onClick={() => setModalActive(true)} className={styles.checkout}>???????????????? ??????????</button>
            </div>
        </div>

    );
};

export default CartPage;