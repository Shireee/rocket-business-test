import React from "react";
import styles from './Greeting.module.css';

const Greeting = () => {
    return ( 
    <main className={styles.greeting}>
        <div className={styles.textblock}>
            <h1 className={styles.title}>Многопрофильная клиника для детей и взрослых</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className={styles.img}> </div>
    </main>    
    );
}
 
export default Greeting;