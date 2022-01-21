import { useState } from "react"
// theme
import { useTheme } from '../../hooks/useTheme'

const TodoList = ( { list, deleteTodo, dispatch } ) => {
    const { mode } = useTheme()

    const handleDelete = (id) => {
        dispatch(deleteTodo({id: id}))
    }

    return (
        <ul>
            {list && list.map(todo => (
                <li className="br-sm display-f p-1 m-2 mr-4">
                    <h2 className="font-xxl br-default">{todo.title}</h2>
                    <p className="p-1 font-md ">{todo.desc}</p>
                    <button className="mt-2 p-2 font-md" onClick={() => handleDelete(todo.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}
export default TodoList