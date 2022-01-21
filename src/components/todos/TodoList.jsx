import { useState } from "react"


const TodoList = ( { list } ) => {

    return (
        <div>
            {list.map(todo => (
                <h1>{todo.title}</h1>
            ))}
        </div>
    )
}
export default TodoList