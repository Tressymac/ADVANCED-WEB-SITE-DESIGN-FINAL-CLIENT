import { BrowserRouter, Routes, Route, Navigate, Redirect, useNavigate} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './component/header/headers';
import Footer from './component/footer/footer';
import StateInfo from './component/stateInfo/stateInfo';
import HomeInfo from './component/home/homeInfo';

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter basename="/">
      <Header />
      <HomeInfo />
        <Routes>
          <Route path='/states' element={<StateInfo />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
