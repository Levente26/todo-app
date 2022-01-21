import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, updateTodo, updateCompleted } from '../../redux/features'
import { useNavigate } from 'react-router-dom'
// theme
import { useTheme } from '../../hooks/useTheme'
import TodoList from '../todos/TodoList'
import { useState } from 'react'
import '../todos/todo.scss'

const Search = () => {
    const { mode } = useTheme()
    const navigate = useNavigate()
    const todoList = useSelector((state) => state.todos.value);
    const dispatch = useDispatch()
    const [list, setList] = useState([])
    
    const isCompleted = todoList.filter(todo => todo.isCompleted === true)
    const notCompleted = todoList.filter(todo => todo.isCompleted === false)

    const navigateToTodosPage = () => {
        navigate('/todos')
    }

    return (
        <div className={`App ${mode} search`}>
            <div className='display-f p-1 btn-container'>
                <button 
                    className={mode === "dark" ? 'p-1 m-1 btn-dark' : 'p-1 m-1'} 
                    onClick={() => setList(todoList)}
                > Összes </button>
                <button 
                    className={mode === "dark" ? 'p-1 m-1 btn-dark' : 'p-1 m-1'} 
                    onClick={() => setList(isCompleted)}
                > Befejezett </button>
                <button 
                    className={mode === "dark" ? 'p-1 m-1 btn-dark' : 'p-1 m-1'} 
                    onClick={() => setList(notCompleted)}
                > Folyamatban lévő </button>
                <button 
                    className={mode === "dark" ? 'p-1 m-1 btn-dark' : 'p-1 m-1'} 
                    onClick={navigateToTodosPage}
                > Új Todo létrehozása </button>
            </div>
            <TodoList 
                 dispatch={dispatch} 
                 updateTodo={updateTodo} 
                 updateCompleted={updateCompleted} 
                 deleteTodo={deleteTodo} 
                 list={list} 
            />
        </div>
    )
}
export default Search