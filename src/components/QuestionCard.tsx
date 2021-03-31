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
`;

const ButtonWrapper = styled.div<ButtonWrapperProps>`
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
    height: 100%;
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
    height: fit-content;
    width: 100%;
    margin: 5px 0;
  }
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const CategoryTag = styled.p`
  display: inline-block;
  background-color: #a4bfcf;
  color: #fff;
  font-size: 0.85rem !important;
  padding: 3px 8px;
  border-radius: 20px;
`;

const DifficultyTag = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  border-radius: 20px;
  padding: 2px 5px;
  margin-top: 16px;
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
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "easy":
        return "#34eb52";
      case "medium":
        return "#eb7734";
      case "hard":
        return "#eb3434";
      default:
        return "#000000";
    }
  };

  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <CategoryTag>{category}</CategoryTag>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <BtnContainer>
        {answers.map((answer, index) => {
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
      </BtnContainer>
      <DifficultyTag
        style={{
          color: getDifficultyColor(difficulty),
          border: `1px solid ${getDifficultyColor(difficulty)}`,
        }}
      >
        {difficulty.toUpperCase()}
      </DifficultyTag>
    </Wrapper>
  );
};

export default QuestionCard;
