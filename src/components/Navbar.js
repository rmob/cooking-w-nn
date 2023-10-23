import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// components
import Searchbar from './Searchbar'

// styles
import './Navbar.css'


export default function Navbar() {
  const { color} = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
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
