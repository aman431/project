import logo from './logo.svg';
import './App.css';
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
