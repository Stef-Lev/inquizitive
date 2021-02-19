import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import { QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import SpinLoader from './components/SpinLoader';
import DifficultyControl from './components/DifficultyControl';
import QNumControl from './components/QNumControl';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [questionsAmount, setQuestionsAmount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<string>('easy');

  if (questions.length > 0) {
    console.log(questions);
  }

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

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
  // Add switches to control difficulty and number of questions.

  const changeDiff = (newValue: string) => {
    setDifficulty(newValue);
  }

  const changeAmount = (newValue: number) => {
    setQuestionsAmount(newValue);
  }

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === questionsAmount) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>The Quizard</h1>
        {gameOver || userAnswers.length === questionsAmount ? (
          <>
            <DifficultyControl difficulty={difficulty} onChange={changeDiff} />
            <QNumControl amount={questionsAmount} onChange={changeAmount} />
            <button className='start' onClick={startQuiz}>
              Start
          </button>
          </>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading && <SpinLoader
          type='Puff'
          color='#f1f2f6'
          height={250}
          width={250}
          timeout={20000}
        />}
        {!loading && !gameOver && (
          <QuestionCard
            question={questions[number].question}
            category={questions[number].category}
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
      </Wrapper>
    </>
  );
}

export default App;