import React, { useEffect, useRef } from "react";
import styles from './Question.module.css';

const Question: React.FC<Question> = ({ title, text }) => {
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth <= 768) {
                if (detailsRef.current) {
                    detailsRef.current.open = true;
                }
            } else {
                if (detailsRef.current) {
                    detailsRef.current.open = false;
                }
            }
        };
    
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {window.removeEventListener('resize', checkWindowSize)};
    }, []);

    // Split by </br>
    const paragraphs = text.split('</br>');

    return ( 
        <details ref={detailsRef} className={styles.question}>
            <summary className={styles.title}>{title}</summary>
            {paragraphs.map((text, index) => ( <p key={index} className={styles.text}> {text} </p> ))}
        </details>    
    );
}
 
export default Question;