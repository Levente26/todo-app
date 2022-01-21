import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './home.scss'
import '../../scss/utilities.scss'
// theme
import { useTheme } from '../../hooks/useTheme'


const Home = () => {
    const { mode } = useTheme()
    const navigate = useNavigate()
    const [name, setName] = useState("")

    useEffect(() => {
        localStorage.setItem("name", name)
    },[name])

    const handleClick = () => {
        name.length > 0 && navigate('/todos')
    }

    return (
            <form>
                <label>
                    <span className='' >Szia, kérlek add meg a neved</span>
                    <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="ml-1 pl-1"
                    />
                </label>
                <button onClick={handleClick}>Tovább</button>
            </form>
    )
}
export default Home