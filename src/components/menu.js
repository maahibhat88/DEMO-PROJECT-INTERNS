import  './menu.css'

function Menu(props) {
   let {menuList, name} = props; 

    menuList.map((element)=>{
        console.log("Menu ",element);
    })

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
        <div>
            <nav>
                <ul>

                    {
                        menuList.map((i)=>{
                            return (
                                    <li key={i.id} className={ i.isActive && 'active'  }>
                                        <a id={i.id} href=""> 
                                            {i.name} 
                                        </a>
                                    </li>
                            )
                        })
                    }
                    {/* <li>
                        <a>About1 {name}</a>
                    </li>
                    <li>
                        <a>Contact Us {name}</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;

// props
// destructuring
// array or list method map
// conditional rendering  // short and conditional rendering


