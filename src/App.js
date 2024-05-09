import logo from './logo.svg';
import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Resume from './containers/resume';
import NavBar from './components/navBar';
import {Routes,Route} from 'react-router-dom';
// import particles from './utils.js/particles';

function App() {
    return (
    <div className="App">
      
      <NavBar/>
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/about" element ={<About/>}/>
        <Route index path="/resume" element={<Resume/>}/>
        <Route path="/skills" element={</*s*/Skills/>}/>
        <Route index path="/portfolio" element ={<Portfolio/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
