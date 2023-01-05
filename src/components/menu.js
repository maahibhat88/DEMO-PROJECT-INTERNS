import  './menu.css'
import  { Fragment } from 'react';
import {NavLink} from 'react-router-dom';

    function Menu(props) {
        
        console.log("the value of props is:",props);
        let {Data}=props;
        console.log("the destructed item:",Data);

         Data.map((element)=>{
           console.log("list",element);
        })
        
        /*//It finds the first object that matches given condition
        const found=Data.find(i=>{
            return i.id===1;
        })
        console.log(found);

       // Find multiple objects that satisfy condition
       const filter=Data.filter(i=>{
           return i.name=== "About";
       })
       console.log(filter);

       
       filter.map(obj=>{
        console.log("fill",obj.id);  
        console.log("filter",obj.name);
       })*/
       
       return(
        <>
        <nav>
            <ul>
                {
            Data.map((i)=>{
                return(
                     <li key={i.id}>
                    <NavLink exact to={i.path} className='text-white' > 
                    {i.name} 
                   </NavLink>
                   </li>
                )
             })
            }
         
            </ul>
       </nav>
      </>
      ) 
        
                 
       
}
export default Menu;


