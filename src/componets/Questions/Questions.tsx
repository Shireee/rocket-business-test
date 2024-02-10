import React from "react";
import styles from './Questions.module.css';
import Question from "../Question/Question";
import data from '../../data/data.json';

const Questions = () => {
    return ( 
    <section className={styles.questions}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        {data.questions.map((question, index) => (
            <Question key={index} title={question.title} text={question.text} />
        ))}
    </section>    
    );
}
 
export default Questions;