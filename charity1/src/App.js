import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Startup from './Components/Startup';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/Startup' element={<Startup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
