import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Partners />
      <Contact />
    </main>
  );
}

export default App;
