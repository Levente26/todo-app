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
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.desc = action.payload.desc;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;