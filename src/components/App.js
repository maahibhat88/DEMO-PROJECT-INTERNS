import './App.css';

const seeValue = (event) => { 
  console.log("event ",event);
  document.getElementById("demo").innerText = event.target.value;
}


function App() {

  return (
    <>
        <h1>We are on the home page</h1>
        <p>
          Hi Folks! we have started our internship learning project
        </p>
        <input onChange={seeValue} />  
        <span>We will see the input value here : <span id="demo"></span> </span>
    </>
  );
}

export default App;
