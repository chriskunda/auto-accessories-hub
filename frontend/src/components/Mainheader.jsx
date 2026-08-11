import { useState } from 'react'
import './Mainheader.css'


const Mainnav = () => {

    return(
        <nav>
            <div className='nav-bar-main'>
                <div className='burger-icon-main'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links-main'>
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="#services">Services</a>
                    <a href="#call">Contact</a>
                </div>

            </div>

        </nav>
    )
}

export default Mainnav;