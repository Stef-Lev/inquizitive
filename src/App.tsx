import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import ScoreCard from "./components/ScoreCard";
import { QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";
import SpinLoader from "./components/SpinLoader";
import DifficultyControl from "./components/DifficultyControl";
import QNumControl from "./components/QNumControl";
import ReplayBtn from "./components/ReplayBtn";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const ControlsContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: 300px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 25px;
`;

const CalculatingContainer = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 25px;
  width: 300px;
  height: 150px;
`;

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [calculating, setCalculating] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [questionsAmount, setQuestionsAmount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>("easy");

  useEffect(() => {
    if (userAnswers.length === questionsAmount) {
      setCalculating(true);
      setTimeout(() => {
        setGameComplete(true);
        setCalculating(false);
      }, 2000);
    }
  }, [number, userAnswers, questionsAmount]);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setGameComplete(false);

    const newQuestions = await fetchQuizQuestions(questionsAmount, difficulty);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const changeDiff = (newValue: string) => {
    setDifficulty(newValue);
  };

  const changeAmount = (newValue: number) => {
    setQuestionsAmount(newValue);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === questionsAmount) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setGameOver(true);
    setGameComplete(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>InQUIZitive</h1>
        {gameOver ? (
          <ControlsContainer>
            <DifficultyControl onChange={changeDiff} />
            <QNumControl amount={questionsAmount} onChange={changeAmount} />
            <button className="start" onClick={startQuiz}>
              Start
            </button>
          </ControlsContainer>
        ) : null}

        {loading && (
          <SpinnerContainer>
            <p>Loading Questions...</p>
            <SpinLoader
              type="Puff"
              color="#f1f2f6"
              height={250}
              width={250}
              timeout={0}
            />
          </SpinnerContainer>
        )}
        {!loading && !gameOver && !gameComplete && (
          <QuestionCard
            question={questions[number].question}
            category={questions[number].category}
            difficulty={difficulty}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            questionNumber={number + 1}
            totalQuestions={questionsAmount}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== questionsAmount - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        {gameComplete && (
          <ScoreCard
            score={score}
            questionsAmount={questionsAmount}
            onClick={resetQuiz}
          />
        )}
        {calculating && (
          <CalculatingContainer>
            <p>Calculating Score... &#x231b;</p>
            <SpinLoader
              type="TailSpin"
              color="#ffffff"
              height={50}
              width={50}
              timeout={0}
            />
          </CalculatingContainer>
        )}
        <ReplayBtn onClick={resetQuiz} />
      </Wrapper>
      
    </>
  );
};

export default App;
