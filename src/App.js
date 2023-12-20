import React, { Fragment, StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import Header from "./header";
import Home from "./comps/home";


import resumeSlice from "./features/resumeSlice"
import otherSlice from "./features/otherSlice"
import userSlice from "./features/userSlice"
import AppForm from './resume_comps/appForm';
import Register from './comps/register';
import Main from './comps/main';
import Login from './comps/login';

const myStore=configureStore({
  reducer:{
    resumeSlice,
    userSlice,
    otherSlice
  }
})

function App() {

  return (
 
    <BrowserRouter>
    <Provider store={myStore}>
    <Header></Header>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/resume" element={<AppForm></AppForm>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/main" element={<Main></Main>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<h2>404 not found</h2>}></Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  
  );
}

export default App;
