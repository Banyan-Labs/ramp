import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <ContactForm/>

    </div>
  );
}

export default App;
