 import './footer.css';
 import { Link, NavLink } from 'react-router-dom';
 
function Footer(){
    return(
        <>
<section class="container-fluid footer text-center text-black">
  <div class="mb-4">
  <div class="container p-4">
     
      <div class='row text-left line'>
      <div class='col-4 text-left'><p><b>Kashmir Travels</b></p>
      <p><b>Contact: 992929292909</b></p>
      </div>

      <div class='col-4 '>
      <Link class=' text-dark text-bold' to='/App'><b class='bullet'>Home</b></Link><br/>
      <Link class=' text-dark' to='/about'><b>About</b></Link><br/>
      <Link class=' text-dark' to='/places'><b>Places</b></Link>
      </div>

      <div class='col-4 '>
      <form>
    <div class="mb-3 mt-3">
     <h5>Any Queries</h5>
      <textarea class="form-control" rows="1" id="comment" name="text"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
      </div>
      </div>
  </div>

  <div class='container-fluid pt-4 pb-4 bg-secondary'>
  <h5>
       Kashmir Travels |  © 2023 Copyright:
      </h5>
  </div>

  </div>
 
</section>
</>
);
}

export default Footer;