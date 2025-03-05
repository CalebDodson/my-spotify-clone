import { useState } from 'react'
import { Link } from 'react-router-dom'
import Library from './Library';
import Popular from './Popular';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div id="homeComponent">
        <Library />
        <Popular />
    </div>
  )
}

export default Home;