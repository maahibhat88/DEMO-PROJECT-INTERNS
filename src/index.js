import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Contact from './components/Contact Us';
import Menu from './components/menu';
import Home from './components/home';
import Explore from './components/Explore';
import { render } from '@testing-library/react';
import './index.css';
import Login from './components/login';
import Places from './components/places';


//import App from './App';

 let data=[
    {id:1,name:"Home", path:"/home"},
    {id:2,name:"About",path:"/about"},
    {id:3,name:"Contact Us",path:"/contact"},
    {id:4,name:"Explore",path:"/explore"},
    {id:5,name:"Places",path:"/places"}
   
  ]
const routing=(
    <Router>
     <Menu Data={data} />
      <Switch>
          
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          <Route path="/explore" component={Explore} />
          <Route path="/places" component={Places}/>
          </Switch> 
    </Router>
  )
ReactDOM.createRoot(document.getElementById('root'));
render(routing);



  
  
  