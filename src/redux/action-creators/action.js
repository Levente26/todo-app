export const addTodo = (todo) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }
}
export const deleteTodo = (todo) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo
        })
    }
}
export const editTodo = (todo) => {
    return (dispatch) => {
        dispatch({
            type: 'EDIT_TODO',
            payload: todo
        })
    }
}