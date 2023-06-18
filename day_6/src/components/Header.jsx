import React, { useState } from 'react';

const Header = () => {
  const [screenView, setScreenView] = useState(100);

  const handleDecreaseScreenView = () => {
    if (screenView > 0) {
      setScreenView(screenView - 10);
    }
  };

  const handleIncreaseScreenView = () => {
    setScreenView(screenView + 10);
  };

  return (
    <header className="header bg-light card p-3" style={{ height: '8%', width: '100%' }}>
      <div className="d-flex justify-content-between align-items-center" style={{ height: '100%' }}>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-primary">RESET CHANGES</button>
          <button className="btn btn-primary">APPLY ALL</button>
        </div>
        <div className="d-flex align-items-center" style={{ marginRight: '50%' }}>
          <i className="fas fa-arrow-rotate-left me-2" style={{ marginRight: '0.5rem' }}></i>
          <i className="fas fa-arrow-rotate-right"></i>
        </div>
        <div className="ms-auto">
          <button className="btn btn-light me-2">
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn btn-light me-2" onClick={handleDecreaseScreenView}>
            <i className="fas fa-minus"></i>
          </button>
          <span className="fs-5 me-2">{screenView}%</span>
          <button className="btn btn-light" onClick={handleIncreaseScreenView}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </header>
  );
  
  
  
};

export default Header;
