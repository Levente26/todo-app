import { useState } from "react"
import deleteIcon from '../../asserts/delete.svg'
import editIcon from '../../asserts/edit.svg'
import doneIcon from '../../asserts/done.svg'
import removeDoneIcon from '../../asserts/removeDone.svg'

const TodoCard = ( { todo, deleteTodo, dispatch, updateTodo, updateCompleted } ) => {

    const [updateInput, setUpdateInput] = useState(false)
    const [updateTitle, setUpdateTitle] = useState("")
    const [updateDesc, setUpdateDesc] = useState("")


    const handleDelete = (id) => {
        dispatch(deleteTodo({id: id}))
    }

    const handleUpdate = (id, title, desc) => {
        console.log(title)
        
        if(updateTitle === ""){
            dispatch(updateTodo({
                id: id,
                title: title,
                desc: updateDesc,
            }))
        } 
        else if(updateDesc === ""){
            dispatch(updateTodo({
                id: id,
                title: updateTitle,
                desc: desc,
            }))
        } 
        else if(updateDesc === "" && updateTitle === ""){
            dispatch(updateTodo({
                title,
                desc,
            }))
        } 
        else {
            dispatch(updateTodo({
                id: id,
                title: updateTitle,
                desc: updateDesc,
            }))
        }
        setUpdateTitle("")
        setUpdateDesc("")
        setUpdateInput(false)
    }

    const handleCompleteTrue = (id) => {
        dispatch(updateCompleted({
            id: id,
            isCompleted: true,
        }))
    } 
    const handleCompleteFalse = (id) => {
        dispatch(updateCompleted({
            id: id,
            isCompleted: false,
        }))
    }
    console.log(todo)


    return (
        <div className={todo.isCompleted ? 'completed' : "todo"}>
            <h2 className="font-xxl br-default">
                {!updateInput ? 
                    todo.title 
                    : 
                    <form>
                        <input 
                            type="text"
                            value={updateTitle}
                            onChange={(e) => setUpdateTitle(e.target.value)}
                            className="pl-1 mt-1" 
                            placeholder={todo.title}
                        />
                    </form>
                }
            </h2>
            <div className="p-1 font-md display-f desc">
                {!updateInput ? 
                    todo.desc
                    :
                    <form>
                        <input 
                            type="text"
                            value={updateDesc}
                            onChange={(e) => setUpdateDesc(e.target.value)}
                            className="pl-1 mt-1" 
                            placeholder={todo.desc}
                        />
                        <button className="p-1 m-1 br-default" onClick={() => handleUpdate(todo.id, todo.title, todo.desc)}>
                            Kész
                        </button>
                    </form>
                }
            </div>
            <div className="display-f img-container">
                <img 
                    src={editIcon} 
                    alt="edit" 
                    className="mt-2 p-2" 
                    onClick={() => setUpdateInput(!updateInput)} 
                />
                <img 
                    src={deleteIcon} 
                    alt="delete" 
                    className="mt-2 p-2 font-md" 
                    onClick={() => handleDelete(todo.id)} 
                />
                { !todo.isCompleted === true ?
                    <img 
                    src={doneIcon} 
                    alt="done" 
                    className="mt-2 p-2 font-md" 
                    onClick={() => handleCompleteTrue(todo.id)} 
                    />
                    
                :
                    <img 
                    src={removeDoneIcon} 
                    alt="removedone" 
                    className="mt-2 p-2 font-md" 
                    onClick={() =>  handleCompleteFalse(todo.id)} 
                    />
                }
            </div>
        </div>
    )
}
export default TodoCard