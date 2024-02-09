import React from "react";
import styles from './Slide.module.css';

const Slide = () => {
    return ( 
    <article className={styles.slide}>
        <div className={styles.textblock}> 
            <div className={styles.title}>
                <h3 className={styles.title__sup}>CHECK-UP</h3>
                <h4 className={styles.title__sub}>для мужчин</h4>
            </div>
            <ul className={styles.list}>
                <li className={styles.list__item}>Гормональный скрининг</li>
                <li className={styles.list__item}>Тестостерон</li>
                <li className={styles.list__item}>Свободный тестостерон</li>
                <li className={styles.list__item}>Глобулин, связывающий половые гормоны</li>
            </ul>
            <div className={styles.sum}>
                <p className={styles.sum__after}>Всего 2800₽</p>
                <p className={styles.sum__before}>3500₽</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttons__appointment}>Записаться</button>
                <button className={styles.buttons__details}>Подробнее</button>
            </div>
        </div>
        <img className={styles.slide__image} src="./img/slide.png" alt="slide-img" />
    </article>    
    );
}
 
export default Slide;