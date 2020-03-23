import React from 'react';
import TechniquesPage from './pages'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css'

function App() {
  
  return (
    <Router>
      <TechniquesPage/>

    </Router>
  )
}

export default App;
