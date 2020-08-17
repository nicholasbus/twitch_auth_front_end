import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';

import User from './components/User'
import Landing from './components/Landing'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/user_page'>
          <User />

        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
