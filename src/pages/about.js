function About(){
    return(
        <>
        <div className="container mt-4 scrollto">
            <div className="row">
               <div className="col-6" >
                      <div className="hero-container "><h5 className="text-success">OUR PRODUCTS</h5>
                      <hr/>
                      <div className="row">
                            <div className="col-6 p-3">
                            <img src='https://cdn.dribbble.com/users/720472/screenshots/2069636/ux_design.jpg' className="rounded mx-auto img-fluid"/>
                            </div>
                            <div className="col-6 p-3">
                            <img src='https://cdn.dribbble.com/users/25514/screenshots/14687187/iot_app_ui_design_2x.png' className="rounded mx-auto img-fluid"/>
                            </div>
                         </div>
                      <div className="row">
                            <div className="col-6 p-3">
                            <img src='https://th.bing.com/th/id/OIP.nmQDA55Nq6WtzyyfS_cVPgHaFj?pid=ImgDet&rs=1' className="rounded mx-auto img-fluid"/>
                            </div>
                            <div className="col-6 p-3">
                            <img src='https://th.bing.com/th/id/OIP.3F4LxCqyxru0onLBUC6QpgHaFj?pid=ImgDet&rs=1' className="rounded mx-auto img-fluid"/>
                            </div>
                         </div>
                      </div>
                </div>
                <div className="col-6" >
                  <div className="hero-container "><h5 className="text-success">OUR FEATURES</h5>
                      <hr/>
                       <dl className='row'>
                       <dd className="list-inline-item "> <strong>✔ Enhanced Customer’s Satisfaction & Accelerate ROI</strong ></dd>
                       <dd className="list-inline-item"><strong> ✔ Conserves Time And Cost</strong></dd>
                       <dd className="list-inline-item"> <strong>✔ UI/UX Design Boosts Your Brand </strong></dd>
                       <dd className="list-inline-item"> <strong>✔ Our team at Reliqus Consulting works exclusively to provide UI/UX designs for mobile applications yet make it commendable for you and your clients. We understand our customers very well, and never make them regret working with us </strong></dd>
                      </dl>
                      <hr/>
                      </div>
                      <div className="p-1"><h5 className="text-success">ABOUT</h5>UX designers are generally involved in the earlier phases of a product design since they need to design the flow of activities that take place when a user needs to solve a problem. This involves analytic and project management activities.

Later, a UI designer builds on the aesthetics and interactions based on the models provided by the UX designer.

Given this, it is safe to state that UX and UI go hand in hand. And while there are instances when the same person does both, one design principle cannot exist without the other.</div>
                 </div>
                 
            </div>
        </div>    
        </>
    );
}
export default About;