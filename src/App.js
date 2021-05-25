import './App.css';
import AppNavbar from './components/AppNavbar'
import Logo from './images/rock-logo.svg'

function App() {
  return (
    <div className="App">
      <AppNavbar logo={true} logoSrc={Logo} name='Arthur Dent' />
    </div>
  );
}

export default App;
