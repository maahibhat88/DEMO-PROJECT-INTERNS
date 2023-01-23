import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './menu.css'

function Menu(props) {
    return(
        <Fragment>  
            <h1>Places</h1>
            {/* <div className='row'>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <card></card>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <card></card>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <card></card>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <card></card>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <card></card>
                </div>

            </div> */}
            <nav  className="container">
                <ul className='nav'>
                    <li key={1} className="nav-item">
                        <a className='nav-link' href="/" > 
                            Home
                        </a>
                    </li>
                    <li key={2} className="nav-item">
                        <a className='nav-link' href="/about" > 
                            About
                        </a>
                    </li>
                    <li key={3} className="nav-item">
                        <a className='nav-link' href="/contact" > 
                            Contact
                        </a>
                    </li>
                    <li key={4} className="nav-item">
                        <a className='nav-link' href="/callback" > 
                            CallBack
                        </a>
                    </li>
                    <li key={4} className="nav-item">
                        <a className='nav-link' href="/async" > 
                            Async
                        </a>
                    </li>
                    <li key={4} className="nav-item">
                        <a className='nav-link' href="/login" > 
                            Login
                        </a>
                    </li>
                    <li key={4} className="nav-item">
                        <a className='nav-link' href="/register" > 
                            Register
                        </a>
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
// Network Calls/Getting data from api's  (AXIOS)
// form   state (useState)
// functional components /// statless // hooks
// higher order functions
// typescript  // stateful components // class // life cycle // state
// testing in react js


// Nodejs


//get and post api differnce


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
