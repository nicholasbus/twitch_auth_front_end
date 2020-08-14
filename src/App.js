import React from 'react';
import './App.css';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import User from './components/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import { authUser } from './API.js';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/user_page'>
          <User />

        </Route>
        <Route path='/'>
          <div className="app">
            <Container maxWidth="lg" id="landing-container">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitch"
              role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z">
                </path>
            </svg>
              <Button variant="contained" onClick={() => authUser()}>LOGIN WITH TWITCH</Button>
            </Container>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
