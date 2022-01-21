import { Link } from 'react-router-dom'
import './navbar.scss'
// theme
import { useTheme } from '../../hooks/useTheme'

const Navbar = () => {
    const { color, changeColor } = useTheme()

    return (
        <nav className='p-1 display-f' style={{background: color}}>
            <h1 className='font-xl p-1'>Todo App</h1>
            <Link to='/search' className='link p-1'>Keresés</Link>
        </nav>
    )
}
export default Navbar