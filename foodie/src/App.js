import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites'
import Everyday from './components/Everyday'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Everyday" element={<Everyday />} />
      </Routes>
    </Router>
  );
}
export default App;
