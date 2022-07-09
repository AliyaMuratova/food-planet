// import React, {useEffect, useState, useContext, createContext} from 'react';
// import {MyContext} from "../../App";
// import AddButton from "../AddButton/AddButton";
// import styles from "../NewCard/NewCard.module.css";
// import minus from "../../assets/images/Minus.svg";
// import plus from "../../assets/images/Plus.svg";
//
//
// const NewCard = (props) => {
//
//     // const {changeProductCount} = useContext(MyContext);
//     // const [quantity, setQuantity] = useState(1);
//     //
//     // const handleIncrement = () => {
//     //     setQuantity(prevCount => prevCount + 1)
//     // };
//     //
//     // const handleDecrement = () => {
//     //     if (quantity > 1) {
//     //         setQuantity(prevCount => prevCount - 1)
//     //     }
//     // }
//
//     // const checkProductQty = () => {
//     //     const parseProducts = () => JSON.parse(localStorage.getItem('cart'));
//     //     let storageData = parseProducts();
//     //
//     //     if (!storageData) {
//     //         return;
//     //     }
//     //     if (Object.values(storageData) === null) {
//     //         setQuantity(1)
//     //     } else {
//     //         if (Object.values(storageData).find(x => x.id === props.id)) {
//     //             setQuantity(quantity)
//     //             console.log(Object.values(storageData)[id].quantity)
//     //         }
//     //     }
//     // };
//
//     let addToCart = () => {
//         let productsFromLocalStorage = {};
//         if (localStorage.getItem('cart')) {
//             productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
//         }
//
//         const product = {}
//         product[props.name] = {
//             ...props
//         };
//
//         localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}))
//         changeProductCount();
//
//     };
//
//
//     return (
//         <div className={styles.card}>
//             <img src={props.img} alt="" className={styles.card_img}/>
//             <h4>{props.name}</h4>
//             <p className={styles.desc}>{props.desc}</p>
//             <h4>{props.price} сом</h4>
//             <div className={styles.count}>
//                 <span ><img src={minus} alt=""/></span>
//                 <p className={styles.count_number}>0</p>
//                 <span> <img src={plus} alt=""/></span>
//             </div>
//             <AddButton
//                 className={styles.button}
//                 id={props.id}
//                 addToCart={addToCart}
//             />
//         </div>
//     );
// };
//
// export default NewCard;