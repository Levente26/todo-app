import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='p-1 display-f'>
            <h1 className='font-xl p-1'>Todo App</h1>
            <Link to='/search' className='link p-1'>Keresés</Link>
        </nav>
    )
}
export default Navbar