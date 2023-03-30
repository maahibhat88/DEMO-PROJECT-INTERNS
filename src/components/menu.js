import  './menu.css'
import {NavLink} from 'react-router-dom';

    function Menu(props) {
        
        console.log("the value of props is:",props);
        let {Data}=props;
       // console.log("the destructed item:",Data);

        // Data.map((element)=>{
          // console.log("list",element);
        //})
        
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
              <nav className='navbar-expand-lg bg-info container-fluid '>
                <div className='row'>
                <div className="col-4 mt-3 bg-info text-dark">
                    <h2>KASHMIR TOURISM</h2>
                </div>

                <div className='col-6 bg-info text-lg-dark'>
                
               <ul>
                {
                   Data.map((i)=>{
                    return(
                     <li key={i.id}>
                    <NavLink exact to={i.path} className='text-dark text-lg' > 
                    {i.name} 
                   </NavLink>
                   </li>
                )
             })
            }
            </ul> 
                     
        </div>
        <div className='col-2'>
            <div className='row'>
                <div className='col-2 mt-3 pt-2'>
                    <div className="btn btn-white bg-white">
                    <NavLink to={'/'} className="text-info text-decoration-none">Login</NavLink>
                  </div>
                    </div>
                </div>
            </div>
        </div>
      
        </nav>
      
      </>
      )    
}
export default Menu;


