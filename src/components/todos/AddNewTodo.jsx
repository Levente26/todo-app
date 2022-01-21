import { useState } from "react"
// theme
import { useTheme } from '../../hooks/useTheme'

const AddNewTodo = ( { addTodo, dispatch } ) => {
    const { mode } = useTheme()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            id: Math.random(),
            title,
            desc,
            isCompleted: false
        }))
        setTitle("")
        setDesc("")
    }
    
    return (
        <>
            <h3 className="ml-1 mr-1 mb-2 font-lg">Új Teendő</h3>
            <form className="p-1" onSubmit={handleSubmit}>
                <label className="display-f">
                    <span>Teendő címe:</span>
                    <input
                        className="pl-1" 
                        type='text'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="display-f">
                    <span>Leírás:</span>
                    <input 
                        className="pl-1"
                        type='text'
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </label>
                <button className="mt-2 p-2 font-md">Hozzáadás</button>
            </form>
        </>
    )
}
export default AddNewTodo