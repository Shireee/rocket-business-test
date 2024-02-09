import React from "react";
import styles from './PopUp.module.css';



const PopUp: React.FC<React.PropsWithChildren<{ onClose: () => void }>> = ({ onClose }) => {
    return ( 
    <dialog className={styles.popup}>
        <div className={styles.popupContainer}>
            <div className={styles.buttonConteiner}>
                <button type="button" className={styles.button__close} onClick={onClose}></button>
            </div>
            <div className={styles.container}>
                <div className={styles.textblock}>
                    <h2 className={styles.title}>Запишитесь на приём онлайн</h2>
                    <h2 className={styles.text}>Администратор свяжется с вами черезWhatsApp в течение дня и уточнит детали</h2>
                </div>
                <form className={styles.form} action="">
                    <input className={styles.input} type="text" placeholder="ФИО" required/>
                    <input className={styles.input} type="tel" placeholder="Номер телефона" required/>
                    <input className={styles.input} type="email" placeholder="Электронная почта" required/>
                    <button className={styles.button__submit} type="submit">Записаться</button>
                </form>
            </div> 
        </div>       
    </dialog>    
    );
}
 
export default PopUp;