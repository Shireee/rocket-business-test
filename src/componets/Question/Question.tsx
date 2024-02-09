import React from "react";
import styles from './Question.module.css';

const Question = () => {
    return ( 
    <details className={styles.question}>
        <summary className={styles.question__title}>Заголовок часто задаваемого вопроса</summary>
        <p className={styles.question__text}>Blandit et et ac non interdum odio tristique diam vestibulum. Velit in quis consequat lacus fringilla amet elementum pharetra massa. Morbi euismod nulla cras adipiscing tristique aliquet purus adipiscing. </p>
    </details>    
    );
}
 
export default Question;
