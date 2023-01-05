import React from "react";

function Contact(){
    return (
        <div>
            <div className="container">
              <div className="row">
                <div className="col 6 mt-4 pt-5 ">
                    <h1>CONTACT US</h1>
            
                    <h1 className="pt-6 mt-5">Call  Us</h1>
                    <h4>+91 990645789</h4>
                
                    <h1 className="pt-6 mt-4">Location</h1>
                    <h4>12 Iqbal Lane Allouchi Bagh 190009</h4>
                
                    <h1 className="pt-6 mt-4">Business Hours</h1>
                    <h4>Mon-Fri --10am to 6pm, Sat-Sun --Closed</h4>
                    
                    </div>

                <div className="col 6 mt-4 pt-5">
                <input type="text" class="form-control form-control-lg p-3 m-4" placeholder="Name"/>
                <input type="text" class="form-control form-control-lg p-3 m-4" placeholder="Email"/>
                <textarea  class="form-control form-control rows=5 p-3 m-4" placeholder="Message"/>
                <button type="submit" class="btn btn-success btn-lg mx-5">Submit</button>   
                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>          
                </div>

             
            </div>
          </div>
    </div>
            

            
                
               
      
    );
}
export default Contact;