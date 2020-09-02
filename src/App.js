import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/about/:alpha3Code">
           <CountryDetail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
