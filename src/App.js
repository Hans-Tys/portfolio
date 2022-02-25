import './index.css'
import Navbar from './Components/Navbar'
import About from './Components/About';
import Projects from './Components/Projects';

function App() {

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Prortfolio</h1>
      </header>
      <About />
      <Projects />
    </div>
  );
}

export default App;
