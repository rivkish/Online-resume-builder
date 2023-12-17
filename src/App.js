import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import Header from "./header";
import Home from "./comps/home";
import About from "./comps/about";
import { Employee } from "./comps/employee";
import Form from "./comps/form";
import Counter from "./redux_comps/counter";
// import AppTodo from "./todo_redux_comps/appTodo";

import counterSlice from "./features/counterSlice"
import todoSlice from "./features/todoSlice"
import AppTodo from './todo_redux_comps/appTodo';

const myStore=configureStore({
  reducer:{
    counterSlice,
    todoSlice
  }
})

function App() {

  return (
    <BrowserRouter>
    <Provider store={myStore}>
    <Header></Header>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/employee" element={<Employee></Employee>}></Route>
      <Route path="/employee/:company" element={<Employee></Employee>}></Route>
      <Route path="/form" element={<Form></Form>}></Route>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="/todo" element={<AppTodo></AppTodo>}></Route>
      <Route path="*" element={<h2>404 not found</h2>}></Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
