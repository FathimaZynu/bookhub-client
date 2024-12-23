import React from 'react'
import booklogo from '../../assets/images/booklogo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

    let [toggle, setToggle] = useState(false)

    function toggleNavbar() {
        setToggle(!toggle)
    }
    return (
        <div>
            <nav className='navbar'>
                <button className="toggle-button" onClick={toggleNavbar}>
                    ☰
                </button>
                <div className='left-nav'>

                    <div className='logo'>
                        <img src={booklogo} alt="" height={'85px'} />
                    </div>
                    <div className='logo-name'>
                        BookHub
                    </div>


                </div>

                <div>
                    <ul className={`navbar-links ${toggle ? 'show' : ''}`}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/addbook'>Add Book</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar