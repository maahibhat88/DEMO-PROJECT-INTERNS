import  './menu.css'

    function Menu(props) {
        console.log("the value of props is:",props)
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
        console.log("filter",obj.id);  
       // console.log("filter",obj.name);
       })
          
      

    return(
       
      <div>
            <nav>
                <ul>
                   <li>
                        <a>Home1 </a> 
                                                                    
                    </li>
                    <li>
                        <a>About1 {name}</a>
                    </li>
                    <li>
                       <a>Contact Us</a>
                    </li>
                </ul>
           </nav>
       </div>
   );
    
}

export default Menu;


