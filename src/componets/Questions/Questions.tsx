import React from "react";
import styles from './Questions.module.css';
import Question from "../Question/Question";

const Questions = () => {
    return ( 
    <section className={styles.questions}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <Question />
        <Question />
        <Question />
        <Question />
    </section>    
    );
}
 
export default Questions;
