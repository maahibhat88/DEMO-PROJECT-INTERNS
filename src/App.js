import './App.css';
import Menu from './components/menu'


const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  let menuItems = [ { id:1, name : "Home", isActive : true },
                    { id:2, name : "About", isActive : false },
                    { id:3, name : "Contact Us", isActive : false }
                  ];
  let name ="Muzaffar Ahmad";

  return (
    <div className="App">
      <header className="App-header">
        <Menu  name={name} menuList={menuItems}/>
        <p>
          Hi Folks! we have started our internship learning project
        </p>
        <p>Welcome to muzaffar's code</p>
      </header>
    </div>
  );
}

export default App;
