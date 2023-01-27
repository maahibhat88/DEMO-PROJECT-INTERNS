import './App.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  const history = useHistory();

  const formHandler = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
// http://localhost:8080/getPosts?token=eyJhbGciOiJIUzI1NiJ9.aXJ0aXFhQGdtYWlsLmNvbQ.OsF_rADIKi3yhVitP4_8URBvFuTPDxAfOEEsBB-cXDE
    let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" } };
    axios.post("http://localhost:8080/loginUser",{ email : email , password : password }, config).then(resp => {
        console.log("res" ,resp.data);
        let res = resp.data;
        if(!res.error && res.status == 200){
            // return <Redirect to="/" />;
            localStorage.setItem("user",JSON.stringify(res.data));
            setTimeout(()=>{
              history.push("/");
            },500)
        }
        else{
            alert(res.message);
        }

    },(err) => {

    })
    
  }

  return (
    <>
        <h1>Please Login</h1>
        <form onSubmit={(e)=>{ formHandler(e) }}>
          <div>
            <input name="email" type="text" placeholder='Enter Email' />  <br/>
          </div>
          <div>
            <input name="password" type="text" placeholder='Enter Password' />  <br/>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>          
        </form>
    </>
  );
}
