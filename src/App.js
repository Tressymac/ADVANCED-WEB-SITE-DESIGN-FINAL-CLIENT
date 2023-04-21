import { BrowserRouter, Routes, Route, Navigate, Redirect, useNavigate} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './component/header/headers';
import Footer from './component/footer/footer';
import StateInfo from './component/stateInfo/stateInfo';
import HomeInfo from './component/home/homeInfo';
import UsMap from './component/map/map';
import StateDits from './component/stateInfo/getStatesDits';
import StateQuiz from './component/quiz/quiz';

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter basename="/states">
      <Header />
      <HomeInfo />
        <Routes>
          <Route path='/' element={<StateInfo />} />
          <Route path='/map' element={<UsMap />} />
          <Route path='/:name' element={<StateDits />} />
          <Route path='/quiz' element={<StateQuiz />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
