// import React, {useContext, useEffect} from 'react';
// import styles from './MenuCard.module.css';
// import minus from '../../assets/images/Minus.svg';
// import plus from '../../assets/images/Plus.svg';
// import {MyContext} from "../../App";
// import AddButton from "../AddButton/AddButton";
//
//
// const MenuCard = (props) => {
//
//     // const {changeProductCount} = useContext(MyContext);
//
//     let addToCart = () => {
//         let productsFromLocalStorage = {};
//         if (localStorage.getItem('cart')) {
//             productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
//         }
//
//         const product = {}
//         product[props.name] = {
//             ...props,
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
//             <img src={props.img} alt="" className={styles.card_img} />
//             <h4>{props.name}</h4>
//             <p className={styles.desc}>{props.desc}</p>
//             <h4>{props.price} сом</h4>
//             <div className={styles.count}>
//                 <span><img src={minus} alt="" /></span>
//                 <p className={styles.count_number}>22</p>
//                 <span><img src={plus} alt="" /></span>
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
// export default MenuCard;