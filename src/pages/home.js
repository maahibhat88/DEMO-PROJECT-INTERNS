import React from "react";


function Home(){    
    return(
    <>
         <div className="container mt-4 scrollto">
            <div className="row">
               <div className="col-6" >
                    <div className="hero-container "><h1 className="text-#333">UI/UX Designers</h1>
                   <hr/><h2 className="text-#333 p">We are team of talented designers making websites </h2>
                    <p className="btn btn-success btn-lg btn-get-started mt-4">Get Started</p>
                    </div>                
               </div>  
               <div className="col-6  m-6 p-4" >
                <img src='https://th.bing.com/th/id/OIP.IghcXspq-cPCtaBiAFQktAHaE7?pid=ImgDet&w=710&h=473&rs=1' className='rounded mx-auto img-fluid ' ></img>
               </div>   
            </div>
            <hr className='m-3'/>
                        <div className="row p-3 m-3  bg-dark">
            <div className="col-md-12 " >
               <p className="hero-container ">
               <h1 className="text-white text-center p-3 ">Call To Action</h1>
               <p className="text-center text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p className="btn btn-success btn-lg btn-get-started mt-4 rounded p-9 
               d-flex align-items-center justify-content-center">Call</p>
               </p>
            </div>                 
            </div>     
         </div>
    </>
    );

}
export default Home;