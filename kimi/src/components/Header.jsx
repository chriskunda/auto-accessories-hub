import './Header.css'

const Nav = () => {
    return(
        <nav>
            <div className='nav-bar'>
                <div className='burger-icon'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links'>
                    <a href="">Products</a>
                    <a href="">Sales</a>
                    <a href="">Inventory</a>
                    <a href="">Reports</a>
                    <a href="">Dashboard</a>
                </div>
                <div className='icon'>
                    <h1>Automobile.</h1>
                </div>
            </div>
        </nav>
    )
}

export default Nav;