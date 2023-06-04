import React, { useContext, useState } from 'react';
import { QuestionContext } from './QuestionContext';

export default function ResultSection() {
  const { allQuestion } = useContext(QuestionContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log(allQuestion)

  const renderOptions = () => {
    if (allQuestion.all && allQuestion.all[currentQuestionIndex].answers) {
      const answerKeys = Object.keys(allQuestion.all[currentQuestionIndex].answers);
      return answerKeys.map((key, index) => (
        <React.Fragment key={key}>
          <button
            className="btn btn-primary mr-2 mb-2"
            style={{ fontSize: '0.8rem' }}
          >
            {key}.) {allQuestion.all[currentQuestionIndex].answers[key].answer}
          </button>
          {(index + 1) % 2 === 0 && <br />} {/* Add line break after every 2 buttons */}
        </React.Fragment>
      ));
    }

    return null;
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < allQuestion.all.length || nextIndex < Object.keys(allQuestion.all).length) {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handlePreviousQuestion = () => {
    const previousIndex = currentQuestionIndex - 1;
    if (previousIndex >= 0) {
      setCurrentQuestionIndex(previousIndex);
    }
  };

  return (
    <section className="container-fluid result--section align-items-center justify-content-center">
      <div className="card" style={{ width: '50%', height: '70%', marginTop : '10%' }}>
        <div className="card-body">
          {allQuestion.all ? (
            <div>
              <h6 className="card-question-type text-right mb-3">
                {allQuestion.all[currentQuestionIndex].type}
              </h6>
              <h2 className="card-title">Selected Question:</h2>
              <p className="card-text">{allQuestion.all[currentQuestionIndex].question}</p>
              <div className="btn-group">{renderOptions()}</div>
            </div>
          ) : (
            <div>No question selected</div>
          )}
        </div>
        
      </div>
        <div style={{ marginTop: '10px', marginLeft: '-50%' }}>
            <button
                className="btn btn-primary mr-2"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
            >
                Previous
            </button>
            <button
                className="btn btn-primary"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === allQuestion.all.length - 1}
            >
                Next
            </button>
        </div>
    </section>
  );
}
