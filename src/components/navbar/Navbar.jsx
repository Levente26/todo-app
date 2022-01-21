import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <h1>Todo App</h1>
            <Link to='/search' className='link'>Keresés</Link>
        </nav>
    )
}
export default Navbar