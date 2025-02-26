import { useState } from 'react'
import { Router, Routes, Link } from 'react-router-dom'
import homeIcon from '../assets/homeIcon.png'
import logoIcon from '../assets/logoIcon.png'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <nav id="navbar">
        <Link to="/"><img src={logoIcon} alt="logo icon" /></Link>
        <Link to="/"><img src={homeIcon} alt="home icon" /></Link>
    <form>
        <input 
            type="text"
            className="search"
            placeholder="What do you want to play?"
        />
    </form>
    <ul>
        <li>
            <Link to="/signup">Sign up</Link>
        </li>
        <li>
            <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;