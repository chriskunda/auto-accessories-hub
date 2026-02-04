import './Header.css'

const Nav = () => {
    return(
        <nav>
            <div className='nav-bar'>
                <div className='burger-icon'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="#services">Services</a>
                    <a href="#call">Contact</a>
                </div>
                <div className='icon'>
                    <h1>Automobile.</h1>
                </div>
            </div>
        </nav>
    )
}

export default Nav;