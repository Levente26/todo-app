import { Link } from 'react-router-dom'
import './navbar.scss'
// theme
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const { color, changeColor } = useTheme()
    const [name, setName] = useState("")

    setInterval(() => {
        setName(localStorage.getItem("name"))
    },5000)

    return (
        <nav className='p-1 display-f' style={{background: color}}>
            <h1 className='font-xl p-1'>Todo App</h1>
            { name && <div className='display-f searchbar-name'>
                <Link to='/search' className='link p-1 font-md'>Keresés</Link>
                <p className='p-1 font-lg'>Szia, {name}</p>
            </div>}
        </nav>
    )
}
export default Navbar