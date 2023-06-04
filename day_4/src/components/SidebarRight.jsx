import React, { useState, useContext } from 'react';
import { QuestionContext } from './QuestionContext';

export default function Header() {
  const [isRequired, setIsRequired] = useState(false);
  // const { selectedQuestion, setSelectedQuestionVariant } = useContext(QuestionContext);
  const { allQuestion, setAllQuestion } = React.useContext(QuestionContext);

  // console.log(allQuestion)

  const toggleRequired = () => {
    setIsRequired(!isRequired);
  };

  const handleOptionChange = (index, value) => {
    setAllQuestion(allQuestion => {
      const updatedQuestionAll = { ...allQuestion.all };
      const updatedQuestion = { ...allQuestion.selectedOne[0] };

      updatedQuestion.answers = [...allQuestion.selectedOne[0].answers];
      updatedQuestion.answers[index] = { ...updatedQuestion.answers[index], answer: value };

      updatedQuestionAll[updatedQuestion.id - 1] = updatedQuestion;
  
      return {
        all: updatedQuestionAll,
        selectedOne: [updatedQuestion]
      };
    });
  };
  
  
  const renderOptions = () => {
    if (allQuestion.selectedOne[0] && allQuestion.selectedOne[0].answers) {
      const questionType = allQuestion.selectedOne[0].type;
  
      if (questionType === 'multiple_selection_choice' || questionType === 'multiple_choice') {
        return allQuestion.selectedOne[0].answers.map((option, index) => (
          <div key={option.id} style={{ display: 'flex' }}>
            <div>{index + 1}. </div>
            <div>
              <input
                type="text"
                className="form-control"
                style={{ fontSize: '0.8rem', display: 'block' }}
                defaultValue={option.answer}
                onChange={(event) => handleOptionChange(index, event.target.value)}
              />
            </div>
          </div>
        ));
      }
  
      if (questionType === 'short_answer') {
        return (
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              className="form-control"
              style={{ fontSize: '0.8rem', display: 'block' }}
              defaultValue={allQuestion.selectedOne[0].answers[0]?.answer}
              onChange={(event) => handleOptionChange(0, event.target.value)}
            />
          </div>
        );
      }
  
      if (questionType === 'long_text') {
        return (
          <div style={{ display: 'flex' }}>
            <textarea
              className="form-control"
              style={{ fontSize: '0.8rem', display: 'block' }}
              defaultValue={allQuestion.selectedOne[0].answers[0]?.answer}
              onChange={(event) => handleOptionChange(0, event.target.value)}
            />
          </div>
        );
      }
  
      if (questionType === 'true_false') {
        return (
          <div>
            <label>
              <input
                type="radio"
                value="true"
                checked={allQuestion.selectedOne[0].answers[0]?.answer === 'true'}
                onChange={(event) => handleOptionChange(0, event.target.value)}
              />{' '}
              True
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="false"
                checked={allQuestion.selectedOne[0].answers[0]?.answer === 'false'}
                onChange={(event) => handleOptionChange(0, event.target.value)}
              />{' '}
              False
            </label>
          </div>
        );
      }
    }
  
    return null;
  };
  
  
  
  
return (
  <div className="container-fluid">
    {/* Begin type div */}
    <div className="row mb-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title small-font-11">Type</h6>
            <div className="input-group">
              {/* <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-icon-name"></i>
                </span>
              </div> */}
             {renderOptions()}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Begin settings div  */}
    <div className="row mb-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title small-font-11">Settings</h6>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="requiredSwitch"
                checked={isRequired}
                onChange={toggleRequired}
              />
              <label className="form-check-label" htmlFor="requiredSwitch">
                Required
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Begin media div  */}
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h6 className="card-title small-font-11">Image or Video</h6>
            <button className="btn btn-sm btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  

  
}
