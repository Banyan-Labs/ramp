import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import MyJumbo from './components/MyJumbo';

function App() {
  return (
    <>
    <div className="App">
      <MyJumbo/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
