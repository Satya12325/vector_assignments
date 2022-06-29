import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nvbar/Navbar';
import Faunds from './Components/Faunds/Faunds';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <div>

     <Faunds/>
     </div>

     <div style={{height: '300px'}}></div>
    </div>
  );
}

export default App;
