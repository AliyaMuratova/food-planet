import React from 'react';
import styles from './SelectOption.module.css';

const SelectOption = () => {
    return (
        <div className={styles.select_option}>
            <div className={styles.select}>
                <label htmlFor="select">Сортировать  по:</label>
                <select name="select" id="select">
                    <option value="value1">По умолчанию</option>
                </select>
            </div>
        </div>

    );
};

export default SelectOption;