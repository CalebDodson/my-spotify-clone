import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Popular() {
  const [count, setCount] = useState(0)

  return (
    <div id="popularComponent">
        <h2>Popular artists</h2>
    </div>
  )
}

export default Popular;