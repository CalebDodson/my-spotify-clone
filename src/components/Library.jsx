import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Library() {
  const [count, setCount] = useState(0)

  return (
    <div id="libraryComponent">
        <h2>Your library</h2>
    </div>
  )
}

export default Library;