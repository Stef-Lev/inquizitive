import React from 'react'
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type QuestionCardProps = {
    question: string;
    category: string;
    difficulty: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    category,
    difficulty,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className='number'>Question: {questionNumber} / {totalQuestions}</p>
            <p>{category}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className='answers-container'>
                <div className='row'>
                    {answers.filter((answer, index) => index < 2).map((answer, index) => {
                        return (
                            <ButtonWrapper
                                key={index}
                                correct={userAnswer?.correctAnswer === answer}
                                userClicked={userAnswer?.answer === answer}
                            >
                                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </button>
                            </ButtonWrapper>
                        )
                    }
                    )}
                </div>
                <div className='row'>
                    {answers.filter((answer, index) => index > 1).map((answer, index) => {
                        return (
                            <ButtonWrapper
                                key={index}
                                correct={userAnswer?.correctAnswer === answer}
                                userClicked={userAnswer?.answer === answer}
                            >
                                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </button>
                            </ButtonWrapper>
                        )
                    }
                    )}
                </div>
                <sub>Difficulty: {difficulty.toUpperCase()}</sub>
            </div>
        </Wrapper>
    )
}

export default QuestionCard;
