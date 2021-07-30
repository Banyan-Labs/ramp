import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Blurb from './components/Blurb/Blurb';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      Hello Ramp Team
      <Blurb/>
     <Footer />
      <ContactForm/> 
    </div>
  );
}

export default App;
