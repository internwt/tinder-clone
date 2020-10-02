import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Header from './Components/Header'
import TinderCard from './Components/TinderCards'
function App() {


  return (
    <>
      <div className='app'>
        <Router>
          < Header />
          <Switch>
            <Route exact path='/'>
              <TinderCard />
            </Route>
            <Route exact path="/chat">
              chat pages
              </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
