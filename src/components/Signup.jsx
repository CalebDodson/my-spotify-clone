import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logoIcon.png'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <div id="signupComponent">
        <Link to="/"><img src={logoIcon} alt="logo icon" /></Link>
        <form>
            <label>
                Email address
                <input 
                    type="text"
                    placeholder="name@domain.com"
                />
            </label>
            <label>
                Password
                <input 
                    type="text"
                    placeholder="password"
                />
            </label>
            <label>
                Name
                <input 
                    type="text"
                    placeholder="This name will appear on your profile"
                />
            </label>
            <input 
                type="submit"
                value="Sign up"
            />
        </form>
    </div>
  )
}

export default Signup;