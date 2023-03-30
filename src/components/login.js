//import axios from "axios";
import  React,{ useState  } from "react";
import {useHistory} from 'react-router-dom';


const Login=()=>{
      const history = useHistory();

  const[inpval,setInpval]=useState({
    email:"",
    password:""

  }) 
  console.log(inpval); 
   //const handlelogin = () => {}
  //         e.preventDefault();
  //    axios.post("https://demo5076275.mockable.io/srinagar",{
  //      Email:values.Email,
  //    Password: values.Password,
  //    }).then(response => {
  //     localStorage.setItem("token",response.data.token);
  //     Navigate("/home");
        
  //     }).catch(error => {
  //     console.log("error",error)
  //    }
    //  );
const getdata=(e)=>{
  const {value,name}= e.target;
  //console.log(value,name);
  setInpval(()=>{
    return{
      ...inpval,
      [name]:value
    }
  })
}
const [data,setData]=useState([])
   const addData=(e)=>{
    e.preventDefault();
    const getuserArr=localStorage.getItem("userinfo");
    console.log(getuserArr);
    //console.log(inpval);
    const {email,password}=inpval;
    //validation
    if(email===""){
      alert("emailis required");
    }else if(!email.includes("@")){
      alert("plz enter valid email address");
    }else if(password===""){
      alert("password is required");
    }else{
       // console.log("data is added successfully");
       // localStorage.setItem("userinfo",JSON.stringify([...data,inpval]));
        if(getuserArr && getuserArr.length){
            const userdata=JSON.parse(getuserArr);
           const userlogin=userdata.filter((el,i)=>{
             return el.email ===email && el.password===password
          }
          )
          if(userlogin.length===0)
          {
            alert("invalid details");
          }else{
               console.log("user login successfully");
               history.push('/home');
          }
          
        }
    }
   }
    return(
        <>
        <div className="container m-5 p-4 align-item-center">
        <div className="col-md-6 align-items-center">
        <form className='container bg-secondary mt-5 p-5 rounded-4 '>
        <h3 className="text-dark text-center">Sign In</h3><hr className="text-white"/>
           <div className="mt-5">
          <label>Email address</label>
             <input
               type="email"
               name="email"
               className="form-control"
               placeholder="Enter email"
               onChange={getdata}
             />
            </div>
        <div className="mb-3">
        <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={getdata}
             />
        </div>
       
        <div className="grid">
        <button  onClick={addData}  className="btn btn-primary btn-lg mt-4 rounded p-9 
               d-flex align-items-center justify-content-center">
          Login
        </button>
        </div> 
        <div className=" mx-6 mt-4 pt-5 text-center text-dark">
        <p>Not a member? <a href="#!">Register</a></p>
          </div>     
      </form>
      </div> 
      </div> 
    </>
    );
}

export default Login;