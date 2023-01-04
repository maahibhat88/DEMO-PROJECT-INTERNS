import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import About from './components/about';
import Contact from './components/contact-us';
import Menu from './components/menu';
import { render } from '@testing-library/react';
import NotFound from "./components/not-found";

// let menuItems = [ 
//   { id:1, name : "Home", path : "/" },
//   { id:2, name : "About", path : "/about" },
//   { id:3, name : "Contact Us", path : "/contact" }
// ];

const myStyle = {
  color: "red",
  backgroundColor: "cyan",
  padding: "10px"
};

const routing = (
  <div style={myStyle}>
    <Router>
      <Menu />
        {/* first one is the default path */}
        <Switch>
          <Route exact path="/" component={App}/>   
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  </div>
)



ReactDOM.createRoot(document.getElementById('root'),
render(routing));
