import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedCard from './components/FeaturedCard'
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <FeaturedCard />
      <ContactForm/>
    </div>
  );
}

export default App;
