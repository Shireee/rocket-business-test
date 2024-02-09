import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return ( 
    <footer className={styles.footer}>
        <img className={styles.logo} src="./img/logo-footer.svg" alt="logo" />
        <nav className={styles.nav}>
            <a className={styles.nav__link} href="#!">О клинике</a>
            <a className={styles.nav__link} href="#!">Услуги</a>
            <a className={styles.nav__link} href="#!">Специалисты</a>
            <a className={styles.nav__link} href="#!">Цены</a>
            <a className={styles.nav__link} href="#!">Контакты</a>
        </nav>
        <div className={styles.social}>
            <a className={styles.social__link} href="#!"><img className={styles.social__icon} src="./img/instagram-icon.png" alt="instagram-icon"/></a>
            <a className={styles.social__link} href="#!"><img className={styles.social__icon} src="./img/whatsapp-footer-icon.png" alt="whatsapp-icon"/></a>
            <a className={styles.social__link} href="#!"><img className={styles.social__icon} src="./img/telegram-icon.png" alt="telegram-icon"/></a>
        </div>
    </footer>    
    );
}
 
export default Footer;