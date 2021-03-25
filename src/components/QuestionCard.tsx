import React from "react";
import { AnswerObject } from "../App";
import styled from "styled-components";

type QuestionCardProps = {
  question: string;
  category: string;
  difficulty: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

const Wrapper = styled.div`
  max-width: 1100px;
  background: #f1f2f6;
  border-radius: 10px;
  border: none;
  padding: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  .answers-container {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  p {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  width: 50%;
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.85rem;
    width: 100%;
    min-height: 45px;
    max-height: fit-content;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#26bb6c" : !correct && userClicked ? "#fa2828" : "#003249"};
    border: none;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  button span {
    display: inline-block;
    height: 100%;
    width: 100%;
    margin: 5px 0;
  }
`;

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  category,
  difficulty,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <sup>{category}</sup>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answers-container">
        <div className="row">
          {answers
            .filter((answer, index) => index < 2)
            .map((answer, index) => {
              return (
                <ButtonWrapper
                  key={index}
                  correct={userAnswer?.correctAnswer === answer}
                  userClicked={userAnswer?.answer === answer}
                >
                  <button
                    disabled={userAnswer ? true : false}
                    value={answer}
                    onClick={callback}
                  >
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                  </button>
                </ButtonWrapper>
              );
            })}
        </div>
        <div className="row">
          {answers
            .filter((answer, index) => index > 1)
            .map((answer, index) => {
              return (
                <ButtonWrapper
                  key={index}
                  correct={userAnswer?.correctAnswer === answer}
                  userClicked={userAnswer?.answer === answer}
                >
                  <button
                    disabled={userAnswer ? true : false}
                    value={answer}
                    onClick={callback}
                  >
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                  </button>
                </ButtonWrapper>
              );
            })}
        </div>
        <sub style={{ marginTop: "8px" }}>
          Difficulty: {difficulty.toUpperCase()}
        </sub>
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
