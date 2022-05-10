import React from 'react';
import AdvantagesCard from "../AdvantagesCard/AdvantagesCard";
import delivery from '../../assets/images/Delivery.svg';
import products from '../../assets/images/Products.svg';
import menu from '../../assets/images/Menu.svg';
import location from '../../assets/images/Location.svg';
import styles from './Advantages.module.css'

const Advantages = () => {
    return (
        <div className={styles.advantages}>
            <p className={styles.title}>Почему выбирают нас:</p>
            <div className={styles.cards}>
                <AdvantagesCard
                    img={delivery}
                    title='Мгновенная доставка'
                    desc='Доставим заказанную вами еду за 30 минут + напиток в подарок'
                />
                <AdvantagesCard
                    img={products}
                    title='Свежие продукты'
                    desc='Вся продукция хранится в хороших условиях тем самым продливая срок хранения'
                />
                <AdvantagesCard
                    img={menu}
                    title='Уникальное меню'
                    desc='Ежедневно мы обновляем наше меню и том числе коктейльное'
                />
                <AdvantagesCard
                    img={location}
                    title='Доставка'
                    desc='Мы быстро доставляем вашу еду по указанному адресу'
                />
            </div>
        </div>
    );
};

export default Advantages;
