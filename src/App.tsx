import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Tainan20190728 from './pages/20190728/Tainan';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HashRouter basename="/">
        <div className="App">
          <Route path="/20190728" component={Tainan20190728} />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
