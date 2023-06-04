import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContext';

export default function MidSection() {
  const { allQuestion, setAllQuestion } = React.useContext(QuestionContext);
  // console.log(allQuestion.selectedOne)

  const renderOptions = () => {
    if (allQuestion.selectedOne && allQuestion.selectedOne[0].answers) {
      const answerKeys = Object.keys(allQuestion.selectedOne[0].answers);
  
      return answerKeys.map((key, index) => (
        <React.Fragment key={key}>
          <button
            className="btn btn-primary mr-2 mb-2"
            style={{ fontSize: '0.8rem' }}
            onClick={() => handleOptionClick(key)}
          >
            {key}.) {allQuestion.selectedOne[0].answers[key].answer}
          </button>
          {(index + 1) % 2 === 0 && <br />} {/* Add line break after every 2 buttons */}
        </React.Fragment>
      ));
    }
  
    return null;
  };
  
  

  const handleOptionClick = (option) => {
    // Handle option click logic
  };

  return (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {allQuestion.selectedOne[0] ? (
                <div>
                  <h2 className="card-title">Selected Question:</h2>
                  <p className="card-text">{allQuestion.selectedOne[0].question}</p>
                  <div className="btn-group">{renderOptions()}</div>
                </div>
              ) : (
                <div>No question selected</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
