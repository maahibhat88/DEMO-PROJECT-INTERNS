import nature2 from '../nature2.jpg'
import natureHome from '../natureHome.jpg'
import carasoul1 from "../carasoul1.jpg";
import './about.css'
import Accordion from 'react-bootstrap/Accordion';
import Menu from './menu';
import Footer from "../components/footer";

function About (){
    return(
        <>
        <Menu/>
       <div class="background-image pb-4">
       <div class="container-fluid ">
           <ul class="breadcrumb ">
               <li><a class='text-center' href="/">Home/</a></li>
               <li><a class='text-center' href="/about">About</a></li>
           </ul>
       </div>
   </div>   
<section>
               <div class='container pb-4 pt-4'>
               <h3>About Us</h3>

               <div class='row  pb-4'>
               <div class='col-4 pt-4'>
               <img src={nature2} class='shadow-lg rounded' width='400px'/>
               </div>
               <div class='col-8 pt-4'>
               <h4>Kashmir</h4>
               <p>The Kashmir region is predominantly mountainous, with deep, narrow valleys and high, barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes the basin of the upper Jhelum River and contains the city of Srinagar. Jammu and the vale lie in Indian-administered Jammu and Kashmir, while the Punch lowlands are largely in Azad Kashmir.
               </p>
               </div>
               </div>

               <div class='row pb-4'>
               <div class='col-8'>
               <h4>Jammu</h4>
               <p>Jammu is mentioned by name in the chronicles of Timur (r. 1370–1406), who invaded Delhi in 1398 and returned to Samarkand via Jammu. In the Mughal chronicles of Babur in the early 16th century, Jammu is mentioned as a powerful state in the Punjab hills. It is said to have been ruled by Manhas Rajputs. Emperor Akbar brought the hill kingdoms of the region under Mughal suzerainty, but the kings enjoyed considerable political autonomy. In addition to Jammu, other kingdoms of the region such as Kishtwar and Rajauri were also prominently mentioned. It is evident that the Mughal empire treated these hill chiefs as allies and partners in the empir
               </p>
               </div>
               <div class='col-4'>
               <img src={carasoul1} class='shadow-lg rounded' width='400px' height='250px'/>
               </div>
               </div>

               <div class='row pb-4'>
               <div class='col-4'>
               <img src={natureHome} class='shadow-lg rounded' width='400px'/>
               </div>
               <div class='col-8'>
               <h4>Ladakh</h4>
               <p>Ladakh is a region administered by India as a union territory which constitutes a part of the larger Kashmir region and has been the subject of dispute between India, Pakistan, and China since 1947.
               adakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.
               </p>
               </div>
               </div>
    </div>
  <div class='container pb-4'>
  <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Kashmir</Accordion.Header>
        <Accordion.Body>
        The Kashmir region is predominantly mountainous, with deep, narrow valleys and high, barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes the basin of the upper Jhelum River and contains the city of Srinagar. Jammu and the vale lie in Indian-administered Jammu and Kashmir, while the Punch lowlands are largely in Azad Kashmir.
        </Accordion.Body>
      </Accordion.Item >
      <Accordion.Item eventKey="1">
        <Accordion.Header>Jammu</Accordion.Header>
        <Accordion.Body>
        Jammu is mentioned by name in the chronicles of Timur (r. 1370–1406), who invaded Delhi in 1398 and returned to Samarkand via Jammu. In the Mughal chronicles of Babur in the early 16th century, Jammu is mentioned as a powerful state in the Punjab hills. It is said to have been ruled by Manhas Rajputs. Emperor Akbar brought the hill kingdoms of the region under Mughal suzerainty, but the kings enjoyed considerable political autonomy. In addition to Jammu, other kingdoms of the region such as Kishtwar and Rajauri were also prominently mentioned. It is evident that the Mughal empire treated these hill chiefs as allies and partners in the empir
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Ladakh</Accordion.Header>
        <Accordion.Body>
        Ladakh is a region administered by India as a union territory which constitutes a part of the larger Kashmir region and has been the subject of dispute between India, Pakistan, and China since 1947.
        Be fearless in the pursuit of what sets your soul on fire.
        Blessed are the curious for they shall have adventures.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</section>
<Footer/>
        </>
    )
};


export default About;

// this is my commit //