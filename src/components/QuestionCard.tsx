import React from 'react'
import { AnswerObject } from '../App';

type Props = {
    question: string;
    category: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({
    question, 
    category,
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
}) => {
    return (
        <div>
            <div>
                <p className = 'number'>Question: { questionNumber } / { totalQuestions }</p>
                <p>{ category }</p>
                <p dangerouslySetInnerHTML = {{ __html: question }}/> 
                <div>
                    {answers.map(( answer ) => (
                        <div key = { answer }>
                            <button disabled = { userAnswer ? true : false } value = { answer } onClick={ callback }>
                                <span dangerouslySetInnerHTML = {{ __html: answer }}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    )
}

export default QuestionCard;
