import React, { useState } from 'react';
import {fetchQuizQuestions} from './API';
import './App.css';
import QuestionCard from './components/QuestionCard'
import { QuestionState, Difficulty } from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;


const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions)

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
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

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }

  }

  return (
    <div className="App">
      <h1>QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startQuiz}>
          Start
        </button>
      ) : null}
      
      {!gameOver ? <p className='score'>Score:</p> : null}
      {loading && <p>Loading Question ...</p> }
      {!loading && !gameOver && (
      <QuestionCard
        question = {questions[number].question}
        answers = {questions[number].answers}
        callback = {checkAnswer}
        userAnswer = { userAnswers ? userAnswers[number] : undefined }
        questionNumber = {number+1}
        totalQuestions = {TOTAL_QUESTIONS}
      />)}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>
        Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;