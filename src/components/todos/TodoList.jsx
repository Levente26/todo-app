import TodoCard from "./TodoCard"

const TodoList = ( { list, deleteTodo, dispatch, updateTodo, updateCompleted } ) => {
    

    return (
        <ul>
            {list && list.map(todo => (
                <li key={todo.id} className="br-sm display-f p-1 m-2">
                    <TodoCard 
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateCompleted={updateCompleted}
                        dispatch={dispatch}
                        updateTodo={updateTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
export default TodoList