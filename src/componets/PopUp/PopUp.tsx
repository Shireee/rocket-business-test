import React, { useState } from "react";
import styles from './PopUp.module.css';

const PopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await fetch('http://158.160.128.100:3000/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return ( 
        <dialog className={styles.popup}>
            <div className={styles.popup__container}>
                <div className={styles.button__conteiner}>
                    <button type="button" className={styles.button__close} onClick={onClose}></button>
                </div>
                <div className={styles.container}>
                    <div className={styles.textblock}>
                        <h2 className={styles.title}>Запишитесь на приём онлайн</h2>
                        <h2 className={styles.text}>Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</h2>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} type="text" name="name" placeholder="ФИО" required onChange={handleChange}/>
                        <input className={styles.input} type="tel" name="phone" placeholder="Номер телефона" required onChange={handleChange}/>
                        <input className={styles.input} type="email" name="email" placeholder="Электронная почта" required onChange={handleChange}/>
                        <button className={styles.button__submit} type="submit">Записаться</button>
                    </form>
                </div> 
            </div>       
        </dialog>    
    );
}
 
export default PopUp;