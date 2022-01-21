import { useEffect } from "react"
// redux
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../../redux/features'
// import { bindActionCreators } from "redux"
// import { actionCreator } from '../../redux/export'
// components
import AddNewTodo from "./AddNewTodo"
import TodoList from "./TodoList"

const Todos = () => {

    const todoList = useSelector((state) => state.todos.value);
    const dispatch = useDispatch()

    console.log(todoList)

    return (
        <div>
            <div>
                <AddNewTodo dispatch={dispatch} addTodo={addTodo} />
            </div>
            <div>
                <TodoList dispatch={dispatch} deleteTodo={deleteTodo} list={todoList} />
            </div>
        </div>
    )
}
export default Todos