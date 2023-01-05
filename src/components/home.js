import React from "react";

function Home(){
    return (
        <>
    <div className="container-fluid  mt-4 my-4 border">
    
        <div className="row">
        <div className="col-8 bg-white text-muted mt-9 pt-5">
         <h1 className="text-center"> ADVENTURE MATTERS</h1>
             <h3 className="text-center text-muted mt-4"> Preventing exploitation through ethical and responsive tourism.
            </h3> 
            <h3 className="text-center text-muted"> Stopping Human Exploitation by creating jobs.</h3>
            <p className="btn btn-success btn-lg btn-get-started mt-5 mx-5 justify-content">Find your adventure</p>
         </div>
         <div className="col-4  bg-success text-muted mt-5 pt-3">
         <img src='https://cdn5.vectorstock.com/i/1000x1000/84/34/travel-concept-traveling-background-vector-20328434.jpg' className='img-fluid'  alt='alter' />
         </div>
         </div>  
         <div className="row mt-4">
            <div className="col-4 text-center  text-muted">
                <h3 className="text-success">Best Prices</h3>
                <h5>Best priced deals for limited time bringing maximum value and savings to you</h5>
               
            </div>
            <div className="col-4 text-center text-muted">
                <h3 className="text-success">24x7 Conceirge</h3>
                <h5>Get 24x7 service on ground through personal concierge while you travel</h5>
            </div>
            <div className="col-4  text-center  text-muted">
                <h3 className="text-success">Free Cancellation</h3>
                <h5>Get Free Cancellation and Date Change upto 48 hours before travel</h5>
            </div>
         </div>
    
  
        </div>  
         
        </>
    );
}
export default Home;