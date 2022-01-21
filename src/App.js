// styles
import './scss/base.scss'
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Search from './components/search/Search'
import Todos from './components/todos/Todos'
// theme
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

const App = () => {

  const { mode } = useTheme()

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className={`App ${mode}`}>
          <ThemeSelector />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
