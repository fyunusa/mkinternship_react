import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MidSection from './components/MidSection';
import ResultSection from './components/Result';
import { QuestionProvider } from './components/QuestionContext';
import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('create');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <QuestionProvider>
      <div className="App">
        <Header handleTabSelect={handleTabSelect} />
        <div className="tab-content">
          <div
            className={`tab-pane ${activeTab === 'create' ? 'active' : ''}`}
            id="create"
          >
            <section className="home--section row no-gutters">
              <div className="col-2 smaller-section d-flex flex-column">
                <div className="card flex-grow-1">
                  <div className="card-body side-bar-left">
                    <SidebarLeft />
                    {/* SidebarLeft content */}
                  </div>
                </div>
              </div>
              <div className="col-8 bigger-section d-flex flex-column">
                <div className="card flex-grow-1">
                  <div className="card-body mid-bar">
                    <MidSection />
                    {/* MidSection content */}
                  </div>
                </div>
              </div>
              <div className="col-2 smaller-section d-flex flex-column">
                <div className="card flex-grow-1">
                  <div className="card-body side-bar-right">
                    <SidebarRight />
                    {/* SidebarRight content */}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`tab-pane ${activeTab === 'result' ? 'active' : ''}`}
            id="result"
          >
            
             <ResultSection />
            
          </div>
        </div>
      </div>
    </QuestionProvider>
  );
};

export default App;
