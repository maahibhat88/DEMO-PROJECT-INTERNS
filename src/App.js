import './App.css';
import Menu from './components/menu'


const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  let menuItems = [ { id:1, name : "Home"},
                    { id:2, name : "About"},
                    { id:3, name : "Contact Us"},
                    { id:4, name : "Contact Us"}
                  ];
  let name ="Muzaffar Ahmad";

  return (
    <div className="App">
      <header className="App-header">
        <Menu  name={name} menuList={menuItems}/>
        <p>
          Hi Folks! we have started our internship learning project
        </p>
<<<<<<< HEAD
        <input onChange={seeValue} />  
        <span>We will see the input value here : <span id="demo"></span> </span>
=======
        <p>Welcome to muzaffar's code</p>
>>>>>>> 2739628b5b39132420d5a7a059345dc2c1767de2
      </header>
    </div>
  );
}

export default App;
