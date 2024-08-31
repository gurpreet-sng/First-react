import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Contract from './pages/Contract';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Contract" element={<Contract />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
      
      </BrowserRouter>
        
        </div>
  );
}

export default App;

