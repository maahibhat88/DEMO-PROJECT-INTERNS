import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import About from './components/about';
import Contact from './components/contact-us';
import Menu from './components/menu';
import Callback from './components/callbacks';
import { render } from '@testing-library/react';
import NotFound from "./components/not-found";
import AsyncComp from './components/async-concept';
import Login from "./components/login";
import Regitser from './components/register';
import ProtectedRoute from './protected-routes';

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

const checkLogin = () => {
  console.log("checking")
  if(!localStorage.getItem("user")){
    return false;
  }else{
      return true;
  }
}




const routing = (
  <div style={myStyle}>
    <Router>
        <Menu isLoggedIn={checkLogin()}/>
        {/* first one is the default path */}
        <Switch>
          <ProtectedRoute exact path="/" isLoggedIn={checkLogin()} component={App} />
          {/* // <Route exact path="/" component={App}/>   
          // <Route path="/about" component={About}/>
          // <Route path="/contact" component={Contact}/>
          // <Route path="/callback" component={Callback}/>
          // <Route path="/async" component={AsyncComp}/> */}
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Regitser}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  </div>
)



ReactDOM.createRoot(document.getElementById('root'),
render(routing));
