import { useState } from "react"


const TodoList = ( { list, deleteTodo, dispatch } ) => {

    const handleDelete = (id) => {
        dispatch(deleteTodo({id: id}))
    }

    return (
        <div>
            {list && list.map(todo => (
                <div>
                    <h2>{todo.title}</h2>
                    <p>{todo.desc}</p>
                    <button onClick={() => handleDelete(todo.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoList