import React from 'react';
import styles from './CheckoutForm.module.css';
import {useForm} from "react-hook-form";

const CheckoutForm = ({modalActive, setModalActive}) => {

    return (
        <div className={modalActive ? styles.active : styles.modal} onClick={() => setModalActive(false)}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <form className={styles.form}>
                    <label htmlFor="fname">Имя</label>
                    <input className={styles.input} type="text" id="fname" name="firstname" placeholder="Введите Ваше имя"/>
                    <label htmlFor="lname">Фамилия</label>
                    <input className={styles.input} type="text" id="lname" name="lastname" placeholder="Введите Вашу фамилию"/>
                    <div className={styles.checkbox}>
                        <input type="radio" id="pickup" name="delivery"/>
                        <label htmlFor="pickup"> Самовывоз </label>
                    </div>

                    <div className={styles.checkbox}>
                        <input type="radio" id="delivery" name="delivery" />
                        <label htmlFor="delivery"> Доставка </label>
                    </div>
                    {/*{deliveryChecked && (*/}
                    {/*    <input className={styles.input} type="text" id="address" name="address" placeholder="address"/>*/}
                    {/*)*/}

                    {/*}*/}
                    <div className={styles.submit_button}>
                        <input className={styles.submit} type="submit" defaultValue="Submit"/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;