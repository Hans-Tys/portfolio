import './index.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
