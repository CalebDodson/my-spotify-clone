import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon1 from '../assets/logoIcon1.png'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <div id="signupComponent">
        <Link to="/"><img src={logoIcon1} alt="logo icon" /></Link>
        <h2>
            Sign up to start listening
        </h2>
        <form>
            <label>
                Email address
                <input 
                    type="text"
                    placeholder="name@domain.com"
                    className="formInput"
                />
            </label>
            <label>
                Password
                <input 
                    type="text"
                    placeholder="password"
                    className="formInput"
                />
            </label>
            <label>
                Name
                <input 
                    type="text"
                    placeholder="Your profile name"
                    className="formInput"
                />
            </label>
            <input 
                type="submit"
                value="Sign up"
                className="button green"
            />
        </form>
        <div>
            Already have an account? <Link to="/login" style={{color: "white"}}>Log in here</Link>.
        </div>
    </div>
  )
}

export default Signup;