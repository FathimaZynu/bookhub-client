import React from 'react'
import booklogo from '../../assets/images/booklogo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left-side'>
                <div className='logo'>
                    <img src={booklogo} alt="" height={'80px'} />
                </div>
                <div className='logo-name'>
                    BookHub
                </div>
            </div>
            <div className="right-navbar">
                <Link to='/booklist' className='navbar-link'>Books</Link>
                <Link to='/' className='navbar-link'>Home</Link>
                <Link to='/signup' className='navbar-link'>Sign Up</Link>

            </div>
        </nav>
    )
}

export default Navbar