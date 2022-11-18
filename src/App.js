import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Videos from './components/Videos';
import About from './components/About';
import Triane from './Programers/Triane';
import Shaik from './Programers/Shaik';

function App() {
  const [title, setTitle] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  let { id } = useParams();
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="Shaik" element={<Shaik />} />
          <Route path="Triane" element={<Triane />} />
          <Route path="/Videos/:id" element={<Videos videos={videos} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
