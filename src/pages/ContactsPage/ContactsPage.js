import React, {useState} from 'react';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
    const [value, setValue] = useState('');

    return (
        <div className={styles.main}>
            <h1>Контакты</h1>
            <p>Если у вас есть вопросы и предложения или вам нужна информация о Food Planet, <br/> вы можете легко связаться с
                нами.</p>
            <p>Телефоны: 3911, +996500405988</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.469108495458!2d74.58176521531506!3d42.88404837915517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81afbe7e015%3A0x72f6586dd2e14fba!2zODAg0YPQu9C40YbQsCDQqNC10LLRh9C10L3QutC-LCDQkdC40YjQutC10LogNzIwMDYw!5e0!3m2!1sru!2skg!4v1657448427345!5m2!1sru!2skg"
                width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
            <form className={styles.form} action="">
                <h1>Пишите нам</h1>
                <div className={styles.data}>
                    <div className={styles.personal_data}>
                        <label htmlFor="name">Имя</label>
                        <input onChange={(event) => setValue(event.target.value)} value={value} className={styles.input} type="text" id="name" name="name" placeholder="Введите Ваше имя"/>
                        <label htmlFor="lastname">Фамилия</label>
                        <input className={styles.input} type="text" id="lastname" name="lastname" placeholder="Введите Вашу фамилию"/>
                        <label htmlFor="phone">Телефон</label>
                        <input className={styles.input} type="text" id="phone" name="phone" placeholder="Введите Ваш номер телефона"/>
                    </div>
                    <div className={styles.textarea}>
                        <label htmlFor="text">Опишите суть вопроса, ситуации:</label>
                        <textarea id="text" name="text" placeholder='Опишите суть вопроса, ситуации' />
                        <input className={styles.button} type="submit" value="Отправить сообщение" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactsPage;