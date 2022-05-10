import React from 'react';
import MenuCard from "../MenuCard/MenuCard";
import styles from './MenuCards.module.css';
import pizza1 from '../../assets/images/Pizza-1.svg';
import pizza2 from '../../assets/images/Pizza-2.svg';
import pizza3 from '../../assets/images/Pizza-3.svg';
import pizza4 from '../../assets/images/Pizza-4.svg';
import pizza5 from '../../assets/images/Pizza-2.svg';
import pizza6 from '../../assets/images/Pizza-6.svg';
import pizza7 from '../../assets/images/Pizza-3.svg';
import pizza8 from '../../assets/images/Pizza-8.svg';


const MenuCards = () => {
    return (
        <ul className={styles.cards}>
            <li><MenuCard
                img={pizza1}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza2}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza3}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza4}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza5}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza6}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza7}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <li><MenuCard
                img={pizza8}
                title="Мексиканская"
                desc="Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез"
                price="200 сом"
            /></li>
            <button className={styles.button}>Показать еще</button>
        </ul>
    );
};

export default MenuCards;