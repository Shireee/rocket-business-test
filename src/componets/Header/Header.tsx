import React, { useState } from "react";
import styles from './Header.module.css';
import PopUp from "../PopUp/PopUp";
import NavMobile from "../Nav/NavMobile";

const Header = () => {
    const [isPopUp, setIsPopUp] = useState<boolean>(false);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return ( 
    <>
    {isPopUp && <PopUp onClose={() => setIsPopUp(false)} />}

    <header className={styles.header}>
        <div className={styles.logoblock}>
            <a href="#"><img className={styles.logo} src="./img/logo-header.svg" alt="logo"/></a>
            <address className={styles.address}>
                <p className={styles.address__title}>Ростов-на-Дону</p>
                <p className={styles.address__text}>ул. Ленина, 2Б</p>
            </address>
        </div>
        <div className={styles.contacts}>
            <a href="tel:+78630000000" className={styles.phone}>+7(863) 000 00 00</a>
            <button className={styles.button} onClick={ () => setIsPopUp(!isPopUp) }>Записаться на прием</button>
        </div>

        <div className={styles.mobile}>
            <div className={isNavOpen ? styles.burger__close : styles.burger__open}  onClick={() => setIsNavOpen(!isNavOpen)}></div>
            <a href="#"><img className={styles.logo} src="./img/logo-header.svg" alt="logo"/></a>
            <address className={styles.address}>
                <a href="tel:+78630000000" className={styles.phone}>+7(863) 000 00 00</a>
                <p className={styles.address__text}>Ростов-на-Дону</p>
            </address>
        </div>
    </header>
    {isNavOpen && <NavMobile />}
    </>    
    );
}
 
export default Header;