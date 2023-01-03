import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './menu.css'

function Menu(props) {

    let {menuList} = props;

    // menuList.map((element)=>{
    //     console.log("Menu ",element);
    // })

    const tag = menuList.find(i=>{
        return i.id===2;
    })
    console.log(tag);

    const set = menuList.filter(i=>{
        return i.name==="Contact Us";
    })
    console.log(set);

    set.map((i)=>{
        console.log("set",i.id);
    })


    
    return(
        menuList.length ? <Fragment>  
            <nav>
                <ul>
                    {
                        menuList.map((i)=>{
                            return (
                                    <li key={i.id}>
                                        <NavLink exact to={i.path} activeStyle={{color:'blue'}} > 
                                            {i.name} 
                                        </NavLink>
                                    </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </Fragment> : "No Menu Present"
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