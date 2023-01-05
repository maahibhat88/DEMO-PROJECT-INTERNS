import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import natureHome from "../natureHome.jpg";


const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  return (
    <>  
    <section class="breadcrumb fluid pt-3">
      <div class='container p-4 bg-success'>
        <h1 class='text-center text-black'>We are on the home page</h1>
        <p class='text-center text-black'>
          Hi Folks! we have started our internship learning project
        </p>
        </div>
    </section>    
      
<section>
   <div class='container pb-4'>
      <div class='row my-10'>
               <div class='col-4'>
                  <img  src={natureHome} alt="New York" width='400px' height='500px'/>
               </div>
               <div class='col-4 text-right'>
                  <p>Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components.</p>
                  <img  src={natureHome} alt="New York" width='400px' height='340px'/>
               </div>
               <div class='col-4 text-center'>
                  <form class='border p-4'>
                      <h1>Resgister Here</h1>
                      <input type="text" class="form-control my-4 required" placeholder="Enter Fisrt Name" name="firstname" required />
                      <input type="text" class="form-control my-4 required" placeholder="Enter Last Name" name="lastname"/>
                      <input type="text" class="form-control my-4 required" placeholder="Enter User Name" name="username"/>
                      <input type="text" class="form-control my-4 required" placeholder="Enter email" name="email"/>
                      <input type="password" class="form-control my-4 required" placeholder="Enter password" name="pswd"/>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
               </div>
      </div>
   </div>   
</section>

    </>
  );
}

export default App;
