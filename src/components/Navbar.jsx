import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import homeIcon from '../assets/homeIcon.png'
import logoIcon1 from '../assets/logoIcon1.png'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <nav id="navbar">
        <Link to="/"><img src={logoIcon1} alt="logo icon" /></Link>
        <Link to="/"><img src={homeIcon} alt="home icon" /></Link>
        <form>
            <div className="searchContainer">
                <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                <input 
                    type="text"
                    className="search"
                    placeholder="What do you want to play?"
                />
            </div>
        </form>
        <ul>
            <li>
                <Link 
                    to="/signup"
                    className="button"
                    style={{ color: "white" }}
                >
                    Sign up
                </Link>
            </li>
            <li>
                <Link 
                    to="/login" 
                    className="button white"
                >
                    Log in
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;