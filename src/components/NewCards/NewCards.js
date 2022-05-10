import React from 'react';
import styles from './NewCards.module.css';
import NewCard from "../NewCard/NewCard";
import burger1 from '../../assets/images/Burger_1.svg';
import burger2 from '../../assets/images/Burger-2.svg';
import burger3 from '../../assets/images/Burger-3.svg';
import burger4 from '../../assets/images/Burger-4.svg';


const NewCards = () => {
    return (
        <div className={styles.cards}>
            <NewCard
                img={burger1}
                title='Чизбургер'
                desc='Булка, котлета,сыр,  соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез'
                price="200  сом"
            />
            <NewCard
                img={burger2}
                title='Чизбургер'
                desc='Булка, котлета,сыр,  соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез'
                price="200  сом"
            />
            <NewCard
                img={burger3}
                title='Чизбургер'
                desc='Булка, котлета,сыр,  соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез'
                price="200  сом"
            />
            <NewCard
                img={burger4}
                title='Чизбургер'
                desc='Булка, котлета,сыр,  соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез'
                price="200  сом"
            />
        </div>

    );
};

export default NewCards;