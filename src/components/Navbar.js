import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>COOKING ninja</h1>
            </Link>
            <Searchbar />
            <Link to="/create">
                <p>Create Recipe</p>
            </Link>
        </nav>
    </div>
  )
}
