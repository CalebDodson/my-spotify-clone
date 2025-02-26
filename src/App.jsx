import { useState } from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
