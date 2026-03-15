import './Header.css'
import { BsCart3 } from 'react-icons/bs'

import { Navigate, useNavigate } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <div className='nav-bar'>
                <div className='burger-icon'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="#services">Services</a>
                    <a href="#call">Contact</a>
                </div>
                <div className='AddtoCart'>

                        <BsCart3 className='cart-icon' />
                        <span className='cart-span'>0</span>

                </div>
            </div>
        </nav>
    )
}

export default Nav;