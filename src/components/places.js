import axios from 'axios';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Menu from './menu';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nature2 from "../nature2.jpg";
import Footer from "../components/footer";



function Places (){

    const [data,setData] = useState({});
    const [formData,setFormData] = useState({ name : "" , email : "" });
    // https://jsonplaceholder.typicode.com/posts
    const getData = () => {
        axios.get('http://demo5966109.mockable.io/posts').then(res => {
            if(res){
                setData(res.data.data);
            }
        }); 
    };

    const formHandler = (e) => {
        console.log("Event ",e);
        e.preventDefault();
    };


    const inputHandler = (e) => {
        console.log("Event data", e.target.name, " - ",e.target.value);
        setFormData( { ...formData, [e.target.name] : e.target.value} );
    }



    return(
        <>
        <Menu/>
        <div class="background-image pb-4">
       <div class="container-fluid ">
           <ul class="breadcrumb ">
               <li><a class='text-center' href="/">Home/</a></li>
               <li><a class='text-center' href="/places">Places</a></li>
           </ul>
       </div>
   </div>   
        <div class='container p-4'>
        <div class='row'>
        <div class='col-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nature2} />
      <Card.Body>
        <Card.Title>Kashmir</Card.Title>
        <Card.Text>
        Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty. 
        </Card.Text>
        <Button variant="success" href='/App'>View</Button>
      </Card.Body>
    </Card>
    </div>
    <div class='col-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nature2} />
      <Card.Body>
        <Card.Title>Jammu</Card.Title>
        <Card.Text>
        What is special about Jammu and Kashmir?
        Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens.
        </Card.Text>
        <Button variant="success" href='/App'>View</Button>
      </Card.Body>
    </Card>
    </div>
    <div class='col-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nature2} />
      <Card.Body>
        <Card.Title>Ladakh</Card.Title>
        <Card.Text>
        Be fearless in the pursuit of what sets your soul on fire.
        Blessed are the curious for they shall have adventures.
        </Card.Text>
        <Button variant="success " href='/App'>View</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
           {/* <h1>Contact Us</h1>
            <button onClick={getData}>Get Data</button>

            <form onSubmit={(e) => { formHandler(e) }}>
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
            </div>

            <div>
            <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                {
                    data && data.length ? data.map(item => {
                        return (
                            
                                <tbody>
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.name} </td>
                                        <td> {item.email} </td>
                                        <td> {item.message} </td>
                                    </tr>
                                </tbody>
                        )
                    }) : null
                }
                </Table>
            </div> */}
<div class='container'>
            <div class='row'>
<div class='col-12'>
               <form class='border p-4 my-4'>
    <div class="mb-3 mt-3">
     <h5>Send Us A Message:</h5>
      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
  </div>
  </div> 
  </div> 
  <Footer/>
        </>
    )
};



export default Places;