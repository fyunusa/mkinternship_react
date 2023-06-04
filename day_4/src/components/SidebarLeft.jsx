import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import QuizData from '../data/Questions';
import { QuestionContext } from './QuestionContext';

export default function LeftSide() {
  const { allQuestion, setAllQuestion } = React.useContext(QuestionContext);

  const [rowCount, setRowCount] = React.useState(1);
  const [question, setQuestion] = React.useState(QuizData);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState('');
  const [filteredQuestions, setFilteredQuestions] = React.useState([]);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTypeSelect = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    const filtered = question.filter((item) => item.type === type);
    setFilteredQuestions(filtered);
    setRowCount(filtered.length);
  };

  // const handleQuestionClick = (receivedQuestion) => {
  //   setAllQuestion(allQuestion => ({
  //     ...allQuestion,
  //     selectedOne: [receivedQuestion]
  //   }));
    
  // };
  const handleQuestionClick = (receivedQuestion) => {
    setAllQuestion(allQuestion => {
      const updatedQuestion = { ...receivedQuestion };
  
      // Check the question type
      switch (updatedQuestion.type) {
        case 'multiple_selection_choice':
        case 'multiple_choice':
          // Initialize the answers array with four empty slots
          updatedQuestion.answers = Array(4).fill().map((_, index) => ({ id: index.toString(), answer: '' }));
          break;
        case 'short_answer':
          // Initialize the answers array with a single empty slot
          updatedQuestion.answers = [{ id: '0', answer: '' }];
          break;
        case 'true_false':
          // Initialize the answers array with two options: true and false
          updatedQuestion.answers = [
            { id: 'true', answer: 'true' },
            { id: 'false', answer: 'false' }
          ];
          break;
        case 'long_text':
          // Set the answers array as an empty array
          updatedQuestion.answers = [{ id: '0', answer: '' }];
          break;
        default:
          // For unknown question types, set the answers array as an empty array
          updatedQuestion.answers = [];
          break;
      }
  
      return {
        ...allQuestion,
        selectedOne: [updatedQuestion]
      };
    });
  };
  

  const renderRows = () => {
    return filteredQuestions.map((allQuestion, index) => (
      <div
        key={allQuestion.id}
        className="row render-rows-container medium-font-12"
        onClick={() => handleQuestionClick(allQuestion, allQuestion.id)}
      >
        <div className="col">
          <div className="card">
            <div className="card-body render-row-child">
              {allQuestion.question}
            </div>
          </div>
        </div>
      </div>
    ));
  };
  

  return (
    <div className="addContents container">


      <div className="row">
        <div className="col">
          <div className="card">
          <div className="card-body custom-padding-1 d-flex" style={{ backgroundColor: "#2196f3", color: "white" }}>
              <div className="col-6 medium-font-12">Content</div>
              <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-secondary btn-sm" onClick={handleButtonClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {renderRows()}
      

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Question Type</Modal.Title>
          <Button variant="secondary" onClick={handleModalClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-control"
            value={selectedType}
            onChange={handleTypeSelect}
          >
            <option value="">Select Type</option>
            <option value="short_answer">Short Answer</option>
            <option value="multiple_choice">Multiple Choice</option>
            <option value="multiple_selection_choice">
              Multiple Selection Choice
            </option>
            <option value="long_text">Long Text</option>
            <option value="true_false">True/False</option>
          </select>
        </Modal.Body>
      </Modal>
    </div>
  );
}
