import logo from './logo.svg';
import './App.css';
import Header from './component/header/headers';
import Footer from './component/footer/footer';
import StateInfo from './component/stateInfo/stateInfo';
import HomeInfo from './component/home/homeInfo';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <HomeInfo />
      <StateInfo />
      <Footer />
    </div>
  );
}

export default App;
