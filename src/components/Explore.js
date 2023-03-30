import axios from "axios";
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';

//import React from 'react';

function Explore() {
      const [data,setData] = useState({});
     //const [formData,setFormData] = useState({ name : "" , email : "" });
      // https://jsonplaceholder.typicode.com/posts
   
      const getData = () => {
          axios.get('http://localhost:8080/posts').then(res => {
            
              if(res){
                  setData(res.data.data);
              }
              else{
                  console.log("error occured");
              }
          }); 
      };

      // const formHandler = (e) => {
      //       console.log("Event ",e);
      //       e.preventDefault();
      //   };
    
    
      //   const inputHandler = (e) => {
      //       console.log("Event data", e.target.name, " - ",e.target.value);
      //       setFormData( { ...formData, [e.target.name] : e.target.value} );
      //   }
    
  
      
  return (
     <> 
     <div className="text-center mt-5">
      <button onClick={getData}>Get Data</button>

{/* <form onSubmit={(e) => { formHandler(e) }}>
    <div>
        <label>Name</label><br/>
        <input type="text" name="name" id="name" onChange={inputHandler} />
    </div>
    <div>
        <label>Email</label><br/>
        <input type="text" name="email" id="email" onChange={inputHandler}/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

<div>
  <h3>Form Values in a state</h3>
    Name: { formData.name } 
     <br/>
    Email: { formData.email }
</div> */}
<div>
            <Table className="container-fluid mt-3">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>post</th>
                           
                        </tr>
                    </thead>
                {
                    data && data.length ? data.map(item => {
                        return (

                                <tbody>
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.name} </td>
                                        <td> {item.post} </td>
                                       
                                    </tr>
                                </tbody>
                        )
                    }) : null
                }
                </Table>
            </div>
            </div>
    </>
         
      )
}
export default Explore; 