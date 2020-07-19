import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './components/mainpage/MainPage';
import LandingPage from './components/landingpage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/rpa_robots" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
