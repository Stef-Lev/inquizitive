import React from 'react'
import { Wrapper } from './QuestionCard.styles';

type ScoreCardProps = {
    score: number;
    questionsAmount: number;
    onClick: () => void;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
    score,
    questionsAmount,
    onClick
    }) => {

    const scoreFeedback = <h3 style={{margin: '8px 0'}}>Your score is {score}/{questionsAmount}</h3>

    return (
        <Wrapper>
            {score === 0 && (
            <>
                <div style={{fontSize: '40px'}} role="img" aria-label="sad">&#128549;</div>
                {scoreFeedback}
                <p>You had no correct answers</p>
            </>
            )
            } 

            {score < questionsAmount / 2 && score !== 0 && (
            <>
                <div style={{fontSize: '40px'}} role="img" aria-label="neutral">&#128528;</div>
                {scoreFeedback}
                <p>Not great, not terrible...</p>
            </>
            )
            }

            {score > questionsAmount / 2 && score < questionsAmount && (
            <>
                <div style={{fontSize: '40px'}} role="img" aria-label="happy">&#128578;</div>
                {scoreFeedback}
                <p>Well done!</p>
            </>
            )
            }

            {score === questionsAmount && (
            <>
                <div style={{fontSize: '40px'}} role="img" aria-label="smile">&#128515;</div>
                {scoreFeedback}
                <p>Perfect!!! You are a real Quizard!</p>
            </>
            )
            }
            
            <button className='start' onClick={onClick}>Play again?</button>
        </Wrapper>
    )
}

export default ScoreCard;
