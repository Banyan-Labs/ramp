import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Jumbotron, Button} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
     <Navigation/>
     <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
           Welcome to our Ramp Team Project
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
