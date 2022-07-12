import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper';
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from '../../assets/images/Avatar.svg';
import styles from './Reviews.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        img: avatar,
        name: 'Сергей',
        text: 'Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)',
        date: '02.07.2021'
    },
    {
        id: 2,
        img: avatar,
        name: 'Виктор',
        text: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!',
        date: '22.01.2022'
    },
    {
        id: 3,
        img: avatar,
        name: 'Владислав',
        text: 'Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!',
        date: '18.12.2021'
    },
    {
        id: 4,
        img: avatar,
        name: 'Андрей',
        text: 'Хочу поблагодарить за бургер !Очень вкусненький в меру остренький) Спасибо,удивили!)',
        date: '04.10.2019'
    },
    {
        id: 5,
        img: avatar,
        name: 'Дмитрий',
        text: 'Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!',
        date: '13.03.2022'
    },
    {
        id: 6,
        img: avatar,
        name: 'Виктор',
        text: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!',
        date: '22.01.2022'
    },
    {
        id: 7,
        img: avatar,
        name: 'Сергей',
        text: 'Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)',
        date: '02.07.2021'
    },
    {
        id: 8,
        img: avatar,
        name: 'Виктор',
        text: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!',
        date: '22.01.2022'
    }
]

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <h4>Отзывы</h4>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                pagination={{clickable: true}}
                className="mySwiper"
            >
                {
                    data.map((user) => {
                        return (
                            <SwiperSlide key={user.id}>
                                <ReviewCard
                                    img={user.img}
                                    name={user.name}
                                    text={user.text}
                                    date={user.date}
                                />
                            </SwiperSlide>
                        )
                    })
                }
                <br/>
            </Swiper>


        </div>
    );
};

export default Reviews;