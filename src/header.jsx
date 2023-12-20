import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"


const Header = () => {
    return (
        <header className='p-2 container-fluid bg-dark  py-3'>
            <div className='container'>
                <div className='row align-items-center'>
<div className='col-auto text-white'><i class="fa fa-file-text-o" aria-hidden="true"></i></div>
<nav className='nav col-auto'>
    <ul>
        <li>  <Link to="/" className='m-2'>Home</Link></li>
        {/* <li><Link to="/resume" className='m-2'>resume</Link></li>
        <li><Link to="/register" className='m-2'>register</Link></li> */}
        
        {/* <li> <Link to="/todo" className='m-2'>Todo</Link></li> */}
    </ul>
                     
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header