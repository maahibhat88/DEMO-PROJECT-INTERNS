import React from "react";
//import { Redirect } from "react-router-dom";
import Footer from './footer';
import {AccordionItem,AccordionHeader,AccordionBody,UncontrolledAccordion} from "reactstrap";

function About(){

     
   
    return (
        <>
        <UncontrolledAccordion
  defaultOpen={[
    '1',
    '2'
  ]}
  stayOpen
>
  <AccordionItem className="p-2">
    <AccordionHeader targetId="1">
      <h2>ABOUT KASHMIR</h2>
    </AccordionHeader>
    <AccordionBody accordionId="1">
     <h4> Jammu and Kashmir is the northern most state in India. The state is Asia's 'Heaven on Earth', rich in premium cash crops like walnuts and saffron, blessed with jaw-dropping natural beauty all year long. With the Himalayas lining it from north-east side, there are many valleys formed such as the Kashmir Valley, Sindh Valley, Lidder Valley, Poonch Valley, Tawi and Chenab Valleys.<br/>The state's best destinations for Kashmir tourism such as Srinagar, Gulmarg, Sonamarg and Pahalgam, best tourist spots such as Shalimar Bagh, Chasme Shahi and Pari Mahal, important lakes such as Dal lake, Wular lake, Manasbal lake - all lie within the Kashmir Valley.<br/>The traditional dress of the people here is Pheran & Poots, which is worn by both men and women. Along with this, Mughal style turbans, headgear, taranga belt of pashmina & coloured scarf are also worn by the people. The principal languages spoken are Kashmiri & Urdu.</h4>
    </AccordionBody>
  </AccordionItem>
  
    <AccordionItem className="p-2">
    <AccordionHeader targetId="2">
      <h2>ABOUT JAMMU</h2>
    </AccordionHeader>
    <AccordionBody accordionId="2"> 
    <h4>The lifestyle of the Jammu people is not very different from the rest of the people of India. They are deeply religious, and value their culture heritage a lot. Religion plays a central role in their lives, and regularly visit the numerous temples scattered around the city.<br/>
    Both men & women can be seen in modern as well as traditional attire. The majority of the Jammu people speak Dogri, Gojri, Pahadi, Kashmiri, Hindi, Punjabi & Urdu.</h4>
    </AccordionBody>
    </AccordionItem>
   
      
</UncontrolledAccordion>
<Footer/>
        </>              
        
    );
}
export default About;