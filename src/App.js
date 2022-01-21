import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreator } from './redux/export'


const App = () => {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { addTodo, editTodo, deleteTodo } = bindActionCreators(actionCreator, dispatch)

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state))
  }, [state])

  console.log(state)

  return (
    <div className="App">
      na hello todo app
    </div>
  );
}

export default App;
