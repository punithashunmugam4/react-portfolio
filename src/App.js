import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='education' element={<Education/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
