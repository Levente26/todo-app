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

    updateTodoDesc: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
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

export const { addTodo, deleteTodo, updateTodoDesc } = todoSlice.actions;
export default todoSlice.reducer;