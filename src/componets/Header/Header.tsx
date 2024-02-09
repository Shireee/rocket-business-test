import React, { useState } from "react";
import styles from './Header.module.css';
import PopUp from "../PopUp/PopUp";

const Header = () => {
    const [isPopUp, setIsPopUp] = useState<Boolean>(false);

    return ( 
    <header className={styles.header}>
        {isPopUp && <PopUp onClose={() => setIsPopUp(false)} />}
        <div className={styles.logoblock}>
            <a href="#"><img className={styles.logoblock__logo} src="./img/logo-header.svg" alt="logo"/></a>
            <address className={styles.address}>
                <p className={styles.address__title}>Ростов-на-Дону</p>
                <p className={styles.address__text}>ул. Ленина, 2Б</p>
            </address>
        </div>
        <div className={styles.contacts}>
            <a href="tel:+78630000000" className={styles.contacts__phone}>+7(863) 000 00 00</a>
            <button className={styles.contacts__button} onClick={ () => setIsPopUp(!isPopUp) }>Записаться на прием</button>
        </div>
    </header>    
    );
}
 
export default Header;