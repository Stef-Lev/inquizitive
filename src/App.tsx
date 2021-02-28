import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';
import { QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import SpinLoader from './components/SpinLoader';
import DifficultyControl from './components/DifficultyControl';
import QNumControl from './components/QNumControl';
import { ControlsContainer } from './components/Controls.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [questionsAmount, setQuestionsAmount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('easy');

  useEffect(() => {
    console.log(number, score, questionsAmount);
  }, [number, score, questionsAmount]);

 useEffect(() => {

  if (userAnswers.length === questionsAmount) {
    setGameComplete(true);
    setGameOver(true);
  }
   
 }, [userAnswers, questionsAmount]);

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
  }

  const checkAnswer = (e: any) => {
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
  }

  const changeDiff = (newValue: string) => {
    setDifficulty(newValue);
  }

  const changeAmount = (newValue: number) => {
    setQuestionsAmount(newValue);
  }

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === questionsAmount) {
      console.log('over')
      setGameOver(true);
    } else {
      console.log('next')
      setNumber(nextQ);
    }
  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>The Quizard</h1>
        { gameOver || userAnswers.length === questionsAmount ? (
          <ControlsContainer>
            <DifficultyControl onChange={changeDiff} />
            <QNumControl amount={questionsAmount} onChange={changeAmount} />
            <button className='start' onClick={startQuiz}>
              Start
          </button>
          </ControlsContainer>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading && <SpinLoader
          type='Puff'
          color='#f1f2f6'
          height={250}
          width={250}
          timeout={20000}
        />}
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
          />)}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== questionsAmount - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        {gameComplete && gameOver && (
          <ScoreCard score={score} questionsAmount={questionsAmount} onClick={startQuiz}/>
        )
        }
      </Wrapper>
    </>
  );
}

export default App;