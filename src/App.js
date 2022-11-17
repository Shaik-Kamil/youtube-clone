import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Videos from './components/Videos';
import About from './components/About';
// import Search from './components/Search'
function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Videos/:id" element={<Videos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
