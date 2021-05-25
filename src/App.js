import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './Footer';
import MyJumbo from './components/MyJumbo';

function App() {
  return (
    <>
    <div className="App">
      <Navigation/>
      <MyJumbo/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
