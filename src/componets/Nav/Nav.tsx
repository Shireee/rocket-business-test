import React from "react";
import styles from './Nav.module.css';

const Nav = () => {
    return ( 
    <nav className={styles.nav}>
        <a className={styles.nav__link}>О клинике</a>
        <a className={styles.nav__link}>Услуги</a>
        <a className={styles.nav__link}>Специалисты</a>
        <a className={styles.nav__link}>Цены</a>
        <a className={styles.nav__link}>Контакты</a>
    </nav>    
    );
}
 
export default Nav;