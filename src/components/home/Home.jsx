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
        <form className={`App ${mode} display-f p-1 home-form`}>
            <label>Szia, kérlek add meg a neved</label>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="ml-1 pl-1"
                />
            <button className={mode === "dark" ? 'p-1 m-1 btn-dark' : 'p-1 m-1'} onClick={handleClick}>Tovább</button>
        </form>
    )
}
export default Home