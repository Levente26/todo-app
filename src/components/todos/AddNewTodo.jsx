import { useState } from "react"

const AddNewTodo = ( { addTodo, dispatch } ) => {
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
            <h3>Új Teendő</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Teendő neve:</span>
                    <input 
                        type='text'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>Leírás:</span>
                    <input 
                        type='text'
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </label>
                <button>Hozzáadás</button>
            </form>
        </>
    )
}
export default AddNewTodo