import QuestionList from '../main/QuestionList';

import classes from './Main.module.css';

const Main = (props) => {
    return (
        <main>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h3>Questions And Answers About Login</h3>
                </div>
                <QuestionList questions={props.questions} />
            </div>
        </main>
    );
};

export default Main;