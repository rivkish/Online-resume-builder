import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"


const Header = () => {
    return (
        <header className='p-2 container-fluid bg-dark mb-5  py-3'>
            <div className='container'>
                <div className='row align-items-center'>
<div className='col-auto text-white'>LOGO</div>
<nav className='nav col-auto'>
    <ul>
        <li>  <Link to="/" className='m-2'>Home</Link></li>
        <li><Link to="/about" className='m-2'>About</Link></li>
        <li> <Link to="/employee" className='m-2'>Employee</Link></li>
        <li><Link to="/form" className='m-2'>Form</Link></li>
        <li><Link to="/counter" className='m-2'>Counter</Link></li>
        <li><Link to="/todo" className='m-2'>Todo</Link></li>
        {/* <li> <Link to="/todo" className='m-2'>Todo</Link></li> */}
    </ul>
                     
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header