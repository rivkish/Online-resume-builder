// import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css';
import React from 'react'
import Header from "./header";
import Home from "./comps/home";
import About from "./comps/about";
import { Employee } from "./comps/employee";
import Form from "./comps/form";
import Counter from "./comps/counter";



function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/employee" element={<Employee></Employee>}></Route>
      <Route path="/employee/:company" element={<Employee></Employee>}></Route>
      <Route path="/form" element={<Form></Form>}></Route>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="*" element={<h2>404 not found</h2>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
