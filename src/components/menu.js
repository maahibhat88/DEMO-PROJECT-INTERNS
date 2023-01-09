import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './menu.css'

function Menu(props) {
    return(
        <Fragment>  
            <nav className="container-fluid p-4">
                <ul className='nav'>
                <div class='row'>
                <div class='col-12'>
                <b class='text pt-0'>Kashmir Travels</b>
                </div>
                </div>
                    <li key={1} className="nav">
                        <NavLink className='nav-link text-black' to="/App" > 
                            Home
                        </NavLink>
                    </li>
                    <li key={2} className="nav">
                        <NavLink className='nav-link text-black' to="/about" > 
                            About
                        </NavLink>
                    </li>
                    <li key={3} className="nav">
                        <NavLink className='nav-link text-black' to="/places" > 
                            Places
                        </NavLink>
                    </li>
              
                </ul>
            </nav>
        </Fragment>
    );
}

export default Menu;

// props
// destructuring
// array or list method map
// conditional rendering  // short and conditional rendering
// keys ==  {ul ol dl  li  key={} }  ul li


//fragments
// React.Fragment
//Fragment import direct
// <> </>


//views


//npm i react-router-dom
//<BrowserRouter> : dynamic urls

//functional Component  === stateless
//class components == stateful


// css  --  framework - bootstrap -- tailwind -- mui
// functional components /// statless // hooks
// higher order functions
// typescript  // stateful components // class // life cycle // state
// testing in react js


// Nodejs

// assignment

// Login ===   Static  : user && password and compare, when true redirect to Homepage and if user tries to goto login 
// (check if logged in redirect back to homepage)   // use localstorage

// Routing - Auth Guard -- Read and Implement ()  to protect your pages to access without login

// Homepage --  kashmir tourism
//  nav (menu)
//  header (carousel) kashmir images
//  about section (topic about J&K)
// accordion ( where you can show accordions)  two (jammu and kashmir)
// places sections (use cards ) at least 12 places 4 in a row in large display (2 in medium) 1 in small
// footer section (any content)  Designed & Developed By Your Name