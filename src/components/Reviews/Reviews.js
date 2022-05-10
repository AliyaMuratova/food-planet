import React from 'react';
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from '../../assets/images/Avatar.svg';
import styles from './Reviews.module.css'



const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <h4>Отзывы</h4>
            <div className={styles.reviews_cards}>
                <ReviewCard
                img={avatar}
                name='Сергей'
                text='Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)'
                date='02.07.2020'
                />
                <ReviewCard
                img={avatar}
                name='Сергей'
                text='Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!'
                date='02.07.2020'
                />
                <ReviewCard
                    img={avatar}
                    name='Сергей'
                    text='Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!'
                    date='02.07.2020'
                />
                <ReviewCard
                    img={avatar}
                    name='Сергей'
                    text='Хочу поблагодарить за бургер !Очень вкусненький в меру остренький) Спасибо,удивили!)'
                    date='02.07.2020'
                />
            </div>
        </div>
    );
};

export default Reviews;