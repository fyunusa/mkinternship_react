import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState({});

  return (
    <QuestionContext.Provider value={{ selectedQuestion, setSelectedQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

// export const SelectedQuestionContext = QuestionContext;
export default QuestionProvider;
