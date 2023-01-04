import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './menu.css'

function Menu(props) {
    return(
        <Fragment>  
            <nav className="container">
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