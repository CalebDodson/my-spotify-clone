import { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

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
        </Routes>
      </main>
    </div>
  )
}

export default App;
