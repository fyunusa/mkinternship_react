import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MidSection from './components/MidSection';
import { QuestionProvider } from './components/QuestionContext';
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';


// function App() {
//   const [activeTab, setActiveTab] = useState('create');

//   const handleTabSelect = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <QuestionProvider>
//       <div className="App">
//         <Header />
//         <div className="container mt-4">
//           <ul className="nav nav-tabs">
//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeTab === 'create' ? 'active' : ''}`}
//                 onClick={() => handleTabSelect('create')}
//               >
//                 Create
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeTab === 'result' ? 'active' : ''}`}
//                 onClick={() => handleTabSelect('result')}
//               >
//                 Result
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content">
//             <div className={`tab-pane ${activeTab === 'create' ? 'active' : ''}`} id="create">
//               <section className="home--section row no-gutters">
//                 <div className="col-2 smaller-section d-flex flex-column">
//                   <div className="card flex-grow-1">
//                     <div className="card-body side-bar-left">
//                       <SidebarLeft />
//                       {/* SidebarLeft content */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-8 bigger-section d-flex flex-column">
//                   <div className="card flex-grow-1">
//                     <div className="card-body mid-bar">
//                       <MidSection />
//                       {/* MidSection content */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-2 smaller-section d-flex flex-column">
//                   <div className="card flex-grow-1">
//                     <div className="card-body side-bar-right">
//                       <SidebarRight />
//                       {/* SidebarRight content */}
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//             <div className={`tab-pane ${activeTab === 'result' ? 'active' : ''}`} id="result">
//               <section className="result--section">
//                 {/* Result section content */}
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </QuestionProvider>
//   );
// }
const App = () => {
  const [activeTab, setActiveTab] = React.useState('create');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <QuestionProvider>
      <div className="App">
        <Header />
        <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
          <Tab.Content>
            <Tab.Pane eventKey="create">
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
            </Tab.Pane>
            <Tab.Pane eventKey="result">
              <section className="result--section">
                {/* Result section content */}
              </section>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </QuestionProvider>
  );
};

export default App;
// export { handleTabSelect };


