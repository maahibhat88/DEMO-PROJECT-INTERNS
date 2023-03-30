import React from "react";
//import { Redirect } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
function Contact(){
  const formHandler = (e) => {
    e.preventDefault();
    console.log("e",e.target[0].value);
    let username = e.target[0].value;
    console.log(username);
    let config = { 'headers' : { 'Content-Type' : 'application/json' } };
    const response = axios.post("http://localhost:8080/users",{ username : username });
    console.log("Response ",response);
  }
    
    
    return (
        <>
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

                <form  onSubmit ={(e)=>{ formHandler(e) }} className="col 6 mt-5 pt-5 ">
                <input type="text" name='username' class="form-control form-control-lg p-3 m-4 border-success" placeholder="Name"/>
                {/* <input type="text" class="form-control form-control-lg p-3 m-4 border-success" placeholder="Email"/>
                <textarea  class="form-control form-control rows=5 p-3 m-4 border-success" placeholder="Message"/> */}
                <button type="submit" class="btn btn-success btn-lg mx-5">Submit</button>   
                        
                </form>

             
            </div>
          </div>
    </div>
            

            
                
     <Footer/>          
   </>   
    );
}
export default Contact;