import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Contact (props) {
    let data =  null;
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        console.log("Data ",res.data);
        data = res.data;
    })
    return(
        
        <>
        <h3>Contact Us</h3>
    
    </> 
    )
  
};


export default Contact;