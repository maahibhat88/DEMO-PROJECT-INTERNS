import React from "react";
import './menu.css'
import {NavLink } from "react-router-dom";
function Menu(props){
    let {menuList} = props;
    return(
    <>
     <nav >
        <ul>
         {
            menuList.map((i)=>{
             return (
                      <li key={i.id} >
                      <NavLink exact to={i.path}  className='text-white' > 
                         {i.name} 
                      </NavLink>
                      </li>
                   )
            }   )
         }
            </ul>

        </nav>
    </>
    );

}
export default Menu;