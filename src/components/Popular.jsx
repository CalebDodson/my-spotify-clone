import { useState } from 'react'
import { Link } from 'react-router-dom'

function Popular() {
  const [count, setCount] = useState(0)

  return (
    <div id="popularComponent">
        <div className="popularArtistsSection">
            <Link
                to="/popular-artists"
                className="popularLink"
                style={{
                    color: "white",
                    fontSize: "var(--titleFont)"
                }}
            >
                <h2 style={{fontSize: "var(--titleFont"}}>Popular artists</h2>
            </Link>
        </div>
        <div className="popularAlbumsAndSinglesSection">
            <Link
                to="/popular-albums-and-singles"
                className="popularLink"
                style={{
                    color: "white",
                    fontSize: "var(--titleFont)"
                }}
            >
                <h2 style={{fontSize: "var(--titleFont"}}>Popular albums and singles</h2>
            </Link>
        </div>
        <div className="featuredChartsSection">
            <Link
                to="/featured-charts"
                className="popularLink"
                style={{
                    color: "white",
                    fontSize: "var(--titleFont)"
                }}
            >
                <h2 style={{fontSize: "var(--titleFont"}}>Featured Charts</h2>
            </Link>
        </div>
        <div className="popularRadioSection">
            <Link
                to="/popular-radio"
                className="popularLink"
                style={{
                    color: "white",
                    fontSize: "var(--titleFont)"
                }}
            >
                <h2 style={{fontSize: "var(--titleFont"}}>Popular Radio</h2>
            </Link>
        </div>
    </div>
  )
}

export default Popular;