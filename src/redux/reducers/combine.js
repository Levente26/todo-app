import { combineReducers } from "redux"
import reducer from "./reducer"

const reducers = combineReducers({
    todo: reducer
})

export default reducers