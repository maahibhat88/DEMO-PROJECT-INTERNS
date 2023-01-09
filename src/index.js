import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from './components/login';
import App from './components/App';
import { render } from '@testing-library/react';
import About from './components/about';
import Places from './components/places';
import Menu from './components/menu';
import NotFound from "./components/not-found";


// let menuItems = [ 
//   { id:1, name : "Home", path : "/" },
//   { id:2, name : "About", path : "/about" },
//   { id:3, name : "Contact Us", path : "/contact" }
// ];

const myStyle = {
  color: "red",
  backgroundColor: "none",
  padding: "10px",
};

const routing = (
  <>
  <div>
  <Router>
                             {/* first one is the default path */}
                            <Switch>
                                 <Route exact path="/" component={Login}/>
                                 <Route exct path="/app" component={App}/>   
                                 <Route path="/about" component={About}/>
                                 <Route path="/places" component={Places}/>
                                 <Route component={NotFound} />
                            </Switch>
                    </Router>
  </div>

  </>
);



ReactDOM.createRoot(document.getElementById('root'),
render(routing));

 





