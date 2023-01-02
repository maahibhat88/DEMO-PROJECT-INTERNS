import './App.css';
import About from './components/about';
import Contact from './components/Contact Us';
import Menu from './components/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  
  return (
    
      <BrowserRouter>
       <Menu/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
 
   )
   }

export default App;
