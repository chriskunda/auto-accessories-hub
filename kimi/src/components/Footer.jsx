import Pic from "../assets/accez.png"

import './Footer.css'

const Footer = () => {
    return(
        <div className='parent-footer'>
            <div className='sub-parent-footer'>

                <div className='footer-links'>

                    <div className='link'>
                        <h2>Reach us</h2>
                        <i class="fa-solid fa-phone"><a className="open" href="tel:+250798697759">+250 783 169 582</a></i>
                        <i class="fa-solid fa-at"><a className="open" href="mailto:christianira2003@gmail.com">ouremail@gmail.com</a></i>
                        <i class="fa-solid fa-location-dot"><a className="open" href="https://www.google.com/maps/place/1°56'52.9">KG 40 st, Kigali, Kimironko</a></i>
                        <i class="fa-regular fa-clock"><span className="open">Open from 8am to 8pm</span></i>
                    </div>
                    <div className='link'>
                        <h2>Our services</h2>
                        <i class="fa-solid fa-screwdriver-wrench"><a className="open" href="">Used tyres</a></i>
                        <i class="fa-solid fa-screwdriver-wrench"><a className="open" href="">New tyres</a></i>
                        <i class="fa-solid fa-screwdriver-wrench"><a className="open" href="">Wheel allignment</a></i>
                        <i class="fa-solid fa-screwdriver-wrench"><a className="open" href="">Oil change</a></i>
                    </div>
                    <div className='link'>
                        <h2>Legal</h2>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>
                    </div>
                    <div className='link'>
                        <div>
                            <h2>Social Media</h2>
                        </div>
                        <div className="sc2">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>

                </div>

                <div className='line'>
                    <hr />
                    
                </div>

                <div className="hero">
                    {/* <img className="hero-bg-text" src={Pic} alt="" /> */}
                    <h1 className="hero-bg-text">Auto Accessories Hub</h1>
                </div>

                <div className='footer'>
                    <p className="foot-p">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;