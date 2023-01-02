import  './menu.css'
import  { Fragment } from 'react';
import {Link} from 'react-router-dom';

    function Menu() {
        /*console.log("the value of props is:",props)
        let{Data,name}=props;
        console.log("the destructed item:",Data);

         Data.map((element)=>{
           console.log("list",element);
        })
        
        //It finds the first object that matches given condition
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
       
      <Fragment>
            <nav>
                <ul>
                   <li>
                        <Link to="/">Home</Link> 
                                                                    
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact</Link>
                    </li>
                    
                </ul>
           </nav>
       </Fragment>
   );
    
}

export default Menu;


