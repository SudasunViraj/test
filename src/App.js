import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '.pages/landingpage'; // Assuming this is your LandingPage component
import Employee from '.pages/employee'; // Import your Employee component
import logo from './logo.svg';
import './App.css';
import Routes from './UIroutes/Routers'
import Landingpage from './pages/landingpage'
import Routers from './UIroutes/Routers';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage} />
          <Route path="/employee" component={Employee} />
          {/* Add other routes for your other pages if needed */}
        </Switch>
      </Router>
  
  );
}

export default App;
