import React, { useState, useCallback } from 'react';
import '../../css/shapes.css';

const LeftSection = () => {
  return (
    <div className="bg-light card p-3">
      <Shapes />
    </div>
  );
};

const Shapes = () => {
  const [selectedShape, setSelectedShape] = useState(null);

  const handleShapeClick = useCallback((shapeType) => {
    setSelectedShape(shapeType);
  }, []);

  const shapeTypes = ['Circle', 'Rectangle', 'Triangle', 'Square', 'Star', 'certificate', 'Heart', 'database', 'Diamond', 'Cross', 'Oval', 'Arrow'];

  const shapeIcons = {
    Circle: 'fa-circle',
    Rectangle: 'fa-square',
    Triangle: 'fa-caret-up',
    Square: 'fa-square',
    Star: 'fa-star',
    certificate: 'fa-certificate',
    Heart: 'fa-heart',
    database: 'fa-database',
    Diamond: 'fa-gem',
    Cross: 'fa-times',
    Oval: 'fa-circle',
    Arrow: 'fa-arrow-right',
  };

  const renderShapeButtons = () => {
    return shapeTypes.map((shapeType) => (
      <ShapeButton
        key={shapeType}
        shapeType={shapeType}
        isSelected={selectedShape === shapeType}
        onClick={handleShapeClick}
      >
        <i className={`fas ${shapeIcons[shapeType]}`}></i>
      </ShapeButton>
    ));
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'midnightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
      }}
    >
      <div>
        <h2 style={{ color: 'white', textAlign: 'center' }}>
          Click on a shape to select it:
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {renderShapeButtons()}
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <SelectedShape shapeType={selectedShape} />
        </div>
      </div>
    </div>
  );
};

const ShapeButton = ({ shapeType, isSelected, onClick, children }) => {
  return (
    <button
      style={{
        padding: '10px',
        margin: '5px',
        backgroundColor: isSelected ? 'lightblue' : 'transparent',
        border: isSelected ? '2px solid darkblue' : '2px solid white',
        color: isSelected ? 'darkblue' : 'white',
        cursor: 'pointer',
      }}
      onClick={() => onClick(shapeType)}
    >
      {children}
      <div>{shapeType}</div>
    </button>
  );
};

const SelectedShape = ({ shapeType }) => {
  if (!shapeType) return null;

  let shapeIcon;
  let shapeColor;

  switch (shapeType) {
    case 'Circle':
      shapeIcon = 'fa-circle';
      shapeColor = '#ff6384';
      break;
    case 'Rectangle':
      shapeIcon = 'fa-square';
      shapeColor = '#36a2eb';
      break;
    case 'Triangle':
      shapeIcon = 'fa-caret-up';
      shapeColor = '#ffce56';
      break;
    case 'Square':
      shapeIcon = 'fa-square';
      shapeColor = '#ff6384';
      break;
    case 'Star':
      shapeIcon = 'fa-star';
      shapeColor = '#36a2eb';
      break;
    case 'certificate':
      shapeIcon = 'fa-certificate';
      shapeColor = '#ffce56';
      break;
    case 'Heart':
      shapeIcon = 'fa-heart';
      shapeColor = '#ff6384';
      break;
    case 'database':
      shapeIcon = 'fa-database';
      shapeColor = '#36a2eb';
      break;
    case 'Diamond':
      shapeIcon = 'fa-gem';
      shapeColor = '#ffce56';
      break;
    case 'Cross':
      shapeIcon = 'fa-times';
      shapeColor = '#ff6384';
      break;
    case 'Oval':
      shapeIcon = 'fa-circle';
      shapeColor = '#36a2eb';
      break;
    case 'Arrow':
      shapeIcon = 'fa-arrow-right';
      shapeColor = '#ffce56';
      break;
    default:
      shapeIcon = null;
      shapeColor = null;
  }

  const iconStyle = {
    fontSize: '70px',
    color: shapeColor,
  };

  return (
    <div className="selected-shape">
      {shapeIcon && <i className={`fas ${shapeIcon}`} style={iconStyle}></i>}
    </div>
  );
};



export default LeftSection;
