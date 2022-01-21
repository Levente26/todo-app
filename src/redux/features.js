import { createSlice } from "@reduxjs/toolkit";
import { FakeTodo } from "./FakeTodo";

export const todoSlice = createSlice({
  name: "todos",
  initialState: { value: FakeTodo },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title
          todo.desc = action.payload.desc;
        }
      });
    },
    updateCompleted: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateCompleted } = todoSlice.actions;
export default todoSlice.reducer;