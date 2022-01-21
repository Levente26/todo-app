import { useEffect } from "react"
// redux
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreator } from './redux/export'
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Search from './components/search/Search'
import Todos from './components/todos/Todos'

const App = () => {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { addTodo, editTodo, deleteTodo } = bindActionCreators(actionCreator, dispatch)

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state))
  }, [state])

  console.log(state)

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/searchTodo' element={<Search />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
