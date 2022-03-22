import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Pokedex from './Components/Pokedex';
import Designs from './Components/Designs';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="Designs" element={<Designs />} />
      </Routes>
    </div>
  );
}

export default App;
