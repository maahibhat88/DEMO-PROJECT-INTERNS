import './App.css';


function App(props) {

  let auth = localStorage.getItem("user");
  if(!auth){
    props.history.push('/login');
  }

  return (
    <>
        <h1>Welcome to my application</h1>
    </>
  );
}

export default App;
