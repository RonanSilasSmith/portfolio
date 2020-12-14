import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'



function App() {
  const [currentSection, setSection] = useState("About");

  return (
    <div className="App">
      <Nav
        setSection={setSection}
      ></Nav>
      {currentSection === "About"
        && <About />}
      {currentSection === "Contact"
        && <ContactForm />}
      {currentSection === "Portfolio"
        && <Portfolio />}
      {currentSection === "Resume"
        && <Resume />}
      <Footer></Footer>
    </div>
  );
}

export default App;
