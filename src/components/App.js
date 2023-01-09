import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import natureHome from "../natureHome.jpg";
import nature2 from "../nature2.jpg";
import carasoul1 from "../carasoul1.jpg";
import carasoul2 from "../carasoul2.jpg";
import carasoul3 from "../carasoul3.jpg";
import Menu from '../components/menu';
import Footer from '../components/footer';


const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  return (
    <>  
   {
     /* <section class="breadcrumb fluid pt-3">
      <div class='container p-4 bg-success'>
        <h1 class='text-center text-black'>We are on the home page</h1>
        <p class='text-center text-black'>
          Hi Folks! we have started our internship learning project
        </p>
        </div>
    </section>  */
   }   
 <Menu/>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block" 
          src={carasoul1} width='1600px'
          height='500px'
          alt="First slide"
        />
        <Carousel.Caption >
          <h5>Kashmir</h5>
          <p> Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={carasoul2} width='1600px'
          height='500px'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Jammu</h5>
          <p>Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={carasoul3} width='1600px'
          height='500px'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Ladakh</h5>
          <p>
          Be fearless in the pursuit of what sets your soul on fire. · Blessed are the curious for they shall have adventures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
<section>
   <div class='container pt-5 pb-4'>
      <div class='row my-10'>
               <div class='col-4'>
                  <img  src={natureHome} alt="New York" width='400px' height='500px'/>
               </div>
               <div class='col-4 text-right'>
                  <p><b>Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components.</b></p>
                  <img  src={nature2} alt="New York" width='400px' height='340px'/>
               </div>
               <div class='col-4 text-center'>
                  <form class='border bg-success p-4'>
                      <h1>Resgister Here</h1>
                      <input type="text" class="form-control my-4 required" placeholder="Enter Fisrt Name" name="firstname" required />
                      <input type="text" class="form-control my-4 required" placeholder="Enter Last Name" name="lastname"/>
                      <input type="text" class="form-control my-4 required" placeholder="Enter User Name" name="username"/>
                      <input type="text" class="form-control my-4 required" placeholder="Enter email" name="email"/>
                      <input type="password" class="form-control my-4 required" placeholder="Enter password" name="pswd"/>
                      <button type="submit" class="btn btn-warning">Submit</button>
                  </form>
               </div>
      </div>
   </div>   
</section>


<Footer/>
    </>
  );
}

export default App;
