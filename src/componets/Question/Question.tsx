import React, { useEffect, useRef } from "react";
import styles from './Question.module.css';

const Question = () => {
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
    
    return ( 
        <details ref={detailsRef} className={styles.question}>
            <summary className={styles.title}>Заголовок часто задаваемого вопроса</summary>
            <p className={styles.text}>Blandit et et ac non interdum odio tristique diam vestibulum. Velit in quis consequat lacus fringilla amet elementum pharetra massa. Morbi euismod nulla cras adipiscing tristique aliquet purus adipiscing. </p>
        </details>    
    );
}
 
export default Question;