import React, { useState, useCallback, useContext } from 'react';
import ShapeContext from './ShapeContext';
import '../../css/shapes.css'; // Import the shapes.css file


const LeftSection = () => {
  return (
    <div className="bg-light card p-3">
      <Shapes />
    </div>
  );
};

const Shapes = () => {
  const { handleShapeClick, selectedShape } = useContext(ShapeContext);

  const shapeTypes = [
    'circle',
    'rectangle',
    'triangle',
    'square',
    'polygon',
    'hexagon',
    'heptagon',
    'octagon',
    'bevel',
    'rabbet',
    'leftPoint',
    'rightPoint',
    'star',
    'cross',
    'ellipse',
    'rhombus',
    'parallelogram'
  ];

  const handleShapeButtonClick = useCallback(
    (shapeType) => {
      handleShapeClick(shapeType);
    },
    [handleShapeClick]
  );

  const renderShapeButtons = () => {
    return shapeTypes.map((shapeType, index) => (
      <ShapeButton
        key={shapeType}
        shapeType={shapeType}
        isSelected={selectedShape === shapeType}
        onClick={handleShapeButtonClick}
      >
        <div className={`shape ${shapeType}`} style={{ width: '100%', height: '50px' }}></div>
        <div>{shapeType}</div>
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
        overflow: 'auto', // Add overflow property for scrolling
      }}
    >
      <div>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Click on a shape to select it:</h2>
        <div
          style={{
            display: 'grid', // Use CSS Grid for grid layout
            gridTemplateColumns: 'repeat(3, 1fr)', // Display three shapes per row
            gap: '5px', // Add gap between shapes
            width: '100%', // Set the width to 100% to prevent horizontal overflow
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
        padding: '5px',
        margin: '5px',
        backgroundColor: isSelected ? 'lightblue' : 'transparent',
        border: isSelected ? '2px solid darkblue' : '2px solid white',
        color: isSelected ? 'darkblue' : 'white',
        cursor: 'pointer',
      }}
      onClick={() => onClick(shapeType)}
    >
      {children}
    </button>
  );
};

const SelectedShape = ({ shapeType }) => {
  if (!shapeType) return null;

  const shapeClassName = `shape ${shapeType}`; // Use shape class

  return (
    <div className="selected-shape">
      <div className={shapeClassName} style={{ width: '70px', height: '70px' }}></div>
    </div>
  );
};


export default LeftSection;
