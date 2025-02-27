import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logoIcon.png'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <div id="loginComponent">
        <Link to="/"><img src={logoIcon} alt="logo icon" /></Link>
        <form>
            <label>
                Email or Username
                <input 
                    type="text"
                    placeholder="Email or Username"
                    className="formInput"
                />
            </label>
            <input 
                type="submit"
                value="Continue"
                className="button green"
            />
        </form>
        <div>
            Don't have an account? <Link to="/signup" style={{color: "white"}}>Sign up for Spotify</Link>
        </div>
    </div>
  )
}

export default Login;