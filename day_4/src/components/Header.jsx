import React, { useContext } from 'react';
import axios from 'axios';
import { QuestionContext } from './QuestionContext';

const Header = ({ handleTabSelect }) => {
  const { allQuestion } = useContext(QuestionContext);
  const [showDropdown, setShowDropdown] = React.useState(false);


  const handlePublish = () => {
    // Convert the selectedQuestion object to JSON string
    const jsonData = JSON.stringify(allQuestion.all);

    const serverURL = 'http://localhost:3001/publishQuestion';

    // Send a POST request to the server
    axios
      .post(serverURL, jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('JSON data published successfully!');
      })
      .catch((error) => {
        console.error('Error publishing JSON data:', error);
      });
  };


  const handleLogout = () => {
    // Perform logout logic here
    // console.log('Logged out');
    window.location.reload(); // Refresh the page
  };

  return (
    <header className='menu-header'>
      <div className='menu-header-left'>
        <h4 className='menu-header-title'>My Workspace</h4>
      </div>

      <div className='menu-header-mid'>
        <h4 onClick={() => handleTabSelect('create')}>Create</h4>
        <h4 onClick={() => handleTabSelect('result')}>Result</h4>
      </div>

      <div className='menu-header-right'>
        <button onClick={handlePublish}>Publish</button>
        <div className='circle'>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            FY
          </button>
          {showDropdown && (
            <div className='circle-dropdown'>
              <button onClick={handleLogout} className='dropdown-button'>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
