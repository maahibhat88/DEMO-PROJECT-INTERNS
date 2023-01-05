//import './App.css';
import './components/style.css'



//import image from './images/image.jpg';

function App() {
  
  //const imge= new URL("./images/image.jpg",import.meta.url)
  let numbers=[
    {id:1,name:"irtiqa"},
    {id:2,name:"irtu"},
  ] 
   numbers.map((ev)=>{
    console.log(ev);
   })
  return (
    <h3>
    Hi Folks! we have started our internship learning project
 </h3>
   )
   }
export default App;
