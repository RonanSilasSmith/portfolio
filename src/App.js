import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <ContactForm/>
      <Portfolio/>
      <Resume/>
    </div>
  );
}

export default App;
