import React, { createContext, useState } from 'react';
import QuizData from '../data/Questions';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [allQuestion, setAllQuestion] = useState({'all':QuizData, 'selectedOne': []});

  return (
    <QuestionContext.Provider value={{ allQuestion, setAllQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
