import Question from './Question';

const QuestionList = (props) => {

    return (
        <div>
            {props.questions.map(question => {
                return (
                    <Question key={question.id} {...question} />
                );
            })}
        </div>
    );
};

export default QuestionList;