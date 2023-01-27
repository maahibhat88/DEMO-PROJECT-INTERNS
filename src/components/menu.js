import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import  './menu.css'

function Menu(props) {
    const { isLoggedIn } = props;
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }


    return(
        <Fragment>  
            <nav  className="container">
                <ul className='nav'>
                    {isLoggedIn  ? 
                    <>
                    <li key={1} className="nav-item">
                        <a className='nav-link' href="/" > 
                            Home
                        </a>
                    </li>
                    <li key={1} className="nav-item">
                        <Button onClick={logout}>
                            Logout
                        </Button>
                    </li>
                    </> :
                    <>
                        <li key={6} className="nav-item">
                            <a className='nav-link' href="/login" > 
                                Login
                            </a>
                        </li>
                        <li key={7} className="nav-item">
                            <a className='nav-link' href="/register" > 
                                Register
                            </a>
                        </li>
                    </>
                    }
                </ul>
            </nav>
        </Fragment>
    );
}

export default Menu;

                  {/* <li key={2} className="nav-item">
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
                    <li key={5} className="nav-item">
                        <a className='nav-link' href="/async" > 
                            Async
                        </a>
                    </li> */}

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
