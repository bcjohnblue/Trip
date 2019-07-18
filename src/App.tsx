import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Tainan20190728 from './pages/20190728/Tainan';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route path="/20190728" component={Tainan20190728} />
      </div>
    </HashRouter>
  );
};

export default App;
