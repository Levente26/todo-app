import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//redux
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './redux/features'
// theme 
import { ThemeProvider } from './context/ThemeContext';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
