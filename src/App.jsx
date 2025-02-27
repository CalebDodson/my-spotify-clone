import { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PopularArtists from './components/PopularArtists';
import PopularRadio from './components/PopularRadio';
import FeaturedCharts from './components/FeaturedCharts';
import PopularAlbumsAndSingles from './components/popularAlbumsAndSingles';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  /*Hide navbar when on login and sign up pages*/
  const hide = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hide && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={!hide && <Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/popular-artists" element={<PopularArtists />} />
          <Route path="/popular-albums-and-singles" element={<PopularAlbumsAndSingles />} />
          <Route path="/featured-charts" element={<FeaturedCharts />} />
          <Route path="/popular-radio" element={<PopularRadio  />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
