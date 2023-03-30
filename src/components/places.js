import Footer from './footer';
import {Card,CardBody,CardTitle,CardText,CardSubtitle,Button} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Places(){
        
            useEffect(()=>{
                getPlace();
        },[])
            const [place,setPlace] = useState([]);   
        const getPlace= async () => {
          try{
           const res=await axios.get('http://localhost:8080/places')
                    setPlace(res.data.url);          
          }
          catch(error){
            alert(error.msg);
          } 
        }    
    return(
        <>
     <div className='container-fluid'>
        <div className='row'>
          {
           place.map((i)=> (
            <div className='col-xl-2'>
           
              <Card key={i.id} className='m-4 bg-dark'
                style={{
                width: '15rem'
                }}>
                 <img className='m-2'
                   alt="Sample"
                   src= {i.url}
                 />
                 <CardBody>
                   <CardTitle tag="h5" className='text-warning'>
                     {i.title}
                   </CardTitle>
                   <CardSubtitle
                     className="mb-2 text-light"
                     tag="h6"
                   >{i.Subtitle}

                   </CardSubtitle>
                   <CardText className='text-light'>
                     {i.text}
                   </CardText>
                   <Button className='bg-warning text-dark'>
                     Know More
                   </Button>
                 </CardBody>
              </Card>
            </div>
             ) )
            }
         </div>
              
                
         </div>
       <Footer/>
        </>
     );
}
    
export default Places;
