import React, { useState } from "react";
import styles from './NavMobile.module.css';
import PopUp from "../PopUp/PopUp";

const NavMobile = () => {
    const [isPopUp, setIsPopUp] = useState<boolean>(false);
    
    return ( 
    <>
        {isPopUp && <PopUp onClose={() => setIsPopUp(false)} />}
        <nav className={styles.nav}>
            <a className={styles.nav__link}>О клинике</a>
            <a className={styles.nav__link}>Услуги</a>
            <a className={styles.nav__link}>Специалисты</a>
            <a className={styles.nav__link}>Цены</a>
            <a className={styles.nav__link}>Контакты</a>
            <button className={styles.button} onClick={() => {setIsPopUp(!isPopUp)}}>Записаться на приём</button>
        </nav>
    </>
    );
}

export default NavMobile;