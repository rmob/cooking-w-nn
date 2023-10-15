import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>COOKING ninja</h1>
            </Link>
            <Link to="/create">
                <p>Create Recipe</p>
            </Link>
        </nav>
    </div>
  )
}
