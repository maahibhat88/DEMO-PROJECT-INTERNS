import './App.css';
import Menu from './components/menu';


function App() {
  let name="react";
  //let student="rasheeqa";
  let data=[
    {id:1 ,name:"home"},
    {id:2 ,name:"About"},
    {id:3,name:"Contact"},
    {id:3,name:"About"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        
        
            <Menu Data={data} name={name}/>
        <p>
          Hi Folks! we have started our internship learning project
        </p>
       
      </header>
    </div>
  );
}

export default App;
