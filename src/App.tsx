import React from 'react';
import './styles/reset.css';
import './styles/global.css';
import Header from './componets/Header/Header';
import Nav from './componets/Nav/Nav';
import Greeting from './componets/Greeting/Greeting';
import Questions from './componets/Questions/Questions';
import Slider from './componets/Slider/Slider';
import Footer from './componets/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav/>
      <Greeting/>
      <Questions />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
