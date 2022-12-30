import  './menu.css'

function Menu(props) {
   // console.log("Props of a functional component are : ",props)
    // destructuring
    let {menuList, name} = props;
   // console.log("Destructured Menulist ",menuList);


    // for(let i = 0; i<menuList.length; i++){
    //     console.log("Menu id  ",menuList[i]);
    // }

    // const name = () => {

    // }

    // name()

    menuList.map((element)=>{
        console.log("Menu ",element);
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


