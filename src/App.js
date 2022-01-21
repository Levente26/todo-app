// styles
import './scss/base.scss'
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Search from './components/search/Search'
import Todos from './components/todos/Todos'

const App = () => {

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
