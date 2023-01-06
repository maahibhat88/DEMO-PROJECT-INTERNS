
function About (){
    let data =  null;
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        console.log("Data ",res.data);
        data = res.data;
    })
    return(
        <>
         <section class="breadcrumb fluid pt-3">
      <div class='container p-4 bg-success'>
        <h1 class='text-center text-black'>We are on the About Us page</h1>
        <p class='text-center text-black'>
        Grow Your Business with High-quality,
        </p>
        </div>
    </section>   
           <section>
               <div class='container pb-4'>
               <h3>About Us</h3>

               <div class='row'>
               <div class='col-12'>
               <p>The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               </p>
               </div>
               </div>

               <h3>Our Objective</h3>
               <div class='row bg-info'>
               <div class='col-12'>
               <p class='color:pink'>The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               The platform begins by analyzing your website’s requirements and target audience.
               </p>
               </div>
               </div>
               
<div class='row'>
<div class='col-12'>
               <form class='border p-4 my-4'>
    <div class="mb-3 mt-3">
     <h5>Send Us A Message:</h5>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" class="btn btn-warning">Submit</button>
  </form>
  </div>
  </div> 
  </div>
           </section>
        </>
    )
};


export default About;

// this is my commit //