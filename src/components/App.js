import './App.css';
import axios from "axios";


function App() {

  const formHandler = (e) => {
    e.preventDefault();
    console.log("e",e);
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    // $.post("url",data,(out)=>{

    // })

    let config = { 'headers' : { 'Content-Type' : 'application/json' } };
    const response = axios.post("http://localhost:8080/createUser",{ name : name, email : email , password : password });
    console.log("Response ",response);
  }

  return (
    <>
        <h1>We are on the Login Page</h1>
        {/* <p>
          Hi Folks! we have started our internship learning project
        </p> */}
        {/* <form action="http://localhost:8080/users" method="post"> */}
        <form onSubmit={(e)=>{ formHandler(e) }}>
          <div>
            <input name="name" type="text" placeholder='Enter Name' />  <br/>
          </div>
          <div>
            <input name="email" type="text" placeholder='Enter Email' />  <br/>
          </div>
          <div>
            <input name="password" type="text" placeholder='Enter Password' />  <br/>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>

          {/* localhost:3000?firstName=Muzaffar */}

          
        </form>
    </>
  );
}

export default App;
