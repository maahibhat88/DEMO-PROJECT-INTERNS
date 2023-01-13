import './App.css';
import axios from "axios";

const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  const formHandler = (e) => {
    e.preventDefault();
    console.log("e",e.target[0].value);
    let username = e.target[0].value;

    // $.post("url",data,(out)=>{

    // })

    let config = { 'headers' : { 'Content-Type' : 'application/json' } };
    const response = axios.post("http://localhost:8080/users",{ username : username });
    console.log("Response ",response);
  }

  return (
    <>
        <h1>We are on the home page</h1>
        <p>
          Hi Folks! we have started our internship learning project
        </p>
        {/* <form action="http://localhost:8080/users" method="post"> */}
        <form onSubmit={(e)=>{ formHandler(e) }}>
          <div>
            <input onChange={seeValue}  name="username" type="text" placeholder='Enter First Name' />  <br/>
            <span>We will see the input value here : <span id="demo"></span> </span>
          </div>
          <div>
            <button type="submit">Click to see Get in Action</button>
          </div>

          {/* localhost:3000?firstName=Muzaffar */}

          
        </form>
    </>
  );
}

export default App;
