import React from 'react';
import {StyledApp} from './StyledApp';
import {Login} from '../Login/Login';
import {AppContainer} from '../AppContainer/AppContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledApp>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={AppContainer} />
      </StyledApp>
    </Router>
  );
}


export default App;