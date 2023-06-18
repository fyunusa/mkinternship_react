import React, { createContext, useState, useCallback } from 'react';

const ShapeContext = createContext({
  selectedShape: null,
  handleShapeClick: () => {},
});

export const ShapeProvider = ({ children }) => {
  const [selectedShape, setSelectedShape] = useState(null);

  const handleShapeClick = useCallback((shapeType) => {
    setSelectedShape(shapeType);
  }, []);

  return (
    <ShapeContext.Provider value={{ selectedShape, handleShapeClick }}>
      {children}
    </ShapeContext.Provider>
  );
};

export default ShapeContext;
