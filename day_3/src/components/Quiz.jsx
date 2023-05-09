import React, { createContext, useContext, useState } from 'react';
import QuizData from '../Data/main';
import '../App.css';


// Create a React Context to store the quiz state
const QuizContext = createContext();

// Custom hook to access the QuizContext
const useQuizContext = () => useContext(QuizContext);

// Quiz component
const Quiz = () => {

    // Set states for question,answer & score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

    // Quiz Data
  const quiz = QuizData;

  const handleAnswer = (answerId) => {
    const currentQuizQuestion = quiz[currentQuestion];
    const isCorrect = currentQuizQuestion.correct_answer === answerId;
    setUserAnswers([...userAnswers, { questionId: currentQuizQuestion.id, answerId, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const prevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };
  
  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
  };

    // console.log('currentQuestion:', currentQuestion);
    // console.log('quiz.length:', quiz.length);


  return (
    <QuizContext.Provider value={{ currentQuestion, quiz, userAnswers, score, handleAnswer, nextQuestion, resetQuiz, prevQuestion }}>
      {currentQuestion < quiz.length ? (
        <Question />
      ) : (
        <Result />
      )}
    </QuizContext.Provider>
  );
};

// Question component
const Question = () => {
    const { currentQuestion, quiz, userAnswers, handleAnswer, nextQuestion, prevQuestion } = useQuizContext();
    const question = quiz[currentQuestion];
  
    const handleAnswerClick = (answerId) => {
      handleAnswer(answerId);
    };
  
    return (
      <div className="quiz-container">
        <div className="question-container">
        <h1>Question {currentQuestion + 1}</h1>
        <h2>{question.question}</h2>
  
        {question.type === 'short_answer' && (
          <input type="text" onChange={(e) => handleAnswerClick(e.target.value)} />
        )}
  
        {question.type === 'multiple_choice' && (
          <ul>
            {question.answers.map((answer) => (
              <li key={answer.id} onClick={() => handleAnswerClick(answer.id)}>
                {answer.answer}
              </li>
            ))}
          </ul>
        )}
  
        {question.type === 'multiple_selection_choice' && (
          <ul>
            {question.answers.map((answer) => (
              <li key={answer.id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleAnswerClick(answer.id)}
                    checked={userAnswers.some((userAnswer) => userAnswer.answerId === answer.id)}
                  />
                  {answer.answer}
                </label>
              </li>
            ))}
          </ul>
        )}
  
        {question.type === 'long_text' && (
          <textarea onChange={(e) => handleAnswerClick(e.target.value)} />
        )}
    
        {question.type === 'true_false' && (
          <div>
            <label>
              <input
                type="radio"
                value="true"
                onChange={() => handleAnswerClick(0)}
                checked={userAnswers.some((userAnswer) => userAnswer.answerId === 0)}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                value="false"
                onChange={() => handleAnswerClick(1)}
                checked={userAnswers.some((userAnswer) => userAnswer.answerId === 1)}
              />
              False
            </label>
          </div>
        )}
            <div className='next-prev-btns'>
                <button onClick={prevQuestion} disabled={currentQuestion === 0}>Prev Quiz</button>
                <button onClick={nextQuestion} disabled={currentQuestion === quiz.length}>Next Quiz</button>
            </div>
        </div>
       
       
      </div>
    );
  };
  

// Result component
const Result = () => {
  const { userAnswers, score, resetQuiz } = useQuizContext();

  return (
    <div className="result-container">
      <h1>Quiz Result</h1>
      <p>Your score: {score}</p>
      <button onClick={resetQuiz}>Restart Quiz</button>
      <ul>
        {userAnswers.map((userAnswer) => (
          <li key={userAnswer.questionId}>
            Question {userAnswer.questionId}: {userAnswer.isCorrect ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
