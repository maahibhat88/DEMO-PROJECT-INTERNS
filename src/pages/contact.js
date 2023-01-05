import { Fragment } from "react";

function Contact(){
    return(
        <>
         <div className="container mt-4 scrollto">
             <div className="row">
               <div className="col-6" >
               <div className="hero-container "><h3 className="text-success">Contact Info</h3>
                      <hr/>

                      <div className="row">
                        <strong>Address:</strong><br className="row"/>
                        <dd className="list-inline-item ">Jawahar Nagar Srinagar kashmir.</dd>
                        <dd className="list-inline-item ">Pin-Code : 190008</dd>
                        <dd className="list-inline-item ">Landmark: Opposite JK Bank</dd>
                     </div>
<br/>
                     <strong className="text-success">Write feedback:</strong>
                     <textarea  class="form-control form-control rows=5  " placeholder="Message"/>
                     <button type="submit" class="btn btn-success mx-0 my-3">Send</button>
                 </div>     
                </div>
                <div className="col-6">
                <div className="hero-container "><h3 className="text-success">Map Info</h3>
                      <hr/>
                      <img src='https://th.bing.com/th/id/R.77cf1f6c8a59750ea178f235acb89e3e?rik=YwpGmJQa0sAYVA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fWorld-map-wallpaper-HD-download.jpg&ehk=7qmmkw6P%2faXKcvQerDzoxwRpzh%2flqHBtSV4J%2bJpKSE0%3d&risl=&pid=ImgRaw&r=0' className="rounded mx-auto img-fluid"/>
                      </div>
                    
                </div>
              </div>      



           </div>     
       </>
   );
}
export default Contact;