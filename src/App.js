import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import Logo from './images/rock-logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import MyJumbo from './components/MyJumbo';


function App() {
  return (
    <>
    <div className="App">
      <AppNavbar logo={true} logoSrc={Logo} name='Arthur Dent' />
      <MyJumbo/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
