import React, { useState } from 'react';
import HeaderBar from '../components/Header';
import LeftSection from '../components/LeftSide';
import RightSection from '../components/RightSide';
import MidSection from '../components/MidSide';

const FlowPage = () => {

  return (
    <div style={{ height: '900px'}}>
      <HeaderBar />
      <div className='section' style={{ display: 'flex', height: '90%'}}>
        <div style={{ width: '27%', height: '100%' }}>
          <LeftSection />
        </div>
        <div style={{ flex: '1', height: '100%' }}>
          <MidSection />
        </div>
        <div style={{ width: '27%', height: '100%' }}>
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default FlowPage;
