import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Video from './components/Video';
import About from './components/About';
import Triane from './Programers/Triane';
import Shaik from './Programers/Shaik';
import ListVideos from './components/ListVideos';
import PageNotFound from './404/PageNotFound';

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <Router>
      <Nav
        videos={videos}
        setVideos={setVideos}
        search={search}
        setSearch={setSearch}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home videos={videos} setVideos={setVideos} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="Shaik" element={<Shaik />} />
          <Route path="Triane" element={<Triane />} />
          <Route
            path="/video"
            element={
              <ListVideos
                videos={videos}
                setVideos={setVideos}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/video/:id" element={<Video videos={videos} />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
