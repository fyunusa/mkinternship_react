import './App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MidSection from './components/MidSection';
import { QuestionProvider } from './components/QuestionContext';

function App() {
  return (
    <QuestionProvider>
      <div className="App">
        <Header />
        <section className="home--section row no-gutters">
          <div className="col-2 smaller-section d-flex flex-column">
            <div className="card flex-grow-1">
              <div className="card-body side-bar-left">
                <SidebarLeft />
                {/* Who is a man dna d aomwnah ddjyg dhnjjhmbnb etyutuyo rtwetryuiyiu qertrrhilu cghjhjkl dfgdfhkl */}
              </div>
            </div>
          </div>
          <div className="col-8 bigger-section d-flex flex-column">
            <div className="card flex-grow-1">
              <div className="card-body mid-bar">
                <MidSection />
              </div>
            </div>
          </div>
          <div className="col-2 smaller-section d-flex flex-column">
            <div className="card flex-grow-1">
              <div className="card-body side-bar-right">
                <SidebarRight />
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuestionProvider>
  );
}

export default App;

