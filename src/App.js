import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import About from './About';
import Skill from './Skill';
import Project from './Project';
// import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
  <div>
  <Header/>
  <About/>
  <Skill/>
  <Project/>
  {/* <Resume/> */}
  <Contact/>
  <Footer/>
  </div>

  );
}

export default App;
