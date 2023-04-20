import { BrowserRouter, Routes, Route, Navigate, Redirect, useNavigate} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './component/header/headers';
import Footer from './component/footer/footer';
import StateInfo from './component/stateInfo/stateInfo';
import HomeInfo from './component/home/homeInfo';
import UsMap from './component/map/map';
import StateDits from './component/stateInfo/getStatesDits';

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter basename="/">
      <Header />
      <HomeInfo />
        <Routes>
          <Route path='/states' element={<StateInfo />} />
          <Route path='/states/map' element={<UsMap />} />
          <Route path='/states/:name' element={<StateDits />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
