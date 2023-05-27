import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import QuizData from '../data/Questions';
import { QuestionContext } from './QuestionContext';

export default function LeftSide() {
  const { selectedQuestion, setSelectedQuestion } = React.useContext(QuestionContext);

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

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    // console.log(selectedQuestion); // Access the selectedQuestion value
    // console.log('we have set a new question'); // Access the clicked question
  }; 

  const renderRows = () => {
    return filteredQuestions.map((question, index) => (
      <div
        key={question.id}
        className="row render-rows-container medium-font-12"
        onClick={() => handleQuestionClick(question)}
      >
        <div className="col">
          <div className="card">
            <div className="card-body">
              {question.question}
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
            <div className="card-body">
              <div className="col-6 medium-font-12">Content</div>
              <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={handleButtonClick}>
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
