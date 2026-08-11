import { useCart } from '../context/CartContext'
import './Header.css'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Cart from '../pages/Cart'


const Nav = () => {

    const { cartOpen, openCart, closeCart, getCartCount } = useCart();
    const navigate = useNavigate();

    const navigateHomeHash = (hash, e) => {
        e.preventDefault();
        navigate(`/${hash}`);
    };

    return(
        <nav>
            <div className='nav-bar'>
                <div className='burger-icon'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="/#services" onClick={(e) => navigateHomeHash('#services', e)}>Services</a>
                    <a href="/#call" onClick={(e) => navigateHomeHash('#call', e)}>Contact</a>
                </div>
                <div className='AddtoCart'>

                    <BsCart3 className='cart-icon' onClick={openCart}/>
                    <span className='cart-span'>{getCartCount()}</span>
                </div>
            </div>
            
            {/* Informing Cart component to open panel */}
            <Cart opened={cartOpen} closed={closeCart}/>

        </nav>
    )
}

export default Nav;