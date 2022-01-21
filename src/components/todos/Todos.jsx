import { useEffect } from "react"
// redux
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../../redux/features'
// import { bindActionCreators } from "redux"
// import { actionCreator } from '../../redux/export'
// components
import AddNewTodo from "./AddNewTodo"
import TodoList from "./TodoList"
import './todo.scss'

const Todos = () => {

    const todoList = useSelector((state) => state.todos.value);
    const dispatch = useDispatch()

    console.log(todoList)

    return (
        <div className="container display-g p-1 ">
            <div className="content p-1">
                <TodoList dispatch={dispatch} deleteTodo={deleteTodo} list={todoList} />
            </div>
            <div className=" sidebar p-2 mr-1">
                <AddNewTodo dispatch={dispatch} addTodo={addTodo} />
            </div>
        </div>
    )
}
export default Todos