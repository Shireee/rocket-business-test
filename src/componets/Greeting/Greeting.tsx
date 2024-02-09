import React from "react";
import styles from './Greeting.module.css';

const Greeting = () => {
    return ( 
    <main className={styles.greeting}>
        <div className={styles.greeting__textblock}>
            <h1 className={styles.greeting__title}>Многопрофильная клиника для детей и взрослых</h1>
            <p className={styles.greeting__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <img className={styles.greeting__img} src="./img/greeting.png" alt="greeting-img" />
    </main>    
    );
}
 
export default Greeting;