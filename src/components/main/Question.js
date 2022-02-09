import { useState } from 'react';
import { addIcon } from '../icons/addIcon';
import { minusIcon } from '../icons/minusIcon';

import classes from './Question.module.css';

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleShowAnswerHandler = () => {
        setShowAnswer(prevState => {
            return prevState = !prevState;
        });
    };

    return (
        <article className={classes.article}>
            <header className={classes.articleHeader}>
                <h4 className={classes.question}>{question}</h4>
                <button onClick={toggleShowAnswerHandler} className={classes.btn}>
                    {!showAnswer ? addIcon : minusIcon}
                </button>
            </header>
            {
                showAnswer &&
                <p className={classes.answer}>
                    {answer}
                </p>
            }
        </article>
    );
};

export default Question;