import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm';
import Blurb from './components/Blurb/Blurb';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm/>
      <Blurb/>
    </div>
  );
}

export default App;
